import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollTop";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    fetch('https://api.rvssoy.com/settings/read.php')
        .then(res => res.json())
        .then(data => {
            if (data && data.site_title) {
                // Brauzerin başlığını dəyişirik
                document.title = data.site_title;
            }
        });
}, []);
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
