# Code Quality Report  
Thu Jun 27 2019 22:04:00 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
✔ 1) returns the center (2 ms)  
  
**GeographicTilingScheme**  
  
**positionToTileXY**  
✔ 2) should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14} (1 ms)  
  
**tileXYToRectangle**  
✔ 3) should calculate the tile rectangle for the tile (1 ms)  
  
**tilesForPositionsAtLevel**  
✔ 4) should calculate the tiles needed to cover a set of positions (1 ms)  
✔ 5) should calculate the tiles needed to cover a set of positions (0 ms)  
  
**rectangleForPositionsAtLevel**  
✔ 6) should calculate the bounding rectangle in radians for a set of positions (1 ms)  
  
**nativeRectangleForPositionsAtLevel**  
✔ 7) should calculate the bounding rectangle in degrees for a set of positions (1 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 8) returns the proj4 string from lat/lon (0 ms)  
  
**StereaUtil#getCoord**  
✔ 9) returns the projected coordinate (2 ms)  
  
**StereaUtil#getLatLon**  
✔ 10) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 11) returns the UTM zone from lat/lon (1 ms)  
✔ 12) throws an error on invalid lat/lon (0 ms)  
  
**UtmUtil#getProj4**  
✔ 13) returns the proj4 string (0 ms)  
✔ 14) throws an error on invalid utm zone (1 ms)  
  
**UtmUtil#getCoord**  
✔ 15) returns the UTM coordinate (2 ms)  
✔ 16) returns the UTM coordinate of given zone (0 ms)  
  
**UtmUtil#getLatLon**  
✔ 17) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 18) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 19) returns ESPG code for any given lat/lon (1 ms)  
  
  
19 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 30 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 95.95% (9/222)  
  
