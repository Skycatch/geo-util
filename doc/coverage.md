# Code Quality Report  
Tue Oct 09 2018 16:29:52 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
✔ 1) returns the center (3 ms)  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 2) returns the proj4 string from lat/lon (1 ms)  
  
**StereaUtil#getCoord**  
✔ 3) returns the projected coordinate (2 ms)  
  
**StereaUtil#getLatLon**  
✔ 4) returns the lat lon coordinate (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 5) returns the UTM zone from lat/lon (0 ms)  
✔ 6) throws an error on invalid lat/lon (1 ms)  
  
**UtmUtil#getProj4**  
✔ 7) returns the proj4 string (0 ms)  
✔ 8) throws an error on invalid utm zone (1 ms)  
  
**UtmUtil#getCoord**  
✔ 9) returns the UTM coordinate (2 ms)  
✔ 10) returns the UTM coordinate of given zone (1 ms)  
  
**UtmUtil#getLatLon**  
✔ 11) returns the lat/lon coordinate (1 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 12) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 13) returns ESPG code for any given lat/lon (0 ms)  
  
  
13 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 39 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 100.00%  
  
  
## Linting  
Warnings threshold: 0  
Errors threshold: 0  
No issues  
  
