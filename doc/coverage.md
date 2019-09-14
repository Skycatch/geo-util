# Code Quality Report  
Fri Sep 13 2019 16:52:16 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
✔ 1) returns the center (3 ms)  
  
**GeographicTilingScheme**  
  
**constants**  
✔ 2) ELLIPSOID_MAX_RADIUS: equals 6378137 (1 ms)  
  
**metersToDegrees**  
✔ 3) should convert meters to decimal degrees (0 ms)  
  
**getLevelMaximumGeometricError**  
✔ 4) should calculate the maximum geometric error at the given level (1 ms)  
  
**positionToTileXY**  
✔ 5) [XYZ format] should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14} (0 ms)  
✔ 6) [XYZ format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 } (1 ms)  
✔ 7) [TMS format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 } (0 ms)  
  
**tileXYToRectangle**  
✔ 8) [XYZ format] should calculate the tile rectangle for the tile (1 ms)  
✔ 9) [TMS format | x=5245 y=11634] should calculate the tile rectangle for the tile (0 ms)  
✔ 10) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (0 ms)  
  
**tileXYToNativeRectangle**  
✔ 11) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (1 ms)  
✔ 12) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (0 ms)  
✔ 13) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile even if xy are strings (0 ms)  
  
**tilesForPositionsAtLevel**  
✔ 14) [XYZ format] should calculate the tiles needed to cover a set of positions (1 ms)  
✔ 15) [XYZ format] should calculate the tiles needed to cover a set of positions (5 ms)  
  
**rectangleForPositionsAtLevel**  
✔ 16) [XYZ format] should calculate the bounding rectangle in radians for a set of positions with a buffer applied (2 ms)  
  
**nativeRectangleForPositionsAtLevel**  
✔ 17) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (0 ms)  
✔ 18) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied (1 ms)  
✔ 19) [XYZ format] Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (0 ms)  
  
**tilePixelToPosition**  
✔ 20) should return the geographic x,y in radians for the given pixel of a 256x256 tile (1 ms)  
  
**tilePixelToNativePosition**  
✔ 21) should return the geographic x,y in latlon for the given pixel of a 256x256 tile (1 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 22) returns the proj4 string from lat/lon (0 ms)  
  
**StereaUtil#getCoord**  
✔ 23) returns the projected coordinate (2 ms)  
  
**StereaUtil#getLatLon**  
✔ 24) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 25) returns the UTM zone from lat/lon (0 ms)  
✔ 26) throws an error on invalid lat/lon (1 ms)  
  
**UtmUtil#getProj4**  
✔ 27) returns the proj4 string (0 ms)  
✔ 28) throws an error on invalid utm zone (1 ms)  
  
**UtmUtil#getCoord**  
✔ 29) returns the UTM coordinate (2 ms)  
✔ 30) returns the UTM coordinate of given zone (0 ms)  
  
**UtmUtil#getLatLon**  
✔ 31) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 32) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 33) returns ESPG code for any given lat/lon (1 ms)  
  
  
33 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 44 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 96.17% (12/313)  
  
