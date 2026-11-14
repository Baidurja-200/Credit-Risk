@echo off
echo =======================================================================
echo    CredRisk India - Credit Risk & FRA Analysis Dashboard
echo    Financial Reporting & Analysis (Term 5)
echo =======================================================================
echo.
echo Starting CredRisk Dashboard server on http://localhost:5173...
start "" http://localhost:5173
python -m http.server 5173
pause
