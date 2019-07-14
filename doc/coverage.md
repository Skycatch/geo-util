# Code Quality Report  
Sat Jul 13 2019 17:32:37 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
✔ 1) returns the center (3 ms)  
  
**GeographicTilingScheme**  
  
**constants**  
✔ 2) ELLIPSOID_MAX_RADIUS: equals 6378137 (1 ms)  
  
**metersToDegrees**  
✔ 3) should convert meters to decimal degrees (1 ms)  
  
**getLevelMaximumGeometricError**  
✔ 4) should calculate the maximum geometric error at the given level (0 ms)  
  
**positionToTileXY**  
✔ 5) [XYZ format] should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14} (1 ms)  
✔ 6) [XYZ format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 } (0 ms)  
✔ 7) [TMS format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 } (0 ms)  
  
**tileXYToRectangle**  
✔ 8) [XYZ format] should calculate the tile rectangle for the tile (1 ms)  
✔ 9) [TMS format] should calculate the tile rectangle for the tile (0 ms)  
  
**tilesForPositionsAtLevel**  
✔ 10) [XYZ format] should calculate the tiles needed to cover a set of positions (1 ms)  
✔ 11) [XYZ format] should calculate the tiles needed to cover a set of positions (0 ms)  
  
**rectangleForPositionsAtLevel**  
✔ 12) [XYZ format] should calculate the bounding rectangle in radians for a set of positions with a buffer applied (1 ms)  
  
**nativeRectangleForPositionsAtLevel**  
✔ 13) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (1 ms)  
✔ 14) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied (0 ms)  
✔ 15) [XYZ format] Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (0 ms)  
  
**tilePixelToPosition**  
✔ 16) should return the geographic x,y in radians for the given pixel of a 256x256 tile (2 ms)  
  
**tilePixelToNativePosition**  
✔ 17) should return the geographic x,y in latlon for the given pixel of a 256x256 tile (0 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 18) returns the proj4 string from lat/lon (0 ms)  
  
**StereaUtil#getCoord**  
✔ 19) returns the projected coordinate (3 ms)  
  
**StereaUtil#getLatLon**  
✔ 20) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 21) returns the UTM zone from lat/lon (0 ms)  
✔ 22) throws an error on invalid lat/lon (1 ms)  
  
**UtmUtil#getProj4**  
✔ 23) returns the proj4 string (0 ms)  
✔ 24) throws an error on invalid utm zone (0 ms)  
  
**UtmUtil#getCoord**  
✔ 25) returns the UTM coordinate (2 ms)  
✔ 26) returns the UTM coordinate of given zone (1 ms)  
  
**UtmUtil#getLatLon**  
✔ 27) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 28) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 29) returns ESPG code for any given lat/lon (1 ms)  
  
  
29 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 36 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 94.77% (15/287)  
  
