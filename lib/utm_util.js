'use strict';

const Proj4 = require('proj4');

module.exports = {
  getZone: function (lat, lon) {

    if (isNaN(lat) || isNaN(lon)) {
      throw new Error('Invalid point');
    }

    // typecast
    lat = parseFloat(lat);
    lon = parseFloat(lon);

    if (!(lat > -80 && lat <= 84)) {
      throw new Error('Outside UTM limits');
    }

    const zone = Math.floor((lon + 180) / 6) + 1; // longitudinal zone

    if (lat < 0) {
      return `${zone}S`;
    }

    return `${zone}N`;
  },


  /**
   * getProj4 - get proj4 string for UTM zone
   *
   * @param  {string} zone utm zone name
   * @return {string}      proj4 string
   */
  getProj4: function (zone) {

    if (zone.length > 3) {
      throw new Error('UTM zone invalid');
    }

    const isSouth = zone.substr(-1, 1).toLowerCase() === 's';
    zone = parseInt(zone);

    if (isNaN(zone) || zone < 1 || zone > 60) {
      throw new Error('UTM zone invalid');
    }

    if (isSouth) {
      return `+proj=utm +zone=${zone} +south +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
    }

    return `+proj=utm +zone=${zone} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
  },


  /**
   * getUtmCoord - get UTM coord from lat/lon
   *
   * @param  {float} lat Latitude
   * @param  {float} lon Longitude
   * @return {object}     {northing, easting, utm zone}
   */
  getUtmCoord(lat, lon) {

    const zone = this.getZone(lat, lon);
    const proj4 = this.getProj4(zone);
    Proj4.defs('output', proj4);

    const utmPoint = new Proj4('output', [lon, lat]);

    return {
      northing: utmPoint[1],
      easting: utmPoint[0],
      zone
    };
  },


  /**
   * getCustomProj4 - get custom proj4 string
   *
   * @param  {float} lat Latitude
   * @param  {float} lon Longitude
   * @return {string}     proj4 string
   */
  getCustomProj4: function (lat, lon) {

    return `+proj=tmerc +lat_0=${lat} +lon_0=${lon} +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
  },

  /**
   * getEPSGCode - Returns the WGS84 UTM Zone EPSG code for a give latlon
   *
   * @param  {float} lat Latitude
   * @param  {float} lon Longitude
   * @return {string}     EPSG string
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
};
