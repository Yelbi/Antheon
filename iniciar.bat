@echo off
title Antheon - Dev Server
cd /d "%~dp0"

echo.
echo  ================================================
echo    Antheon ^| Next.js Dev Server
echo  ================================================
echo.

:: ── 1. Matar procesos node que puedan tener archivos bloqueados ──────────────
echo  [1/5] Deteniendo procesos Node.js en ejecucion...
taskkill /F /IM node.exe >nul 2>&1
echo        Listo.
echo.

:: ── 2. Limpiar cache de Next.js ──────────────────────────────────────────────
echo  [2/5] Limpiando cache de Next.js (.next)...
if exist ".next" (
    rmdir /S /Q ".next"
    echo        Cache eliminada.
) else (
    echo        No habia cache.
)
echo.

:: ── 3. Regenerar cliente Prisma ──────────────────────────────────────────────
echo  [3/5] Regenerando cliente Prisma...
call npx prisma generate
if %errorlevel% neq 0 (
    echo        ERROR: fallo prisma generate.
    pause
    exit /b 1
)
echo.

:: ── 4. Ejecutar seeds ────────────────────────────────────────────────────────
echo  [4/5] Ejecutando seed de la base de datos...
call npx prisma db seed
if %errorlevel% neq 0 (
    echo        ERROR: fallo prisma db seed.
    pause
    exit /b 1
)
echo.

:: ── 5. Arrancar el servidor ──────────────────────────────────────────────────
echo  [5/5] Iniciando servidor en http://localhost:3000
echo        Presiona Ctrl+C para detener.
echo.
npm run dev

pause
