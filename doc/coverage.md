# Code Quality Report  
Fri Sep 13 2019 16:03:07 GMT-0700 (PDT)  
  
## Tests
    
**GeoUtil**  
  
**GeoUtil#getCenter**  
╍╍ 1) returns the center  
  
**GeographicTilingScheme**  
  
**constants**  
╍╍ 2) ELLIPSOID_MAX_RADIUS: equals 6378137  
  
**metersToDegrees**  
╍╍ 3) should convert meters to decimal degrees  
  
**getLevelMaximumGeometricError**  
╍╍ 4) should calculate the maximum geometric error at the given level  
  
**positionToTileXY**  
╍╍ 5) [XYZ format] should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14}  
╍╍ 6) [XYZ format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 }  
╍╍ 7) [TMS format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 }  
  
**tileXYToRectangle**  
╍╍ 8) [XYZ format] should calculate the tile rectangle for the tile  
╍╍ 9) [TMS format | x=5245 y=11634] should calculate the tile rectangle for the tile  
╍╍ 10) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile  
  
**tileXYToNativeRectangle**  
✔ 11) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (3 ms)  
✔ 12) [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile (1 ms)  
  
**tilesForPositionsAtLevel**  
╍╍ 13) [XYZ format] should calculate the tiles needed to cover a set of positions  
╍╍ 14) [XYZ format] should calculate the tiles needed to cover a set of positions  
  
**rectangleForPositionsAtLevel**  
╍╍ 15) [XYZ format] should calculate the bounding rectangle in radians for a set of positions with a buffer applied  
  
**nativeRectangleForPositionsAtLevel**  
╍╍ 16) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer  
╍╍ 17) [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied  
╍╍ 18) [XYZ format] Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer  
  
**tilePixelToPosition**  
╍╍ 19) should return the geographic x,y in radians for the given pixel of a 256x256 tile  
  
**tilePixelToNativePosition**  
╍╍ 20) should return the geographic x,y in latlon for the given pixel of a 256x256 tile  
  
**StereaUtil**  
  
**StereaUtil#getProj4**  
╍╍ 21) returns the proj4 string from lat/lon  
  
**StereaUtil#getCoord**  
╍╍ 22) returns the projected coordinate  
  
**StereaUtil#getLatLon**  
╍╍ 23) returns the lat lon coordinate  
  
**UtmUtil**  
  
**UtmUtil#getZone**  
╍╍ 24) returns the UTM zone from lat/lon  
╍╍ 25) throws an error on invalid lat/lon  
  
**UtmUtil#getProj4**  
╍╍ 26) returns the proj4 string  
╍╍ 27) throws an error on invalid utm zone  
  
**UtmUtil#getCoord**  
╍╍ 28) returns the UTM coordinate  
╍╍ 29) returns the UTM coordinate of given zone  
  
**UtmUtil#getLatLon**  
╍╍ 30) returns the lat/lon coordinate  
  
**UtmUtil#getCustomProj4**  
╍╍ 31) returns proj4 string for any given lat/lon  
  
**UtmUtil#getEPSGCode**  
╍╍ 32) returns ESPG code for any given lat/lon  
  
  
32 tests  
0 tests failed  
30 tests skipped  
  
Test duration: 19 ms  
  
  
**Skipped tests**  
  
1) GeoUtil GeoUtil#getCenter returns the center  
2) GeographicTilingScheme constants ELLIPSOID_MAX_RADIUS: equals 6378137  
3) GeographicTilingScheme metersToDegrees should convert meters to decimal degrees  
4) GeographicTilingScheme getLevelMaximumGeometricError should calculate the maximum geometric error at the given level  
5) GeographicTilingScheme positionToTileXY [XYZ format] should calculate the tile origin for lat=37.8238667 lon=-122.3681195 level=14}  
6) GeographicTilingScheme positionToTileXY [XYZ format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 }  
7) GeographicTilingScheme positionToTileXY [TMS format] should calculate the tile origin for { lat: 37.8247935561, lon: -122.3671948879, level: 16 }  
8) GeographicTilingScheme tileXYToRectangle [XYZ format] should calculate the tile rectangle for the tile  
9) GeographicTilingScheme tileXYToRectangle [TMS format | x=5245 y=11634] should calculate the tile rectangle for the tile  
10) GeographicTilingScheme tileXYToRectangle [TMS format | x=83935 y=186155] should calculate the tile rectangle for the tile  
13) GeographicTilingScheme tilesForPositionsAtLevel [XYZ format] should calculate the tiles needed to cover a set of positions  
14) GeographicTilingScheme tilesForPositionsAtLevel [XYZ format] should calculate the tiles needed to cover a set of positions  
15) GeographicTilingScheme rectangleForPositionsAtLevel [XYZ format] should calculate the bounding rectangle in radians for a set of positions with a buffer applied  
16) GeographicTilingScheme nativeRectangleForPositionsAtLevel [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with NO buffer  
17) GeographicTilingScheme nativeRectangleForPositionsAtLevel [XYZ format] TI - should calculate the bounding rectangle in degrees for a set of positions with a buffer applied  
18) GeographicTilingScheme nativeRectangleForPositionsAtLevel [XYZ format] Koriyama - should calculate the bounding rectangle in degrees for a set of positions with NO buffer  
19) GeographicTilingScheme tilePixelToPosition should return the geographic x,y in radians for the given pixel of a 256x256 tile  
20) GeographicTilingScheme tilePixelToNativePosition should return the geographic x,y in latlon for the given pixel of a 256x256 tile  
21) StereaUtil StereaUtil#getProj4 returns the proj4 string from lat/lon  
22) StereaUtil StereaUtil#getCoord returns the projected coordinate  
23) StereaUtil StereaUtil#getLatLon returns the lat lon coordinate  
24) UtmUtil UtmUtil#getZone returns the UTM zone from lat/lon  
25) UtmUtil UtmUtil#getZone throws an error on invalid lat/lon  
26) UtmUtil UtmUtil#getProj4 returns the proj4 string  
27) UtmUtil UtmUtil#getProj4 throws an error on invalid utm zone  
28) UtmUtil UtmUtil#getCoord returns the UTM coordinate  
29) UtmUtil UtmUtil#getCoord returns the UTM coordinate of given zone  
30) UtmUtil UtmUtil#getLatLon returns the lat/lon coordinate  
31) UtmUtil UtmUtil#getCustomProj4 returns proj4 string for any given lat/lon  
32) UtmUtil UtmUtil#getEPSGCode returns ESPG code for any given lat/lon  
  
  
## Leaks  
No global variable leaks detected  
  
  
## Coverage  
Threshold: 0%  
Coverage: 53.18% (147/314)  
  
