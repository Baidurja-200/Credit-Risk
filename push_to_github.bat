@echo off
echo =======================================================================
echo    Pushing CredRisk India Dashboard to GitHub...
echo =======================================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Pushed to GitHub successfully!
    echo Visit your repo at: https://github.com/Baidurja-200/Credit-Risk
) else (
    echo [ERROR] Push failed. Please check your credentials or network connection.
)
pause
