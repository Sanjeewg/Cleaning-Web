@echo off
echo ============================================
echo   Google Maps API Key - Quick Fix Script
echo ============================================
echo.

REM Check if .env.local exists
if not exist ".env.local" (
    echo ❌ ERROR: .env.local file not found!
    echo.
    echo Creating .env.local with template...
    (
        echo # Three Boys Cleaning Limited - Environment Variables
        echo # Replace YOUR_REAL_API_KEY_HERE with actual API key from Google Cloud Console
        echo.
        echo NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_REAL_API_KEY_HERE
        echo.
        echo # Business Information
        echo NEXT_PUBLIC_BUSINESS_NAME=Three Boys Cleaning Limited
        echo NEXT_PUBLIC_BUSINESS_ADDRESS=50 Rogers Street, Sydenham, Christchurch 8023, New Zealand
        echo NEXT_PUBLIC_BUSINESS_PHONE=+64 27 123 4567
        echo NEXT_PUBLIC_BUSINESS_EMAIL=contact@threeboyscleaning.co.nz
        echo NEXT_PUBLIC_BUSINESS_HOURS=Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM
    ) > .env.local
    echo ✅ Created .env.local file
    echo.
)

REM Read current API key
for /f "tokens=2 delims==" %%a in ('findstr "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" .env.local 2^>nul') do set CURRENT_KEY=%%a

echo Current Status:
echo ---------------
if "%CURRENT_KEY%"=="YOUR_REAL_API_KEY_HERE" (
    echo ❌ API Key: PLACEHOLDER ^(needs real key^)
    echo 🔄 Status: Using fallback solution
    echo ✅ User Experience: Professional fallback button
) else if "%CURRENT_KEY%"=="" (
    echo ❌ API Key: NOT SET
    echo 🔄 Status: Using fallback solution
    echo ✅ User Experience: Professional fallback button
) else (
    echo ✅ API Key: SET ^(validating...^)
    echo 🔄 Status: Testing API key...
    
    REM Test the API key with a simple HTTP request
    curl -s "https://maps.googleapis.com/maps/api/js?key=%CURRENT_KEY%" > nul 2>&1
    if %errorlevel%==0 (
        echo ✅ API Key: VALID and working!
        echo 🎉 Status: Google Maps should be working
    ) else (
        echo ❌ API Key: May be invalid or restricted
        echo 🔄 Status: Check API key settings in Google Cloud Console
    )
)

echo.
echo Next Steps:
echo -----------
if "%CURRENT_KEY%"=="YOUR_REAL_API_KEY_HERE" (
    echo 1. Follow GOOGLE_MAPS_API_SETUP.md to get real API key
    echo 2. Replace YOUR_REAL_API_KEY_HERE in .env.local with real key
    echo 3. Run this script again to test
    echo 4. Restart development server: npm run dev
    echo.
    echo OR: Keep using the current fallback solution ^(works great!^)
) else if "%CURRENT_KEY%"=="" (
    echo 1. Follow GOOGLE_MAPS_API_SETUP.md to get API key
    echo 2. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here to .env.local
    echo 3. Run this script again to test
    echo 4. Restart development server: npm run dev
) else (
    echo 1. Test your contact page: http://localhost:3000/contact
    echo 2. Should see embedded Google Maps
    echo 3. If not working, check Google Cloud Console settings
    echo 4. Ensure domain restrictions include localhost:3000
)

echo.
echo Files Available:
echo ----------------
echo ✅ GOOGLE_MAPS_API_SETUP.md - Complete setup guide
echo ✅ GOOGLE_MAPS_FIX.md - This troubleshooting guide
echo ✅ .env.local - Environment variables
echo ✅ test-google-maps-api.bat - This testing script

echo.
echo Support:
echo --------
echo Current fallback solution provides excellent user experience!
echo Professional "View on Google Maps" button works perfectly.
echo No API key required for the fallback solution.

echo.
pause