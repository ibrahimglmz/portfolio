const fs = require('fs');
const path = require('path');

// Dist klasöründeki index.html dosyasını oku
const indexPath = path.resolve(__dirname, '../dist/index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

// 404.html sayfasını kopyala ve düzelt
const notFoundPath = path.resolve(__dirname, '../dist/404.html');

if (fs.existsSync(notFoundPath)) {
  let notFoundContent = fs.readFileSync(notFoundPath, 'utf8');
  
  // Yolları düzelt
  notFoundContent = notFoundContent.replace(/href="\.\/"/g, 'href="/my_web/"');
  
  // 404.html dosyasını güncelle
  fs.writeFileSync(notFoundPath, notFoundContent);
  console.log('404.html dosyası düzeltildi');
}

console.log('Build sonrası düzeltmeler tamamlandı'); 