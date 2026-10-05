import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Announcement from "./components/Announcement";
import About from "./components/About";
import FoodSection from "./components/FoodSection";
import KitchenGallery from "./components/KitchenGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
export default function App() {
  return (<><Navbar /><main><Hero /><Announcement /><About /><FoodSection /><KitchenGallery /><Contact /></main><Footer /><FloatingContact /></>);
}
