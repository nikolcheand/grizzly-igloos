import { useEffect, useMemo, useState } from 'react';
import {
  MapPin, Camera, Phone, CalendarDays, ChevronLeft, ChevronRight, Star, Trees, Wifi, Car, PawPrint, Bath, ExternalLink, Mountain, Clock3, Languages, Menu, X,
} from 'lucide-react';

function SmartImage({ src, alt, className = '', fallback }) {
  const toProxy = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ''))}&w=1600&q=82&output=jpg`;
  const [imgSrc, setImgSrc] = useState(toProxy(src));
  const [loaded, setLoaded] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => { setImgSrc(toProxy(src)); setLoaded(false); setTriedFallback(false); }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100 animate-pulse'}`} />
      <img referrerPolicy="no-referrer" src={imgSrc} alt={alt}
        className={`h-full w-full object-cover transition duration-700 ${loaded ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => { if (!triedFallback) { setImgSrc(toProxy(fallback)); setTriedFallback(true); setLoaded(false); } }}
        loading="lazy"
      />
    </div>
  );
}

export default function GrizzlyIgloosLandingPage() {
  const AIRBNB_URL = 'https://www.airbnb.com/rooms/1135566730340667338';
  const INSTAGRAM_URL = 'https://www.instagram.com/grizzlyigloos/';
  const FALLBACKS = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80',
  ];
  const gallery = [
    { title: { en: 'Panoramic igloo view', mk: 'Панорамски поглед кон иглото' }, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNTU2NjczMDM0MDY2NzMzOA%3D%3D/original/0796771e-bb3a-47b8-a667-fec973e9f947.jpeg', fallback: FALLBACKS[0] },
    { title: { en: 'Deck with mountain view', mk: 'Тераса со планински поглед' }, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMDE2MzY3NDg3MDY2MTAxNQ%3D%3D/original/560ecf71-60a3-4b89-be21-3ce0228be970.jpeg', fallback: FALLBACKS[1] },
    { title: { en: 'Golden hour dome', mk: 'Игло во златен час' }, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMDE2MzY3NDg3MDY2MTAxNQ%3D%3D/original/97927945-f470-45e6-be97-097a55919100.jpeg', fallback: FALLBACKS[2] },
    { title: { en: 'Deck and dome setup', mk: 'Тераса и поставка на иглото' }, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMDE2MzY3NDg3MDY2MTAxNQ%3D%3D/original/63a97444-12e4-4328-99b4-50e1e7912eb1.jpeg', fallback: FALLBACKS[3] },
    { title: { en: 'Top view over Kozjak', mk: 'Поглед одозгора кон Козјак' }, img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMDE2MzY3NDg3MDY2MTAxNQ%3D%3D/original/dabd99ad-e589-4185-a44f-c281331d5332.jpeg', fallback: FALLBACKS[4] },
  ];
  const content = { en: { brand: 'GRIZZLY IGLOOS', tagline: 'The Ultimate Wilderness Experience', navAbout: 'About', navPhotos: 'Photos', navAmenities: 'Amenities', instagram: 'Instagram', bookNow: 'Book now', location: 'Skopje, Kozjak – Jasen, North Macedonia', heroTitle1: 'A premium escape', heroTitle2: 'in the heart of wilderness', heroText: 'Grizzly Igloos blends a cozy dome stay, elevated scenery, and a refined nature atmosphere into one unforgettable destination.', bookAirbnb: 'Book on Airbnb', viewInstagram: 'View Instagram', premiumBadge: 'Premium dome stay experience', aboutLabel: 'About the destination', aboutTitle: 'Luxury feeling, nature energy, unforgettable atmosphere', aboutText1: 'Grizzly Igloos & Mountain Center is designed as a standout destination.', aboutText2: 'The entire experience is built around comfort and location.', openDaily: 'Open daily', restaurantContact: 'Restaurant contact', galleryLabel: 'Photo gallery', galleryTitle: 'Explore the experience', openFullGallery: 'Open full gallery', instaLabel: 'Instagram presence', amenitiesLabel: 'Amenities', amenitiesTitle: 'Comfort inside the wild', included: 'Included in the experience', bookingLabel: 'Booking & contact', bookingTitle: 'Ready for your next wilderness escape?', bookingText: 'Explore more photos and check availability.', checkAvailability: 'Check availability', followInstagram: 'Follow on Instagram', footerLocation: 'Skopje, Kozjak – Jasen', close: 'Close', photoGallery: 'Photo gallery', modalText: 'Browse the atmosphere.', language: 'MK', mobileMenu: 'Menu', guests: 'Guests', bedroom: 'Bedroom', bath: 'Bath', rating: 'Rating', openInstagram: 'Open Instagram', openAirbnb: 'Open Airbnb', features: [], amenities: [] }, mk: { brand: 'GRIZZLY IGLOOS', tagline: 'Врвно доживување во природа', navAbout: 'За нас', navPhotos: 'Фотографии', navAmenities: 'Содржини', instagram: 'Инстаграм', bookNow: 'Резервирај', location: 'Скопје, Козјак – Јасен, Македонија', heroTitle1: 'Премиум бегство', heroTitle2: 'во срцето на природата', heroText: 'Grizzly Igloos спојува топло dome сместување.', bookAirbnb: 'Резервирај на Airbnb', viewInstagram: 'Отвори Instagram', premiumBadge: 'Премиум dome доживување', aboutLabel: 'За дестинацијата', aboutTitle: 'Луксузно чувство, енергија од природата', aboutText1: 'Grizzly Igloos & Mountain Center е замислен.', aboutText2: 'Целото искуство е создадено околу комфор.', openDaily: 'Отворено секој ден', restaurantContact: 'Контакт ресторан', galleryLabel: 'Фото галерија', galleryTitle: 'Истражете го доживувањето', openFullGallery: 'Отвори цела галерија', instaLabel: 'Instagram присуство', amenitiesLabel: 'Содржини', amenitiesTitle: 'Комфор во природа', included: 'Вклучено во искуството', bookingLabel: 'Резервации и контакт', bookingTitle: 'Подготвени за следното бегство?', bookingText: 'Разгледајте повеќе фотографии.', checkAvailability: 'Провери достапност', followInstagram: 'Следи на Instagram', footerLocation: 'Скопје, Козјак – Јасен', close: 'Затвори', photoGallery: 'Фото галерија', modalText: 'Разгледајте ја атмосферата.', language: 'EN', mobileMenu: 'Мени', guests: 'Гости', bedroom: 'Спална', bath: 'Бања', rating: 'Оцена', openInstagram: 'Отвори Instagram', openAirbnb: 'Отвори Airbnb', features: [], amenities: [] } };

  const [lang, setLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = content[lang];

  const heroSlides = useMemo(() => gallery.slice(0, 4), []);
  useEffect(() => { const id = setInterval(() => setCurrentSlide((p) => (p + 1) % heroSlides.length), 4200); return () => clearInterval(id); }, [heroSlides.length]);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-stone-100">
      <div className={`fixed inset-x-0 top-0 z-40 ${scrolled ? 'bg-black/55 backdrop-blur-2xl' : 'bg-black/25 backdrop-blur-xl'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl">
              <img alt="logo" className="h-full w-full object-contain" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA..." />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white">{t.brand}</p>
              <p className="text-xs text-stone-300">{t.tagline}</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <button onClick={() => setLang((p) => (p === 'en' ? 'mk' : 'en'))} className="px-3 py-2 border border-white/15 rounded-xl">{t.language}</button>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded-xl">{t.instagram}</a>
            <a href={AIRBNB_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded-xl">{t.bookNow}</a>
          </div>
        </div>
      </div>

      <section className="pt-28 relative">
        <SmartImage src={heroSlides[currentSlide].img} fallback={heroSlides[currentSlide].fallback} alt="" className="h-[80vh] w-full opacity-50" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-white">{t.heroTitle1}<br/>{t.heroTitle2}</h1>
            <p className="mt-4 text-stone-300 max-w-xl mx-auto">{t.heroText}</p>
            <div className="mt-6 flex gap-4 justify-center">
              <a href={AIRBNB_URL} target="_blank" className="bg-white text-black px-6 py-3 rounded-xl">{t.bookAirbnb}</a>
              <a href={INSTAGRAM_URL} target="_blank" className="border px-6 py-3 rounded-xl">{t.viewInstagram}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
