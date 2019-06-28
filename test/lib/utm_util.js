'use strict'

const { expect } = require('code')
const Lab = require('lab')
const UtmUtil = require('../../lib/utm_util')
const { after, before, describe, it } = (exports.lab = Lab.script())

describe('UtmUtil', () => {
  before(() => {})
  after(() => {})

  describe('UtmUtil#getZone', () => {
    it('returns the UTM zone from lat/lon', () => {
      const goodPoints = [
        { lat: 37, lon: -122, zone: '10N' },
        { lat: 3, lon: 4, zone: '31N' },
        { lat: -34.5, lon: 34, zone: '36S' }
      ]

      for (const point of goodPoints) {
        const zone = UtmUtil.getZone(point.lat, point.lon)
        expect(zone).to.equal(point.zone)
      }
    })

    it('throws an error on invalid lat/lon', () => {
      const invalidPoint = { lat: 'what', lon: -122 }
      const oobPoint1 = { lat: -85, lon: 4 }
      const oobPoint2 = { lat: 87, lon: 4 }

      try {
        UtmUtil.getZone(invalidPoint.lat, invalidPoint.lon)
      } catch (e) {
        expect(e.message).to.equal('Invalid point')
      }

      try {
        UtmUtil.getZone(oobPoint1.lat, oobPoint1.lon)
      } catch (e) {
        expect(e.message).to.equal('Outside UTM limits')
      }

      try {
        UtmUtil.getZone(oobPoint2.lat, oobPoint2.lon)
      } catch (e) {
        expect(e.message).to.equal('Outside UTM limits')
      }
    })
  })

  describe('UtmUtil#getProj4', () => {
    it('returns the proj4 string', () => {
      const zones = [
        {
          zone: '10N',
          proj4:
            '+proj=utm +zone=10 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
        },
        {
          zone: '10S',
          proj4:
            '+proj=utm +zone=10 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
        },
        {
          zone: '55n',
          proj4:
            '+proj=utm +zone=55 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
        }
      ]

      for (const zone of zones) {
        const proj4 = UtmUtil.getProj4(zone.zone)
        expect(proj4).to.equal(zone.proj4)
      }
    })

    it('throws an error on invalid utm zone', () => {
      const zones = [
        { zone: '70n' },
        { zone: '10SS' },
        { zone: 'sbn' },
        { zone: '-4s' }
      ]

      for (const zone of zones) {
        try {
          UtmUtil.getProj4(zone.zone)
          expect(true).to.equal(false)
        } catch (e) {
          expect(e.message).to.equal('UTM zone invalid')
        }
      }
    })
  })

  describe('UtmUtil#getCoord', () => {
    it('returns the UTM coordinate', () => {
      const points = [
        {
          lat: 38,
          lon: -122,
          northing: 4206286.75,
          easting: 587798.41,
          zone: '10N'
        },
        {
          lat: 32,
          lon: 94,
          northing: 3540872.53,
          easting: 594457.46,
          zone: '46N'
        },
        {
          lat: 2,
          lon: -1,
          northing: 221196.53,
          easting: 722460.63,
          zone: '30N'
        }
      ]

      for (const point of points) {
        const coord = UtmUtil.getCoord(point.lat, point.lon)
        expect(coord.northing).to.about(point.northing, 0.01)
        expect(coord.easting).to.about(point.easting, 0.01)
        expect(coord.zone).to.equal(point.zone)
      }
    })

    it('returns the UTM coordinate of given zone', () => {
      const points = [
        {
          lat: 38,
          lon: -122,
          northing: 4217628.24,
          easting: 60877.58,
          zone: '11N'
        },
        {
          lat: 32,
          lon: 94,
          northing: 3561928.3,
          easting: 1161912.96,
          zone: '45N'
        }
      ]

      for (const point of points) {
        const coord = UtmUtil.getCoord(point.lat, point.lon, point.zone)
        expect(coord.northing).to.about(point.northing, 0.01)
        expect(coord.easting).to.about(point.easting, 0.01)
        expect(coord.zone).to.equal(point.zone)
      }
    })
  })

  describe('UtmUtil#getLatLon', () => {
    it('returns the lat/lon coordinate', () => {
      const points = [
        {
          lat: 38,
          lon: -122,
          northing: 4206286.75,
          easting: 587798.41,
          zone: '10N'
        },
        {
          lat: 32,
          lon: 94,
          northing: 3540872.53,
          easting: 594457.46,
          zone: '46N'
        },
        {
          lat: 2,
          lon: -1,
          northing: 221196.53,
          easting: 722460.63,
          zone: '30N'
        }
      ]

      for (const point of points) {
        const coord = UtmUtil.getLatLon(
          point.northing,
          point.easting,
          point.zone
        )
        expect(coord.lat).to.about(point.lat, 0.000001)
        expect(coord.lon).to.about(point.lon, 0.000001)
      }
    })
  })

  describe('UtmUtil#getCustomProj4', () => {
    it('returns proj4 string for any given lat/lon', () => {
      const points = [
        {
          lat: 38,
          lon: -122,
          proj4:
            '+proj=tmerc +lat_0=38 +lon_0=-122 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
        }
      ]

      for (const point of points) {
        const proj4 = UtmUtil.getCustomProj4(point.lat, point.lon)
        expect(proj4).to.equal(point.proj4)
      }
    })
  })

  describe('UtmUtil#getEPSGCode', () => {
    it('returns ESPG code for any given lat/lon', () => {
      const points = [
        { lat: 38, lon: -122, epsg: 'epsg:32610' },
        { lat: -38, lon: -122, epsg: 'epsg:32710' },
        { lat: 38, lon: -100, epsg: 'epsg:32614' }
      ]

      for (const point of points) {
        const epsg = UtmUtil.getEPSGCode(point.lat, point.lon)
        expect(epsg).to.equal(point.epsg)
      }
    })
  })
})
