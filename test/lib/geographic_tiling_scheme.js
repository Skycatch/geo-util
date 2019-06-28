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
    it('should calculate the bounding rectangle in radians for a set of positions', () => {
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
      const rect = tilingScheme.rectangleForPositionsAtLevel(positions, level)
      expect(rect).to.equal({
        west: -2.1358764995322694,
        east: -2.135493004335298,
        south: 0.6599952339877971,
        north: 0.6601869815862829,
        width: 0.0003834951969712286,
        height: 0.0001917475984857253
      })
    })
  })

  describe('nativeRectangleForPositionsAtLevel', () => {
    it('should calculate the bounding rectangle in degrees for a set of positions', () => {
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
  })
})
