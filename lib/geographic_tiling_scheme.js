'use strict'

/**
 * A tiling scheme for geometry referenced to a simple geographic projection where lat and lon
 * are directly mapped to X and Y. This projection is commonly known as geographic, equirectangular,
 * equidistant cylindrical, or plate carrée.
 *
 * This class was inpsired by the Cesium class of the same name
 * @see https://cesiumjs.org/Cesium/Build/Documentation/GeographicTilingScheme.html
 */
class GeographicTilingScheme {
  constructor (opts) {
    const defaults = {
      numOfLevelZeroTilesX: 2,
      numOfLevelZeroTilesY: 1,
      tilePixelWidth: 65, // default pixel size for terrain tiles
      tilePixelHeight: 65 // default pixel size for terrain tiles
    }
    Object.assign(this, defaults, opts)
  }

  /**
   * WGS84 ellipsoid max radius
   */
  static get ELLIPSOID_MAX_RADIUS () {
    return Math.max(6378137.0, 6378137.0, 6356752.3142451793) // WGS84 ellipsoid x,y,z in meters
  }

  /**
   * WGS84 ellipsoid circumference in meters
   */
  static get ELLIPSOID_CIRCUMFERENCE () {
    return (
      GeographicTilingScheme.ELLIPSOID_MAX_RADIUS *
      GeographicTilingScheme.TWO_PI
    )
  }

  static get TWO_PI () {
    return Math.PI * 2
  }

  static get PI_OVER_TWO () {
    return Math.PI / 2
  }

  /**
   * Largest possible rectangle for this tiling scheme
   */
  static get RECTANGLE () {
    const west = -Math.PI
    const south = -GeographicTilingScheme.PI_OVER_TWO
    const east = Math.PI
    const north = GeographicTilingScheme.PI_OVER_TWO

    const width =
      east < west ? east + GeographicTilingScheme.TWO_PI - west : east - west
    const height =
      north < south
        ? north + GeographicTilingScheme.TWO_PI - south
        : north - south

    return { west, south, east, north, width, height }
  }

  /**
   * Gets the total number of tiles in the X direction at a specified level-of-detail.
   * @param {Number} level The level-of-detail.
   * @returns {Number} The number of tiles in the X direction at the given level.
   */
  getNumberOfXTilesAtLevel (level) {
    return this.numOfLevelZeroTilesX << level
  }

  /**
   * Gets the total number of tiles in the X direction at a specified level-of-detail.
   * @param {Number} level The level-of-detail.
   * @returns {Number} The number of tiles in the X direction at the given level.
   */
  getNumberOfYTilesAtLevel (level) {
    return this.numOfLevelZeroTilesY << level
  }

  /**
   * Converts radians to degrees
   * @param {number} r Radians
   */
  toDegrees (r) {
    return (r * 180) / Math.PI
  }

  /**
   * Converts degrees to radians
   * @param {number} d Degrees
   */
  toRadians (d) {
    return (d * Math.PI) / 180
  }

  metersToDegrees (m) {
    const md = GeographicTilingScheme.ELLIPSOID_CIRCUMFERENCE / 360
    return m / md
  }

  /**
   * Calculates the origin coordinates of the tile containing a given lat and lon
   * @param {number} lat Latitude in decimal degrees
   * @param {number} lon Longitude in decimal degrees
   * @param {number} level The tile level-of-detail.  Zero is the least detailed.
   * @param {boolean} tmsY true to get the Y value in TMS instead of XYZ
   * @returns {object} A new object containing the tile x, y coordinates of the tile
   */
  positionToTileXY (lat, lon, level, tmsY = false) {
    const rectangle = GeographicTilingScheme.RECTANGLE
    const xTiles = this.getNumberOfXTilesAtLevel(level)
    const yTiles = this.getNumberOfYTilesAtLevel(level)
    const xTileWidth = rectangle.width / xTiles
    const yTileHeight = rectangle.height / yTiles

    lon = this.toRadians(lon)
    lat = this.toRadians(lat)

    let xTileCoordinate = ((lon - rectangle.west) / xTileWidth) | 0
    if (xTileCoordinate >= xTiles) xTileCoordinate = xTiles - 1

    let yTileCoordinate = ((rectangle.north - lat) / yTileHeight) | 0
    if (yTileCoordinate >= yTiles) yTileCoordinate = yTiles - 1

    if (tmsY) yTileCoordinate = yTiles - yTileCoordinate - 1

    return { x: xTileCoordinate, y: yTileCoordinate }
  }

  /**
   * Converts tile x, y coordinates and level to a cartographic rectangle in radians
   * @param {integer} x tile x origin coordinate
   * @param {integer} y tile y origin coordinate
   * @param {number} level The tile level-of-detail.  Zero is the least detailed.
   * @param {boolean} tmsY true to indicate that the Y value is TMS instead of XYZ
   */
  tileXYToRectangle (x, y, level, tmsY = false) {
    const rectangle = GeographicTilingScheme.RECTANGLE
    const xTiles = this.getNumberOfXTilesAtLevel(level)
    const yTiles = this.getNumberOfYTilesAtLevel(level)

    const width = rectangle.width / xTiles
    const west = x * width + rectangle.west
    const east = (x + 1) * width + rectangle.west
    // const east = west + width

    const height = rectangle.height / yTiles

    if (tmsY) y = yTiles - y - 1
    const north = rectangle.north - y * height
    const south = rectangle.north - (y + 1) * height

    return { west, south, east, north, width, height }
  }

  /**
   * Converts tile x, y coordinates and level to a rectangle expressed in the native coordinates of the tiling scheme
   * @param {integer} x tile x origin coordinate
   * @param {integer} y tile y origin coordinate
   * @param {number} level The tile level-of-detail.  Zero is the least detailed.
   */
  tileXYToNativeRectangle (x, y, level, tmsY = false) {
    const rect = this.tileXYToRectangle(x, y, level, tmsY)
    return this._toNativeRectangle(rect)
  }

  /**
   * Get a list of the tiles at `level` that contain the specified `positions`
   * @param {array} positions List of latlon positions
   * @param {number} level The tile level-of-detail.  Zero is the least detailed.
   * @param {boolean} tmsY true to indicate that the Y value should be in TMS instead of XYZ
   */
  tilesForPositionsAtLevel (positions, level, tmsY = false) {
    let west, south, east, north

    // build the bounding box from the positions
    positions.forEach(pos => {
      const { lat, lon } = pos
      west = west === undefined || lon < west ? lon : west
      east = east === undefined || lon > east ? lon : east
      south = south === undefined || lat < south ? lat : south
      north = north === undefined || lat > north ? lat : north
    })

    const sw = { lat: south, lon: west }
    const se = { lat: south, lon: east }
    const nw = { lat: north, lon: west }
    const ne = { lat: north, lon: east }
    const bbox = [sw, se, nw, ne]

    // calculate the tile rectangles
    const tiles = bbox.reduce((memo, pos) => {
      const { lat, lon } = pos
      const { x, y } = this.positionToTileXY(lat, lon, level, tmsY)
      // make sure we only add unique tiles
      const tileId = `${x}:${y}`
      memo[tileId] = { x, y }
      return memo
    }, {})

    // return just the tile coordinates
    return Object.values(tiles)
  }

  /**
   * Compute the rectangle (bounding box) in radians that covers the tiles needed to contain the specified
   * positions at the specified tile level-of-detail
   * @param {array} positions List of { lat, lon } positions
   * @param {number} level Tile level-of-detail
   * @param {number} offset Uniform offset (in meters) to apply to the bounds, use negative to max the rectangle smaller
   * @param {boolean} tmsY true to indicate that the Y value should be in TMS instead of XYZ
   * @returns {object} Rectangle in radians
   */
  rectangleForPositionsAtLevel (positions, level, offset = 0, tmsY = false) {
    const tiles = this.tilesForPositionsAtLevel(positions, level, tmsY)

    // calculate the encompassing rectangle
    const res = {}
    tiles.forEach(tile => {
      const rect = this.tileXYToRectangle(tile.x, tile.y, level, tmsY)
      const { west, south, east, north } = rect
      res.west = res.west === undefined || west < res.west ? west : res.west
      res.east = res.east === undefined || east > res.east ? east : res.east
      res.south =
        res.south === undefined || south < res.south ? south : res.south
      res.north =
        res.north === undefined || north > res.north ? north : res.north
    })

    // Bring in all side by the maximum allowed geometric error to avoid accidentally
    // bleeding over the tile boundary. Cesium allows for some gap between tiles
    if (offset) {
      offset = this.metersToDegrees(offset)
      res.west = res.west - offset
      res.east = res.east + offset
      res.south = res.south - offset
      res.north = res.north + offset
    }

    const width = res.east - res.west
    const height = res.north - res.south

    return { ...res, width, height }
  }

  /**
   * Compute the rectangle (bounding box) in degrees that covers the tiles needed to contain the specified
   * positions at the specified tile level-of-detail
   * @param {array} positions List of { lat, lon } positions
   * @param {number} level Tile level-of-detail
   * @param {number} offset Uniform offset (in meters) to apply to the bounds, use negative to max the rectangle smaller
   * @param {boolean} tmsY true to indicate that the Y value should be in TMS instead of XYZ
   * @returns {object} Rectangle in degrees
   */
  nativeRectangleForPositionsAtLevel (
    positions,
    level,
    offset = 0,
    tmsY = false
  ) {
    const rect = this.rectangleForPositionsAtLevel(
      positions,
      level,
      offset,
      tmsY
    )
    return this._toNativeRectangle(rect)
  }

  /**
   * Convert a rectangle in radians to degrees
   * @param {object} rectangle Rectangle in radians
   * @returns {object} Rectangle in degrees
   */
  _toNativeRectangle ({ west, south, east, north, width, height }) {
    west = this.toDegrees(west)
    south = this.toDegrees(south)
    east = this.toDegrees(east)
    north = this.toDegrees(north)
    width = this.toDegrees(width)
    height = this.toDegrees(height)
    return { west, south, east, north, width, height }
  }

  /**
   * Gets the maximum geometric error allowed in a tile at a given level.
   * {@link_https://github.com/AnalyticalGraphicsInc/cesium/blob/1.58/Source/Core/TerrainProvider.js}
   * @param {number} level The tile level for which to get the maximum geometric error.
   * @returns {number} The maximum geometric error in meters
   */
  getLevelMaximumGeometricError (level) {
    const tileImageWidth = this.tilePixelWidth
    const heightmapTerrainQuality = 0.25
    const numberOfTilesAtLevelZero = this.numOfLevelZeroTilesX
    const ellpsoidMaximumRadius = GeographicTilingScheme.ELLIPSOID_MAX_RADIUS
    const levelZeroMaximumGeometricError =
      (ellpsoidMaximumRadius *
        GeographicTilingScheme.TWO_PI *
        heightmapTerrainQuality) /
      (tileImageWidth * numberOfTilesAtLevelZero)

    return levelZeroMaximumGeometricError / (1 << level)
  }

  /**
   * Get the geographic x,y in radians for the specified pixel coordinate.
   * Pixel coordinate origin (0,0) is expected to be the bottom left (southwest) corner.
   * The `flipY` flag can be used to set the pixel origin to the top left (northwest) corner.
   * @param {object} rectangle Rectangle in radians
   * @param {number} pixelX
   * @param {number} pixelY
   * @param {boolean} flipY True to flip the Y axis
   */
  tilePixelToPosition (rectangle, pixelX, pixelY, flipY = false) {
    const { west, south, north, width, height } = rectangle

    if (pixelX < 0 || pixelX > this.tilePixelWidth - 1) {
      throw new Error('PixelX is out of bounds')
    }

    if (pixelY < 0 || pixelY > this.tilePixelHeight - 1) {
      throw new Error('PixelY is out of bounds')
    }

    // assumes pixel origin is bottom left (sw)
    // assumes pixel position is zero indexed
    const xPercent = pixelX / (this.tilePixelWidth - 1)
    const yPercent = pixelY / (this.tilePixelHeight - 1)
    const xPos = west + xPercent * width
    let yPos = south + yPercent * height

    if (flipY) {
      yPos = north - yPos
    }

    return { x: xPos, y: yPos }
  }

  /**
   * Get the geographic x,y in latlon for the specified pixel coordinate
   * @param {object} rectangle Rectangle in radians
   * @param {number} pixelX
   * @param {number} pixelY
   * @param {boolean} flipY True to flip the Y axis
   */
  tilePixelToNativePosition (rectangle, pixelX, pixelY, flipY = false) {
    let { x, y } = this.tilePixelToPosition(rectangle, pixelX, pixelY, flipY)
    x = this.toDegrees(x)
    y = this.toDegrees(y)
    return { x, y }
  }
}

module.exports = GeographicTilingScheme
