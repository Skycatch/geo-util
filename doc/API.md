<a name="GeographicTilingScheme"></a>

## GeographicTilingScheme
A tiling scheme for geometry referenced to a simple geographic projection where lat and lon
are directly mapped to X and Y. This projection is commonly known as geographic, equirectangular,
equidistant cylindrical, or plate carrée.

This class was inpsired by the Cesium class of the same name

**Kind**: global class  
**See**: https://cesiumjs.org/Cesium/Build/Documentation/GeographicTilingScheme.html  

* [GeographicTilingScheme](#GeographicTilingScheme)
    * _instance_
        * [.getNumberOfXTilesAtLevel(level)](#GeographicTilingScheme+getNumberOfXTilesAtLevel) ⇒ <code>Number</code>
        * [.getNumberOfYTilesAtLevel(level)](#GeographicTilingScheme+getNumberOfYTilesAtLevel) ⇒ <code>Number</code>
        * [.toDegrees(r)](#GeographicTilingScheme+toDegrees)
        * [.toRadians(d)](#GeographicTilingScheme+toRadians)
        * [.positionToTileXY(lat, lon, level)](#GeographicTilingScheme+positionToTileXY) ⇒ <code>object</code>
        * [.tileXYToRectangle(x, y, level)](#GeographicTilingScheme+tileXYToRectangle)
        * [.tileXYToNativeRectangle(x, y, level)](#GeographicTilingScheme+tileXYToNativeRectangle)
        * [.rectangleForPositionsAtLevel(positions, level)](#GeographicTilingScheme+rectangleForPositionsAtLevel) ⇒ <code>object</code>
        * [.nativeRectangleForPositionsAtLevel(positions, level)](#GeographicTilingScheme+nativeRectangleForPositionsAtLevel) ⇒ <code>object</code>
        * [._toNativeRectangle(rectangle)](#GeographicTilingScheme+_toNativeRectangle) ⇒ <code>object</code>
    * _static_
        * [.RECTANGLE](#GeographicTilingScheme.RECTANGLE)

<a name="GeographicTilingScheme+getNumberOfXTilesAtLevel"></a>

### geographicTilingScheme.getNumberOfXTilesAtLevel(level) ⇒ <code>Number</code>
Gets the total number of tiles in the X direction at a specified level-of-detail.

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
**Returns**: <code>Number</code> - The number of tiles in the X direction at the given level.  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>Number</code> | The level-of-detail. |

<a name="GeographicTilingScheme+getNumberOfYTilesAtLevel"></a>

### geographicTilingScheme.getNumberOfYTilesAtLevel(level) ⇒ <code>Number</code>
Gets the total number of tiles in the X direction at a specified level-of-detail.

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
**Returns**: <code>Number</code> - The number of tiles in the X direction at the given level.  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>Number</code> | The level-of-detail. |

<a name="GeographicTilingScheme+toDegrees"></a>

### geographicTilingScheme.toDegrees(r)
Converts radians to degrees

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Radians |

<a name="GeographicTilingScheme+toRadians"></a>

### geographicTilingScheme.toRadians(d)
Converts degrees to radians

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>number</code> | Degrees |

<a name="GeographicTilingScheme+positionToTileXY"></a>

### geographicTilingScheme.positionToTileXY(lat, lon, level) ⇒ <code>object</code>
Calculates the origin coordinates of the tile containing a given lat and lon

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
**Returns**: <code>object</code> - A new object containing the tile x, y coordinates of the tile  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | Latitude in decimal degrees |
| lon | <code>number</code> | Longitude in decimal degrees |
| level | <code>number</code> | The tile level-of-detail.  Zero is the least detailed. |

<a name="GeographicTilingScheme+tileXYToRectangle"></a>

### geographicTilingScheme.tileXYToRectangle(x, y, level)
Converts tile x, y coordinates and level to a cartographic rectangle in radians

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>integer</code> | tile x origin coordinate |
| y | <code>integer</code> | tile y origin coordinate |
| level | <code>number</code> | The tile level-of-detail.  Zero is the least detailed. |

<a name="GeographicTilingScheme+tileXYToNativeRectangle"></a>

### geographicTilingScheme.tileXYToNativeRectangle(x, y, level)
Converts tile x, y coordinates and level to a rectangle expressed in the native coordinates of the tiling scheme

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>integer</code> | tile x origin coordinate |
| y | <code>integer</code> | tile y origin coordinate |
| level | <code>number</code> | The tile level-of-detail.  Zero is the least detailed. |

<a name="GeographicTilingScheme+rectangleForPositionsAtLevel"></a>

### geographicTilingScheme.rectangleForPositionsAtLevel(positions, level) ⇒ <code>object</code>
Compute the rectangle (bounding box) in radians that covers the tiles needed to contain the specified
positions at the specified tile level-of-detail

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
**Returns**: <code>object</code> - Rectangle in radians  

| Param | Type | Description |
| --- | --- | --- |
| positions | <code>array</code> | List of { lat, lon } positions |
| level | <code>number</code> | Tile level-of-detail |

<a name="GeographicTilingScheme+nativeRectangleForPositionsAtLevel"></a>

### geographicTilingScheme.nativeRectangleForPositionsAtLevel(positions, level) ⇒ <code>object</code>
Compute the rectangle (bounding box) in degrees that covers the tiles needed to contain the specified
positions at the specified tile level-of-detail

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
**Returns**: <code>object</code> - Rectangle in degrees  

| Param | Type | Description |
| --- | --- | --- |
| positions | <code>array</code> | List of { lat, lon } positions |
| level | <code>number</code> | Tile level-of-detail |

<a name="GeographicTilingScheme+_toNativeRectangle"></a>

### geographicTilingScheme._toNativeRectangle(rectangle) ⇒ <code>object</code>
Convert a rectangle in radians to degrees

**Kind**: instance method of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
**Returns**: <code>object</code> - Rectangle in degrees  

| Param | Type | Description |
| --- | --- | --- |
| rectangle | <code>object</code> | Rectangle in radians |

<a name="GeographicTilingScheme.RECTANGLE"></a>

### GeographicTilingScheme.RECTANGLE
Largest possible rectangle for this tiling scheme

**Kind**: static property of [<code>GeographicTilingScheme</code>](#GeographicTilingScheme)  
