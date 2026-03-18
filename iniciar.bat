@echo off
title Antheon - Dev Server
echo.
echo  ================================================
echo    Antheon ^| Next.js Dev Server
echo  ================================================
echo.
cd /d "%~dp0"
echo  Iniciando servidor en http://localhost:3000
echo  Presiona Ctrl+C para detener.
echo.
npm run dev
pause
