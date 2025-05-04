#!/bin/bash

# Projenin bulunduğu dizine git
cd "$(dirname "$0")"

# Eğer dist klasörü yoksa build al
if [ ! -d "dist" ]; then
    echo "Building project..."
    npm run build
fi

# Serve ile projeyi başlat
echo "Starting server..."
npm start 