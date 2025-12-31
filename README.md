# Travel Bus Company Website

A modern, sleek, and minimalist website for a travel bus company built with React + Vite.

## Features

- Clean dark blue theme design
- Responsive layout
- Image sliders with auto-play and manual controls
- Smooth scrolling navigation
- WhatsApp integration for reservations
- Multiple page routing

## Project Structure

```
travel-bus-website/
├── public/
│   ├── logo.png              # Company logo
│   ├── hero1.png             # Hero section background 1
│   ├── hero2.png             # Hero section background 2
│   ├── hero3.png             # Hero section background 3
│   ├── layanan1.png          # Service 1 - Sewa Bis Pariwisata
│   ├── layanan2.png          # Service 2 - Sewa Mobil
│   ├── layanan3.png          # Service 3 - Sewa Sopir
│   ├── layanan4.png          # Service 4 - Paket Wisata
│   ├── bus1.png              # Bus 1 main image
│   ├── bus2.png              # Bus 2 main image
│   ├── bus3.png              # Bus 3 main image
│   ├── bus1a.png             # Bus 1 gallery image 1
│   ├── bus1b.png             # Bus 1 gallery image 2
│   ├── bus1c.png             # Bus 1 gallery image 3
│   ├── bus2a.png             # Bus 2 gallery image 1
│   ├── bus2b.png             # Bus 2 gallery image 2
│   ├── bus2c.png             # Bus 2 gallery image 3
│   ├── bus3a.png             # Bus 3 gallery image 1
│   ├── bus3b.png             # Bus 3 gallery image 2
│   ├── bus3c.png             # Bus 3 gallery image 3
│   ├── doc1.png              # Documentation photo 1
│   ├── doc2.png              # Documentation photo 2
│   ├── doc3.png              # Documentation photo 3
│   ├── doc4.png              # Documentation photo 4
│   └── doc5.png              # Documentation photo 5
```

## Installation

1. Navigate to the project directory:
```bash
cd travel-bus-website
```

2. Install dependencies (already done):
```bash
npm install
```

3. Add your images to the `public` folder according to the structure above.

4. Update the WhatsApp link in:
   - `src/components/Footer.jsx` (line 18)
   - `src/pages/MainPage.jsx` (line 139)

   Replace `6281234567890` with your actual WhatsApp number.

5. Update social media links in `src/components/Footer.jsx`:
   - YouTube URL (line 21)
   - Instagram URL (line 25)

## Running the Project

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Pages

### Main Page (/)
- Hero section with rotating background images
- Services showcase (4 cards)
- Bus fleet showcase (3 buses)
- Documentation gallery slider
- Reservation CTA with WhatsApp link
- Footer with social media links

### Bus Detail Pages (/bus1, /bus2, /bus3)
- Bus hero image with name overlay
- Facilities grid (10 facilities with icons)
- Gallery slider (3 images per bus)
- Footer

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
--primary-blue: #0a1e3d;
--secondary-blue: #1a3a5c;
--accent-blue: #2d5a8f;
--light-blue: #4a7bb7;
```

### Bus Names
Edit the bus names in `src/pages/BusDetailPage.jsx` in the `busData` object.

### Services
Edit the services in `src/pages/MainPage.jsx` in the `services` array.

## Technologies Used

- React 18
- Vite
- React Router DOM
- React Icons
- CSS3 (with CSS Variables)

## License

Created by Hyk Tech
