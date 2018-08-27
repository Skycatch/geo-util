'use strict';

const Proj4 = require('proj4');

module.exports = {
  getZone: function (lat, lng) {
    if (isNaN(lat) || isNaN(lng)) throw new Error('Invalid point');

    // typecast
    lat = parseFloat(lat);
    lng = parseFloat(lng);

    if (!(-80<=lat && lat<=84)) throw new Error('Outside UTM limits');

    const zone = Math.floor((lng+180)/6) + 1; // longitudinal zone

    if (lat < 0) {
      return `${zone}S`;
    }

    return `${zone}N`;
  },

  getProj4: function (zone) {

    let isSouth = zone.substr(-1, 1).toLowerCase() == 's';


    if (zone < 1 || zone > 60) {
      throw new Error('UTM zone invalid');
    }

    if (isSouth) {
      return `+proj=utm +zone=${zone} +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
    } else {
      return `+proj=utm +zone=${zone} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
    }
  },

  getUtmCoord (lat, lon) {
    let zone = this.getZone(lat, lon);
    let proj4 = this.getProj4(zone);
    Proj4.defs('output', proj4);

    let utmPoint = new Proj4('output', [lon, lat]);

    return {
      northing: utmPoint[1],
      easting: utmPoint[0],
      zone: zone
    }

  },

  getCustomProj4: function (lat, lng) {
    return `+proj=tmerc +lat_0=${lat} +lon_0=${lng} +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
  },
  /**
   * Returns the WGS84 UTM Zone EPSG code for a give latlng
   * @see http://gis.stackexchange.com/questions/33219/how-to-convert-lat-long-to-utm-using-proj4j-similar-to-jscience-utm-latlongtou
   */
  getEPSGCode: function (lat, lon) {
    const zone = this.getZone(lat, lon);
    const zoneNum = zone.replace('N', '').replace('S', '');

    if (zone.indexOf('S') !== -1) {
      return `epsg:327${zoneNum}`;
    }

    return `epsg:326${zoneNum}`;
  }
}
