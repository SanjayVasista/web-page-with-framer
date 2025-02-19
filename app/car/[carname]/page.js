"use client"; 
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Popup from "@/app/components/Popup";

export default function CarDetails() {
    const { carname } = useParams(); 
    const cars = useSelector((state) => state.cars.cars);
    const carDetails = useSelector((state) => state.cars.CarDetails[carname]);
    
    const car = cars.find((c) => c.name === carname);


    if (!car || !carDetails) return <p>Car not found</p>;

    return (<>
    <Header />
        <div className="p-6 flex-col text-center ">
            <h1 className="text-3xl font-bold">{car.name.toUpperCase()}</h1>
            <img src={car.image} alt={car.name} className="w-80 h-60  my-10 mx-auto object-fit  rounded-lg " />
            <p className="mt-2 text-bold text-4xl">More details about {carDetails.name} will be displayed here.</p>
            <p>{carDetails.description}</p>
        </div>
        <Popup />
    <Footer />    
        </>
    );
}
