# Code Quality Report  
Thu Aug 30 2018 15:14:44 GMT-0700 (PDT)  
  
## Tests
    
**UtmUtil**  
  
**UtmUtil#getZone**  
✔ 1) returns the UTM zone from lat/lon (3 ms)  
✔ 2) throws an error on invalid lat/lon (0 ms)  
  
**UtmUtil#getProj4**  
✔ 3) returns the proj4 string (1 ms)  
✔ 4) throws an error on invalid utm zone (0 ms)  
  
**UtmUtil#getUtmCoord**  
✔ 5) returns the UTM coordinate (3 ms)  
  
**UtmUtil#getCustomProj4**  
✔ 6) returns proj4 string for any given lat/lon (0 ms)  
  
**UtmUtil#getEPSGCode**  
✔ 7) returns ESPG code for any given lat/lon (1 ms)  
  
  
7 tests  
0 tests failed  
0 tests skipped  
  
Test duration: 20 ms  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 100.00%  
  
  
## Linting  
Warnings threshold: 0  
Errors threshold: 0  
No issues  
  
