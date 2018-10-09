'use strict';

const { expect } = require('code');
const Lab = require('lab');
const StereaUtil = require('../../lib/sterea_util');
const { after, before, describe, it } = exports.lab = Lab.script();

describe('StereaUtil', () => {

  before(() => {});
  after(() => {});

  describe('StereaUtil#getProj4', () => {

    it('returns the proj4 string from lat/lon', () => {

      const points = [
        { lat: 37, lon: -122, proj4: '+proj=sterea +lat_0=37 +lon_0=-122 +k_0=1 +x_0=0 +y_0=0' },
        { lat: 3, lon: 4, proj4: '+proj=sterea +lat_0=3 +lon_0=4 +k_0=1 +x_0=0 +y_0=0' },
        { lat: -34.5, lon: 34, proj4: '+proj=sterea +lat_0=-34.5 +lon_0=34 +k_0=1 +x_0=0 +y_0=0' }
      ];

      for (const point of points) {

        const proj4 = StereaUtil.getProj4(point.lat, point.lon);
        expect(proj4).to.equal(point.proj4);
      }

    });

  });

  describe('StereaUtil#getCoord', () => {

    it('returns the projected coordinate', () => {

      const points = [
        { lat: 38, lon: -122, northing: 110989.84, easting: 0, lat0: 37, lon0: -122 },
        { lat: 32, lon: 94, northing: 0, easting: 0, lat0: 32, lon0: 94 },
        { lat: 2, lon: -1, northing: -55287.96, easting: 11125.42, lat0: 2.5, lon0: -1.1 }
      ];

      for (const point of points) {

        const coord = StereaUtil.getCoord(point.lat, point.lon, point.lat0, point.lon0);
        expect(coord.northing).to.about(point.northing, 0.01);
        expect(coord.easting).to.about(point.easting, 0.01);
      }

    });
  });

  describe('StereaUtil#getLatLon', () => {

    it('returns the lat lon coordinate', () => {

      const points = [
        { lat: 38, lon: -122, northing: 110989.84, easting: 0, lat0: 37, lon0: -122 },
        { lat: 32, lon: 94, northing: 0, easting: 0, lat0: 32, lon0: 94 },
        { lat: 2, lon: -1, northing: -55287.96, easting: 11125.42, lat0: 2.5, lon0: -1.1 }
      ];

      for (const point of points) {

        const coord = StereaUtil.getLatLon(point.northing, point.easting, point.lat0, point.lon0);
        expect(coord.lat).to.about(point.lat, 0.01);
        expect(coord.lon).to.about(point.lon, 0.01);
      }

    });
  });
});
