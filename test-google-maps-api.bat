@echo off
title Google Maps API Key Tester
color 0B

echo ========================================
echo   Google Maps API Key Tester
echo   Three Boys Cleaning Limited
echo ========================================
echo.

set /p API_KEY="Enter your Google Maps API Key: "

if "%API_KEY%"=="" (
    echo ERROR: No API key provided
    pause
    exit /b 1
)

echo.
echo Testing API key: %API_KEY:~0,20%...
echo.

echo Creating test HTML file...

(
echo ^<!DOCTYPE html^>
echo ^<html^>
echo ^<head^>
echo     ^<title^>Google Maps API Test^</title^>
echo     ^<style^>
echo         body { font-family: Arial, sans-serif; margin: 20px; }
echo         #map { height: 400px; width: 100%%; border: 2px solid #4FC3F7; border-radius: 8px; }
echo         .status { padding: 10px; margin: 10px 0; border-radius: 4px; }
echo         .success { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; }
echo         .error { background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; }
echo     ^</style^>
echo ^</head^>
echo ^<body^>
echo     ^<h1^>Google Maps API Test - Three Boys Cleaning^</h1^>
echo     ^<div id="status"^>^</div^>
echo     ^<div id="map"^>^</div^>
echo.
echo     ^<script^>
echo         function initMap(^) {
echo             document.getElementById('status'^).innerHTML = 
echo                 '^<div class="success"^>✅ API Key is working! Maps loaded successfully.^</div^>';
echo             
echo             const map = new google.maps.Map(document.getElementById("map"^), {
echo                 zoom: 15,
echo                 center: { lat: -43.5484, lng: 172.6123 },
echo             }^);
echo             
echo             new google.maps.Marker({
echo                 position: { lat: -43.5484, lng: 172.6123 },
echo                 map: map,
echo                 title: "Three Boys Cleaning Limited - 50 Rogers Street, Sydenham"
echo             }^);
echo         }
echo         
echo         function handleError(^) {
echo             document.getElementById('status'^).innerHTML = 
echo                 '^<div class="error"^>❌ API Key error. Check console for details.^</div^>';
echo         }
echo         
echo         window.gm_authFailure = handleError;
echo     ^</script^>
echo     ^<script src="https://maps.googleapis.com/maps/api/js?key=%API_KEY%&callback=initMap" onerror="handleError(^)"^>^</script^>
echo ^</body^>
echo ^</html^>
) > google_maps_test.html

echo.
echo Test file created: google_maps_test.html
echo.
echo Opening test in your default browser...
start google_maps_test.html

echo.
echo ========================================
echo   Test Results:
echo ========================================
echo.
echo If you see a map with a marker:
echo   ✅ Your API key is working correctly!
echo   ✅ Copy it to your .env.local file
echo.
echo If you see an error:
echo   ❌ Check the Google Cloud Console:
echo   - Make sure Maps JavaScript API is enabled
echo   - Check API key restrictions
echo   - Verify billing is enabled
echo.
echo Instructions:
echo 1. Add to .env.local: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=%API_KEY%
echo 2. Restart your development server: npm run dev
echo 3. Check your contact page
echo.
pause

echo.
echo Cleaning up test file...
del google_maps_test.html
echo Test complete!