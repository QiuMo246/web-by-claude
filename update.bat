@echo off
echo.
echo ============================
echo Updating GitHub...
echo ============================
git add .
git commit -m "Auto Update %date% %time%"
git push
echo.
echo Done!
pause