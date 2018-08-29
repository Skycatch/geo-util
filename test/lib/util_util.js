'use strict';

const { expect } = require('code');
const Lab = require('lab');
const UtmUtil = require('../../lib/utm_util');
const { after, before, describe, it } = exports.lab = Lab.script();

describe('UtmUtil#getZone', () => {

  before(() => {});
  after(() => {});

  it('returns the UTM zone from lat/lon', () => {

    const goodPoints = [
      { lat: 37, lon: -122, zone: '10N' },
      { lat: 3, lon: 4, zone: '31N' },
      { lat: -34.5, lon: 34, zone: '36S' }
    ];

    for (const point of goodPoints) {

      const zone = UtmUtil.getZone(point.lat, point.lon);
      expect(zone).to.equal(point.zone);
    }

  });

  it('throws an error on invalid lat/lon', () => {

    const invalidPoint = { lat: 'what', lon: -122 };
    const oobPoint1 = { lat: -85, lon: 4 };
    const oobPoint2 = { lat: 87, lon: 4 };

    try {
      UtmUtil.getZone(invalidPoint.lat, invalidPoint.lon);
    }
    catch (e) {
      expect(e.message).to.equal('Invalid point');
    }

    try {
      UtmUtil.getZone(oobPoint1.lat, oobPoint1.lon);
    }
    catch (e) {
      expect(e.message).to.equal('Outside UTM limits');
    }

    try {
      UtmUtil.getZone(oobPoint2.lat, oobPoint2.lon);
    }
    catch (e) {
      expect(e.message).to.equal('Outside UTM limits');
    }

  });

});

describe('UtmUtil#getProj4', () => {

  it('returns the proj4 string', () => {

    const zones = [
      { zone: '10N', proj4: '+proj=utm +zone=10 +ellps=WGS84 +datum=WGS84 +units=m +no_defs' },
      { zone: '10S', proj4: '+proj=utm +zone=10 +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs' },
      { zone: '55n', proj4: '+proj=utm +zone=55 +ellps=WGS84 +datum=WGS84 +units=m +no_defs' }
    ];

    for (const zone of zones) {

      const proj4 = UtmUtil.getProj4(zone.zone);
      expect(proj4).to.equal(zone.proj4);
    }
  });

});
