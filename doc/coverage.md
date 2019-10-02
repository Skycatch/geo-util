# Code Quality Report  
Tue Oct 01 2019 18:25:20 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
✔ 1) returns the center (2 ms)  
  
**GeographicTilingScheme**  
  
**constants**  
✔ 2) ELLIPSOID_MAX_RADIUS: equals 6378137 (1 ms)  
  
**metersToDegrees**  
✔ 3) should convert meters to decimal degrees (1 ms)  
✔ 4) DEPRECATED: should convert meters to decimal degrees (0 ms)  
  
**degreesToMeters**  
✔ 5) should convert meters to decimal degrees (0 ms)  
  
**getLevelMaximumGeometricError**  
✔ 6) should calculate the maximum geometric error at the given level (1 ms)  
  
**positionToTileXY**  
✔ 7) [XYZ format] should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14} (0 ms)  
✔ 8) [XYZ format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 } (0 ms)  
✔ 9) [TMS format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 } (0 ms)  
  
**tileXYToRectangle**  
✔ 10) [XYZ format] should calculate the tile rectangle for the tile (1 ms)  
✔ 11) [TMS format | x=5245 y=11634] should calculate the tile rectangle for the tile (0 ms)  
✔ 12) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (1 ms)  
  
**tileXYToNativeRectangle**  
✔ 13) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (0 ms)  
✔ 14) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (1 ms)  
✔ 15) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile even if xy are strings (0 ms)  
  
**tilesForPositionsAtLevel**  
✔ 16) [XYZ format] should calculate the tiles needed to cover a set of positions (1 ms)  
✔ 17) [XYZ format] should calculate the tiles needed to cover a set of positions (5 ms)  
  
**rectangleForPositionsAtLevel**  
✔ 18) [XYZ format] should calculate the bounding rectangle in radians for a set of positions with a buffer applied (2 ms)  
  
**nativeRectangleForPositionsAtLevel**  
✔ 19) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (0 ms)  
✔ 20) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied (0 ms)  
✔ 21) [XYZ format] Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (1 ms)  
  
**tilePixelToPosition**  
✔ 22) should return the geographic x,y in radians for the given pixel of a 256x256 tile (1 ms)  
  
**tilePixelToNativePosition**  
✔ 23) should return the geographic x,y in latlon for the given pixel of a 256x256 tile (0 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 24) returns the proj4 string from lat/lon (1 ms)  
  
**StereaUtil#getCoord**  
✔ 25) returns the projected coordinate (8 ms)  
  
**StereaUtil#getLatLon**  
✔ 26) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 27) returns the UTM zone from lat/lon (1 ms)  
✔ 28) throws an error on invalid lat/lon (0 ms)  
  
**UtmUtil#getProj4**  
✔ 29) returns the proj4 string (1 ms)  
✔ 30) throws an error on invalid utm zone (0 ms)  
  
**UtmUtil#getCoord**  
✔ 31) returns the UTM coordinate (2 ms)  
✔ 32) returns the UTM coordinate of given zone (1 ms)  
  
**UtmUtil#getLatLon**  
✔ 33) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 34) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 35) returns ESPG code for any given lat/lon (1 ms)  
  
  
35 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 51 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 94.63% (18/335)  
  
