"use client";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Popup from "./components/Popup";

export default function Home() {
  const cars = useSelector((state) => state.cars.cars);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="m-1 p-3">
        <h1 className="text-bold text-4xl text-center">Car Showroom</h1>
        <p className="text-center text-xl">Here are the cars, you can choose anyone</p>
        <p className="text-center text-lg">Click on any car to get the details</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {cars.map((car) => (
          <Link href={`/car/${car.name}`} key={car.name}>
            <div className="border shadow-gray-300 p-4 cursor-pointer">
              <img src={car.image} alt={car.name} className="w-full h-60 object-fit rounded-md" />
              <h2 className="text-center font-bold text-xl">{car.name.toUpperCase()}</h2>
            </div>
          </Link>
        ))}
      </div>
      <Popup />
      <br />
      <Footer />
    </div>
  );
}
