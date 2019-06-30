# Code Quality Report  
Sun Jun 30 2019 15:44:54 GMT-0700 (PDT)  
  
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
✔ 5) should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14} (1 ms)  
  
**tileXYToRectangle**  
✔ 6) should calculate the tile rectangle for the tile (0 ms)  
  
**tilesForPositionsAtLevel**  
✔ 7) should calculate the tiles needed to cover a set of positions (1 ms)  
✔ 8) should calculate the tiles needed to cover a set of positions (1 ms)  
  
**rectangleForPositionsAtLevel**  
✔ 9) should calculate the bounding rectangle in radians for a set of positions with a buffer applied (0 ms)  
  
**nativeRectangleForPositionsAtLevel**  
✔ 10) TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (0 ms)  
✔ 11) TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied (0 ms)  
✔ 12) Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (1 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 13) returns the proj4 string from lat/lon (0 ms)  
  
**StereaUtil#getCoord**  
✔ 14) returns the projected coordinate (2 ms)  
  
**StereaUtil#getLatLon**  
✔ 15) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 16) returns the UTM zone from lat/lon (1 ms)  
✔ 17) throws an error on invalid lat/lon (0 ms)  
  
**UtmUtil#getProj4**  
✔ 18) returns the proj4 string (1 ms)  
✔ 19) throws an error on invalid utm zone (0 ms)  
  
**UtmUtil#getCoord**  
✔ 20) returns the UTM coordinate (2 ms)  
✔ 21) returns the UTM coordinate of given zone (0 ms)  
  
**UtmUtil#getLatLon**  
✔ 22) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 23) returns proj4 string for any given lat/lon (1 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 24) returns ESPG code for any given lat/lon (0 ms)  
  
  
24 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 32 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 96.54% (9/260)  
  
