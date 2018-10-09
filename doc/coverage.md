# Code Quality Report  
Tue Oct 09 2018 10:59:40 GMT-0700 (PDT)  
  
## Tests
    
**StereaUtil**  
  
**StereaUtil#getProj4**  
✔ 1) returns the proj4 string from lat/lon (8 ms)  
  
**StereaUtil#getCoord**  
✔ 2) returns the projected coordinate (17 ms)  
  
**StereaUtil#getCenter**  
✔ 3) returns the center (1 ms)  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 4) returns the UTM zone from lat/lon (1 ms)  
✔ 5) throws an error on invalid lat/lon (1 ms)  
  
**UtmUtil#getProj4**  
✔ 6) returns the proj4 string (0 ms)  
✔ 7) throws an error on invalid utm zone (0 ms)  
  
**UtmUtil#getUtmCoord**  
✔ 8) returns the UTM coordinate (3 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 9) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 10) returns ESPG code for any given lat/lon (1 ms)  
  
  
10 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 43 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 100.00%  
  
  
## Linting  
Warnings threshold: 0  
Errors threshold: 0  
No issues  
  
