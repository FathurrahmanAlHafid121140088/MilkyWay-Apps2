const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

// Pastikan direktori tujuan sudah ada
if (!fs.existsSync(destination)) {
  // Buat direktori tujuan jika belum ada
  fs.mkdirSync(destination, { recursive: true });
}

// Baca semua file di direktori sumber
fs.readdirSync(targetDir).forEach((image) => {
  const imagePath = path.join(targetDir, image);
  // Periksa apakah file adalah gambar berdasarkan ekstensinya
  const extension = path.extname(image).toLowerCase();
  if (extension === '.jpg' || extension === '.jpeg' || extension === '.png' || extension === '.gif') {
    // Ubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(imagePath)
      .resize(800)
      .toFile(path.resolve(
        destination,
        `${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // Ubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(imagePath)
      .resize(480)
      .toFile(path.resolve(
        destination,
        `${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  } else {
    console.error(`File ${image} bukan merupakan gambar yang didukung.`);
  }
});
