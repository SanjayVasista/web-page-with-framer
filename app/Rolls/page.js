"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import Footer from "../components/Footer";

const Rolls = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const slides = [
    { name: "Audi", image: "/images/audi.jpg" },
    { name: "BMW", image: "/images/bmw.jpg" },
    { name: "Tesla", image: "/images/tesla.jpg" },
    { name: "Toyota", image: "/images/toyota.jpg" },
    { name: "Benz", image: "/images/benz.jpg" },
    { name: "Lamborghini", image: "/images/lamborghini.jpg" },
  ];

  const carDetails = {
    Audi: {
      name: "Audi R8",
      description:
        "The Audi R8 is a masterpiece of engineering, featuring a 5.2L V10 engine with 602 horsepower. With a 0-60 mph time of 3.2 seconds and Quattro all-wheel drive, it's a perfect blend of performance and luxury.",
    },
    BMW: {
      name: "BMW M5 Competition",
      description:
        "The BMW M5 Competition boasts a 4.4L V8 engine with 617 horsepower, going from 0 to 60 mph in just 3.1 seconds. It delivers the ultimate driving experience with luxury and high-speed capability.",
    },
    Tesla: {
      name: "Tesla Model S Plaid",
      description:
        "The Tesla Model S Plaid redefines electric performance with a tri-motor setup generating 1,020 horsepower. It accelerates from 0 to 60 mph in 1.99 seconds, making it the fastest production car globally.",
    },
    Toyota: {
      name: "Toyota GR Supra",
      description:
        "The Toyota GR Supra is a lightweight sports car with a 3.0L inline-6 engine delivering 382 horsepower. Its agile handling and dynamic driving experience make it a favorite among enthusiasts.",
    },
    Benz: {
      name: "Mercedes-AMG GT",
      description:
        "The Mercedes-AMG GT is a luxurious powerhouse with a handcrafted 4.0L V8 engine, reaching 720 horsepower in the GT Black Series. It blends high performance with a stunning, aggressive design.",
    },
    Lamborghini: {
      name: "Lamborghini Aventador SVJ",
      description:
        "The Lamborghini Aventador SVJ is an iconic supercar with a 6.5L V12 producing 759 horsepower. With its scissor doors and aggressive aerodynamics, it embodies the spirit of speed and exclusivity.",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black bg-opacity-50 backdrop-blur-md" : "bg-transparent"
        } p-4  sm:text-base md:text-sm`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Car Showcase</h1>
          <nav className="flex space-x-4">
            <a href="/pre-owned" className="hover:text-gray-400">
              Pre-owned
            </a>
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <a href="/cookies" className="hover:text-gray-400">Information</a>
            <a href="/press" className="hover:text-gray-400">Pressclub</a>
            <a href="/legal" className="hover:text-gray-400">Legal</a>
          </nav>
        </div>
      </header>

      
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              className="w-full h-full object-cover"
              src={slide.image}
              alt={slide.name}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {slide.name}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="container mx-auto px-4 py-12">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            {carDetails[slides[currentSlide].name].name}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {carDetails[slides[currentSlide].name].description}
          </p>
        </motion.div>
      </section>

      
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-sm mb-4 md:mb-0">
              <a href="/" className="text-white hover:text-gray-400">
                Car Showcase
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/pre-owned" className="text-white hover:text-gray-400">
                Pre-owned
              </a>
              <a href="/cookies" className="text-white hover:text-gray-400">
                Cookies
              </a>
              <a href="/press" className="text-white hover:text-gray-400">
                Pressclub
              </a>
              <a href="/legal" className="text-white hover:text-gray-400">
                Legal
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 md:grid-cols-3">
        {slides.map((car) => (
          <Link href={`/car/${car.name.toLowerCase()}`} key={car.name.toLowerCase()}>
            <div className="border shadow-gray-300 p-4 cursor-pointer ">
              <img src={car.image} alt={car.name} className="w-full h-60 object-fit rounded-md" />
              <h2 className="text-center font-bold text-xl">{car.name.toUpperCase()}</h2>
              <p>{carDetails[car.name].description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Popup/>
      <Footer/>
    </div>
  );
};

export default Rolls;
