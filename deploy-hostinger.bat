@echo off
title Three Boys Cleaning - Hostinger Deployment
color 0A

echo ========================================
echo   Three Boys Cleaning Limited
echo   Hostinger Deployment Script
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/3] Building Next.js project for static export...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo [3/3] Build completed successfully!
echo.
echo ========================================
echo   DEPLOYMENT INSTRUCTIONS
echo ========================================
echo.
echo 1. Open Hostinger Control Panel
echo 2. Go to Files ^> File Manager
echo 3. Navigate to public_html folder
echo 4. Delete default index.html (if exists)
echo 5. Upload ALL contents from the 'out' folder
echo    (NOT the folder itself, just the contents)
echo.
echo Files to upload are located in:
echo %CD%\out
echo.
echo ========================================
echo   HOSTINGER SETUP CHECKLIST
echo ========================================
echo.
echo [ ] Domain connected and DNS configured
echo [ ] SSL certificate enabled (Let's Encrypt)
echo [ ] Files uploaded to public_html
echo [ ] .htaccess file uploaded for security
echo [ ] Business email accounts created
echo [ ] Google Maps API key configured
echo [ ] Contact forms tested
echo.
echo Your website will be live at:
echo https://threeboyscleaning.co.nz
echo.
echo For support, check HOSTINGER_DEPLOYMENT.md
echo.
pause