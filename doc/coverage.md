# Code Quality Report  
Sat Jun 29 2019 13:59:06 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
✔ 1) returns the center (2 ms)  
  
**GeographicTilingScheme**  
  
**constants**  
✔ 2) ELLIPSOID_MAX_RADIUS: equals 6378137 (1 ms)  
  
**positionToTileXY**  
✔ 3) should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14} (0 ms)  
  
**tileXYToRectangle**  
✔ 4) should calculate the tile rectangle for the tile (1 ms)  
  
**tilesForPositionsAtLevel**  
✔ 5) should calculate the tiles needed to cover a set of positions (1 ms)  
✔ 6) should calculate the tiles needed to cover a set of positions (0 ms)  
  
**rectangleForPositionsAtLevel**  
✔ 7) should calculate the bounding rectangle in radians for a set of positions with a buffer (1 ms)  
  
**nativeRectangleForPositionsAtLevel**  
✔ 8) TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (1 ms)  
✔ 9) TI - should calculate the bounding rectangle in degrees for a set of positions with buffer applied (0 ms)  
✔ 10) Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer (0 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 11) returns the proj4 string from lat/lon (0 ms)  
  
**StereaUtil#getCoord**  
✔ 12) returns the projected coordinate (2 ms)  
  
**StereaUtil#getLatLon**  
✔ 13) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 14) returns the UTM zone from lat/lon (1 ms)  
✔ 15) throws an error on invalid lat/lon (1 ms)  
  
**UtmUtil#getProj4**  
✔ 16) returns the proj4 string (1 ms)  
✔ 17) throws an error on invalid utm zone (1 ms)  
  
**UtmUtil#getCoord**  
✔ 18) returns the UTM coordinate (2 ms)  
✔ 19) returns the UTM coordinate of given zone (1 ms)  
  
**UtmUtil#getLatLon**  
✔ 20) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 21) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 22) returns ESPG code for any given lat/lon (1 ms)  
  
  
22 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 34 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 93.94% (16/264)  
  
