@echo off
echo =======================================================================
echo    Pushing CredRisk India Dashboard to GitHub...
echo =======================================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Pushed to GitHub successfully!
    echo Visit your repo at: https://github.com/Baidurja-200/credrisk-india-credit-risk-fra-analysis-dashboard
) else (
    echo [NOTE] If it failed with "Repository not found":
    echo Please create the repository first on GitHub:
    echo https://github.com/new?name=credrisk-india-credit-risk-fra-analysis-dashboard
)
pause
