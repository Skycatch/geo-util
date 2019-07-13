'use strict'

const { expect } = require('code')
const Lab = require('lab')
const { before, describe, it } = (exports.lab = Lab.script())

const GeographicTilingScheme = require('../../lib/geographic_tiling_scheme')

describe('GeographicTilingScheme', () => {
  let tilingScheme

  before(() => {
    tilingScheme = new GeographicTilingScheme()
  })

  describe('constants', () => {
    it('ELLIPSOID_MAX_RADIUS: equals 6378137', () => {
      expect(GeographicTilingScheme.ELLIPSOID_MAX_RADIUS).to.equal(6378137)
    })
  })

  describe('metersToDegrees', () => {
    it('should convert meters to decimal degrees', () => {
      const dd = tilingScheme.metersToDegrees(111.32)
      expect(dd).to.be.about(0.001, 0.00001)
    })
  })

  describe('getLevelMaximumGeometricError', () => {
    it('should calculate the maximum geometric error at the given level', () => {
      const e1 = tilingScheme.getLevelMaximumGeometricError(12)
      expect(e1).to.equal(18.81526850096646)

      const e2 = tilingScheme.getLevelMaximumGeometricError(14)
      expect(e2).to.equal(4.703817125241615)
    })
  })

  describe('positionToTileXY', () => {
    it('should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14}', () => {
      const { x, y } = tilingScheme.positionToTileXY(
        37.8238667,
        -122.3681195,
        14
      )
      expect(x).to.equal(5245)
      expect(y).to.equal(4749)
    })
  })

  describe('tileXYToRectangle', () => {
    it('should calculate the tile rectangle for the tile', () => {
      const x = 5245
      const y = 4749
      const level = 14
      const rect = tilingScheme.tileXYToRectangle(x, y, level)
      expect(rect).to.equal({
        west: -2.1358764995322694,
        south: 0.6599952339877971,
        east: -2.135684751933784,
        north: 0.6601869815862829,
        width: 0.00019174759848570515,
        height: 0.00019174759848570515
      })
    })
  })

  describe('tilesForPositionsAtLevel', () => {
    const positions = [
      { lat: 37.8258381, lon: -122.3712945 },
      { lat: 37.8219321, lon: -122.3713276 },
      { lat: 37.8258039, lon: -122.3649134 },
      { lat: 37.8218978, lon: -122.3649469 }
    ]

    it('should calculate the tiles needed to cover a set of positions', () => {
      const level = 14
      const tiles = tilingScheme.tilesForPositionsAtLevel(positions, level)
      expect(tiles).to.equal([{ x: 5245, y: 4749 }, { x: 5246, y: 4749 }])
    })

    it('should calculate the tiles needed to cover a set of positions', () => {
      const level = 22
      const tiles = tilingScheme.tilesForPositionsAtLevel(positions, level)
      expect(tiles).to.equal([
        { x: 1342845, y: 1215837 },
        { x: 1342994, y: 1215837 },
        { x: 1342845, y: 1215746 },
        { x: 1342994, y: 1215746 }
      ])
    })
  })

  describe('rectangleForPositionsAtLevel', () => {
    it('should calculate the bounding rectangle in radians for a set of positions with a buffer applied', () => {
      const level = 14

      // Original gdalinfo bounds (UTM zone 10N)
      // Upper Left  (  555329.227, 4186677.853) (122d22'16.66"W, 37d49'33.02"N)
      // Lower Left  (  555329.227, 4186244.453) (122d22'16.78"W, 37d49'18.96"N)
      // Upper Right (  555890.827, 4186677.853) (122d21'53.69"W, 37d49'32.89"N)
      // Lower Right (  555890.827, 4186244.453) (122d21'53.81"W, 37d49'18.83"N)
      const positions = [
        { lat: 37.8258381, lon: -122.3712945 },
        { lat: 37.8219321, lon: -122.3713276 },
        { lat: 37.8258039, lon: -122.3649134 },
        { lat: 37.8218978, lon: -122.3649469 }
      ]
      const rect = tilingScheme.rectangleForPositionsAtLevel(
        positions,
        level,
        -0.001
      )
      expect(rect).to.equal({
        west: -2.1358764905491165,
        east: -2.135493013318451,
        south: 0.65999524297095,
        north: 0.66018697260313,
        width: 0.00038347723066545214,
        height: 0.00019172963217994887
      })
    })
  })

  describe('nativeRectangleForPositionsAtLevel', () => {
    it('TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer', () => {
      const level = 14

      // Corner Coordinates: UTM zone 10N
      // Upper Left  (  555329.227, 4186677.853) (122d22'16.66"W, 37d49'33.02"N)
      // Lower Left  (  555329.227, 4186244.453) (122d22'16.78"W, 37d49'18.96"N)
      // Upper Right (  555890.827, 4186677.853) (122d21'53.69"W, 37d49'32.89"N)
      // Lower Right (  555890.827, 4186244.453) (122d21'53.81"W, 37d49'18.83"N)
      const positions = [
        { lat: 37.8258381, lon: -122.3712945 },
        { lat: 37.8219321, lon: -122.3713276 },
        { lat: 37.8258039, lon: -122.3649134 },
        { lat: 37.8218978, lon: -122.3649469 }
      ]

      // without buffer applied
      const rect = tilingScheme.nativeRectangleForPositionsAtLevel(
        positions,
        level
      )

      expect(rect).to.equal({
        west: -122.376708984375,
        south: 37.81494140625,
        east: -122.354736328125,
        north: 37.825927734375,
        width: 0.021972656249989588,
        height: 0.010986328125001155
      })
    })

    it('TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied', () => {
      const level = 14

      // Corner Coordinates: UTM zone 10N
      // Upper Left  (  555329.227, 4186677.853) (122d22'16.66"W, 37d49'33.02"N)
      // Lower Left  (  555329.227, 4186244.453) (122d22'16.78"W, 37d49'18.96"N)
      // Upper Right (  555890.827, 4186677.853) (122d21'53.69"W, 37d49'32.89"N)
      // Lower Right (  555890.827, 4186244.453) (122d21'53.81"W, 37d49'18.83"N)
      const positions = [
        { lat: 37.8258381, lon: -122.3712945 },
        { lat: 37.8219321, lon: -122.3713276 },
        { lat: 37.8258039, lon: -122.3649134 },
        { lat: 37.8218978, lon: -122.3649469 }
      ]
      const rect = tilingScheme.nativeRectangleForPositionsAtLevel(
        positions,
        level,
        -0.001
      )

      expect(rect).to.equal({
        west: -122.37670846967823,
        south: 37.81494192094675,
        east: -122.35473684282175,
        north: 37.825927219678256,
        width: 0.021971626856495157,
        height: 0.010985298731506724
      })
    })

    it('Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer', () => {
      const level = 14

      // Corner Coordinates: UTM zone 54N
      // Upper Left  (  439825.243, 4144683.620) (140d19'10.91"E, 37d26'49.36"N)
      // Lower Left  (  439825.243, 4144535.420) (140d19'10.96"E, 37d26'44.55"N)
      // Upper Right (  439944.843, 4144683.620) (140d19'15.78"E, 37d26'49.39"N)
      // Lower Right (  439944.843, 4144535.420) (140d19'15.82"E, 37d26'44.58"N)
      // Center      (  439885.043, 4144609.520) (140d19'13.37"E, 37d26'46.97"N)
      const positions = [
        { lat: 37.447045, lon: 140.319698 },
        { lat: 37.4457093, lon: 140.3197101 },
        { lat: 37.4470528, lon: 140.32105 },
        { lat: 37.445717, lon: 140.3210621 }
      ]
      const rect = tilingScheme.nativeRectangleForPositionsAtLevel(
        positions,
        level
      )

      expect(rect).to.equal({
        west: 140.31738281250003,
        south: 37.44140625,
        east: 140.328369140625,
        north: 37.452392578125,
        width: 0.010986328124982072,
        height: 0.010986328125001155
      })
    })
  })

  describe('tilePixelToPosition', () => {
    it('should return the geographic x,y in radians for the given pixel of a 256x256 tile', () => {
      const tilingScheme = new GeographicTilingScheme({
        tilePixelWidth: 256,
        tilePixelHeight: 256
      })

      const rectangle = tilingScheme.rectangleForPositionsAtLevel(
        [{ lat: 37.8258381, lon: -122.3712945 }],
        20
      )

      // pixel origin is bottom left

      // get the southwest most position
      const { x: x1, y: y1 } = tilingScheme.tilePixelToPosition(rectangle, 0, 0)
      expect(x1).to.equal(rectangle.west)
      expect(y1).to.equal(rectangle.south)

      // get the northwest most position
      const { x: x2, y: y2 } = tilingScheme.tilePixelToPosition(
        rectangle,
        0,
        255
      )
      expect(x2).to.equal(rectangle.west)
      expect(y2).to.equal(rectangle.north)

      // get the northeast most position
      const { x: x3, y: y3 } = tilingScheme.tilePixelToPosition(
        rectangle,
        255,
        255
      )
      expect(x3).to.equal(rectangle.east)
      expect(y3).to.equal(rectangle.north)

      // get the southeast most position
      const { x: x4, y: y4 } = tilingScheme.tilePixelToPosition(
        rectangle,
        255,
        0
      )
      expect(x4).to.equal(rectangle.east)
      expect(y4).to.equal(rectangle.south)

      // check the center position
      const center = 255 / 2
      const { x: x5, y: y5 } = tilingScheme.tilePixelToPosition(
        rectangle,
        center,
        center
      )
      expect(x5).to.equal(rectangle.west + rectangle.width / 2)
      expect(y5).to.equal(rectangle.south + rectangle.height / 2)
    })
  })

  describe('tilePixelToNativePosition', () => {
    it('should return the geographic x,y in latlon for the given pixel of a 256x256 tile', () => {
      const tilingScheme = new GeographicTilingScheme({
        tilePixelWidth: 256,
        tilePixelHeight: 256
      })
      const rectangle = tilingScheme.rectangleForPositionsAtLevel(
        [{ lat: 37.8258381, lon: -122.3712945 }],
        20
      )

      const center = 255 / 2
      const { x, y } = tilingScheme.tilePixelToNativePosition(
        rectangle,
        center,
        center
      )
      expect(x).to.equal(-122.37130165100096)
      expect(y).to.equal(37.82584190368653)
    })
  })
})
