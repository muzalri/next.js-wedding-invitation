# Website Undangan Pernikahan - Next.js

Website undangan pernikahan yang modern, interaktif, dan responsif menggunakan Next.js dan Tailwind CSS.

## 🎨 Fitur yang Telah Diterapkan

### 1. **Animasi & Styling**
- ✅ 9 animasi CSS yang smooth dan elegan:
  - `fadeIn`, `fadeSlideUp`, `fadeSlideDown`
  - `scaleIn`, `float`, `rotate`
  - `zoomIn`, `slideInLeft`, `slideInRight`
- ✅ Sistem warna custom (cream, brown, gold)
- ✅ Dekorasi bunga SVG di setiap sudut
- ✅ Scroll animations dengan IntersectionObserver

### 2. **Komponen yang Dibuat**

#### **FloralDecoration.js**
Komponen dekorasi bunga yang dapat diposisikan di 4 sudut:
- Position: `top-left`, `top-right`, `bottom-left`, `bottom-right`
- Animasi float dengan staggered delays
- SVG flowers dan leaves dengan warna gold/brown

#### **HeroSection.js**
Section pembuka dengan:
- Animated floral decorations di semua sudut
- Foto couple dalam frame circular dengan efek decorative
- Nama mempelai: "Indah & Buha" dengan font GreatVibes
- Tanggal pernikahan: "Minggu, 09 Februari 2025"
- Background blur circles yang floating
- Scroll indicator di bawah

#### **CoupleSection.js**
Section profil mempelai dengan:
- Bismillah dan ayat Al-Quran
- Card mempelai wanita dan pria dengan foto circular
- Informasi orang tua
- Link Instagram (untuk bride)
- Animasi slide-in saat scroll
- Quote ayat QS. Ar-Rum: 21

#### **EventDetails.js**
Detail acara pernikahan:
- 2 cards: Akad Nikah & Resepsi Pernikahan
- Waktu: Akad (08:00-10:00), Resepsi (11:00-13:00)
- Tanggal: Minggu, 09 Februari 2025
- Lokasi lengkap dengan alamat
- Button "Lihat Lokasi" ke Google Maps
- Button "Simpan ke Kalender"
- Icon SVG untuk ceremony & reception
- Hover effects dan decorative corners

#### **Gallery.js**
Galeri foto dengan:
- Grid layout responsive (2/3/4 columns)
- 12 foto dengan berbagai orientation (portrait, landscape, square)
- Lightbox modal untuk view detail
- Navigation dengan keyboard (Arrow keys & ESC)
- Image counter
- Hover overlay dengan zoom icon
- Smooth transitions dan animations

#### **Timeline.js**
Love story timeline:
- 3 milestone cards: Pendekatan, Lamaran, Pernikahan
- Zigzag layout dengan timeline vertical line (desktop)
- Photo untuk setiap story
- Animated icons di center line
- Scroll-triggered animations
- Quote ayat Al-Quran di bawah
- Responsive: stacked di mobile, alternating di desktop

#### **WishesForm.js**
Form RSVP dan ucapan:
- Input: Nama, Ucapan/Doa, Konfirmasi Kehadiran
- Radio buttons: Hadir / Tidak Hadir
- Guest count selector (hanya jika hadir)
- Display wishes dari tamu dengan avatar
- Success notification
- Real-time wish submission
- Custom scrollbar untuk wishes list
- Badge status kehadiran

#### **GiftRegistry.js**
Amplop digital:
- 2 bank account cards (BCA & Bank Mandiri)
- Modal dengan detail rekening lengkap
- QR Code untuk transfer
- Copy to clipboard button
- Physical gift address
- Animated cards dengan hover effects
- Masked account number untuk security

#### **FloatingNavigation.js**
Navigasi mengambang di bawah:
- 7 menu items: Beranda, Mempelai, Acara, Galeri, Cerita, Ucapan, Hadiah
- Active state dengan gradient background
- Auto-hide saat scroll down
- Smooth scroll to section
- Glassmorphism effect
- Responsive: hide labels di mobile
- Icons dengan animation

### 3. **Struktur File**

```
src/
├── app/
│   ├── globals.css          ← Enhanced dengan animations
│   ├── layout.js             ← Root layout
│   └── page.js               ← Main page (updated)
├── components/
│   ├── AudioPlayer.js        ← Existing
│   ├── CoverPage.js          ← Existing
│   ├── Countdown.js          ← Existing
│   ├── RSVPForm.js           ← Existing
│   ├── FloralDecoration.js   ← NEW ✨
│   ├── HeroSection.js        ← NEW ✨
│   ├── CoupleSection.js      ← NEW ✨
│   ├── EventDetails.js       ← NEW ✨
│   ├── Gallery.js            ← NEW ✨
│   ├── Timeline.js           ← NEW ✨
│   ├── WishesForm.js         ← NEW ✨
│   ├── GiftRegistry.js       ← NEW ✨
│   └── FloatingNavigation.js ← NEW ✨
└── public/
    ├── audio/
    │   └── wedding-song.mp3
    └── images/
        ├── couple.jpg              ← Foto couple untuk Hero
        ├── bride.jpg               ← Foto mempelai wanita
        ├── groom.jpg               ← Foto mempelai pria
        ├── gallery-1.jpg to -12.jpg ← Foto galeri
        ├── story-1.jpg to -3.jpg   ← Foto timeline
        ├── qr-bca.png              ← QR Code BCA
        └── qr-mandiri.png          ← QR Code Mandiri
```

### 4. **Warna & Design System**

```css
--cream: #f8f3e8   /* Background utama */
--brown: #6d4c3d   /* Text & accents */
--gold: #d4af37    /* Highlights & borders */
```

**Fonts:**
- GreatVibes: Script font untuk judul elegant
- Dancing Script: Font cursive untuk subtitle
- System fonts: Untuk body text

### 5. **Interaksi & Animations**

**Scroll Animations:**
- Fade in saat element masuk viewport
- Slide dari samping (left/right)
- Scale up effects
- Staggered delays untuk multiple elements

**Hover Effects:**
- Scale transformations
- Shadow intensity changes
- Color transitions
- Blur effects

**Click Interactions:**
- Smooth scroll to sections
- Modal open/close
- Copy to clipboard
- Image lightbox navigation

### 6. **Responsiveness**

Semua komponen fully responsive untuk:
- ✅ Mobile (320px - 767px)
- ✅ Tablet (768px - 1023px)
- ✅ Desktop (1024px+)

**Breakpoints:**
- Mobile-first approach
- Tailwind CSS breakpoints (sm, md, lg, xl)
- Flexible typography dengan clamp()
- Grid layout adjustments

### 7. **Performance Optimizations**

- ✅ Lazy loading dengan IntersectionObserver
- ✅ Optimized SVG untuk decorations
- ✅ CSS animations (GPU accelerated)
- ✅ Next.js Image component ready (placeholder images)
- ✅ Conditional rendering untuk modals

## 📝 Cara Penggunaan

### Mengubah Data Mempelai

**HeroSection.js** - Ubah nama dan tanggal:
```javascript
<h2 className="font-greatvibes text-5xl md:text-6xl text-brown">
  Nama Wanita & Nama Pria
</h2>
<p>Hari, DD Bulan YYYY</p>
```

**CoupleSection.js** - Update info lengkap:
```javascript
// Bride info
<h3>Nama Lengkap Mempelai Wanita</h3>
<p>Bapak ... & Ibu ...</p>

// Groom info
<h3>Nama Lengkap Mempelai Pria</h3>
<p>Bapak ... & Ibu ...</p>
```

### Mengganti Foto

1. **Foto Couple (Hero):**
   - Upload ke `/public/images/couple.jpg`
   - Update di `HeroSection.js`

2. **Foto Mempelai:**
   - Bride: `/public/images/bride.jpg`
   - Groom: `/public/images/groom.jpg`
   - Update di `CoupleSection.js`

3. **Galeri:**
   - Upload 12 foto: `gallery-1.jpg` sampai `gallery-12.jpg`
   - Sesuaikan `galleryImages` array di `Gallery.js`

4. **Timeline:**
   - Upload 3 foto: `story-1.jpg`, `story-2.jpg`, `story-3.jpg`
   - Update `timelineStories` di `Timeline.js`

### Update Event Details

Di **EventDetails.js**, ubah:
```javascript
const events = [
  {
    title: "Akad Nikah",
    date: "Tanggal Acara",
    time: "Waktu Mulai - Selesai WIB",
    location: "Nama Lokasi",
    address: "Alamat Lengkap",
    mapUrl: "https://maps.app.goo.gl/your-link",
  },
  // ... resepsi
];
```

### Update Bank Accounts

Di **GiftRegistry.js**, ubah:
```javascript
const accounts = [
  {
    bank: "Nama Bank",
    accountNumber: "1234567890",
    accountName: "Nama Pemilik Rekening",
    qrCode: "/images/qr-bank.png",
  },
];
```

## 🚀 Menjalankan Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Akses website di: `http://localhost:3000`

## 🎯 Fitur yang Bisa Ditambahkan (Future)

- [ ] Audio player controls lebih advanced
- [ ] Multiple languages (ID/EN)
- [ ] Instagram feed integration
- [ ] Live streaming link
- [ ] Digital guest book with photos
- [ ] Countdown timer dengan auto-refresh
- [ ] Share to social media buttons
- [ ] Download invitation as image
- [ ] Admin panel untuk manage wishes
- [ ] WhatsApp integration untuk RSVP

## 📱 Testing Checklist

- [ ] Test di Chrome, Firefox, Safari, Edge
- [ ] Test di mobile devices (iOS & Android)
- [ ] Test all animations
- [ ] Test smooth scroll
- [ ] Test modal interactions
- [ ] Test form submissions
- [ ] Test responsive breakpoints
- [ ] Test image loading
- [ ] Test copy to clipboard
- [ ] Test keyboard navigation

## 🔧 Customization Tips

1. **Warna:** Edit CSS variables di `globals.css`
2. **Font:** Update Google Fonts di `layout.js`
3. **Animations:** Adjust timing di `globals.css` keyframes
4. **Layout:** Modify Tailwind classes di components
5. **Content:** All text dapat diubah di masing-masing component

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi developer.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
