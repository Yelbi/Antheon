@echo off
title Antheon - Dev Server
cd /d "%~dp0"

echo.
echo  ================================================
echo    Antheon ^| Next.js Dev Server
echo  ================================================
echo.

:: ── 1. Matar procesos node que puedan tener archivos bloqueados ──────────────
echo  [1/4] Deteniendo procesos Node.js en ejecucion...
taskkill /F /IM node.exe >nul 2>&1
echo        Listo.
echo.

:: ── 2. Limpiar cache de Next.js ──────────────────────────────────────────────
echo  [2/4] Limpiando cache de Next.js (.next)...
if exist ".next" (
    rmdir /S /Q ".next"
    echo        Cache eliminada.
) else (
    echo        No habia cache.
)
echo.

:: ── 3. Regenerar cliente Prisma ──────────────────────────────────────────────
echo  [3/4] Regenerando cliente Prisma...
call npx prisma generate
echo.

:: ── 4. Arrancar el servidor ──────────────────────────────────────────────────
echo  [4/4] Iniciando servidor en http://localhost:3000
echo        Presiona Ctrl+C para detener.
echo.
npm run dev

pause
