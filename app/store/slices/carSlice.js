import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cars:[
        { name: "audi", image: "/images/audi.jpg" },
        { name: "bmw", image: "/images/bmw.jpg" },
        { name: "tesla", image: "/images/tesla.jpg" },
        { name: "toyota", image: "/images/toyota.jpg" },
        { name: "benz", image: "/images/benz.jpg" },
        { name: "lamborghini", image: "/images/lamborghini.jpg" }
        ],
        CarDetails:{
                    audi: {
                        name: "Audi R8",
                        image: "/images/audi.jpg",
                        description: "The Audi R8 is a masterpiece of engineering and design, representing the pinnacle of Audi’s performance capabilities. Powered by a roaring 5.2L V10 engine, the R8 delivers up to 602 horsepower, propelling it from 0 to 60 mph in just 3.2 seconds. Its Quattro all-wheel-drive system ensures exceptional grip and stability, making it a joy to drive on both the track and the road. The R8’s sleek, aerodynamic design is complemented by a luxurious interior filled with cutting-edge technology, including a virtual cockpit and premium materials. It’s a supercar that combines everyday usability with breathtaking performance, making it a standout in Audi’s lineup."
                    },
                    benz: {
                        name: "Mercedes-AMG GT",
                        image: "/images/benz.jpg",
                        description: "The Mercedes-AMG GT is a stunning blend of luxury and performance, embodying the spirit of Mercedes-Benz’s high-performance AMG division. Under the hood lies a handcrafted 4.0L V8 engine, producing up to 720 horsepower in the GT Black Series variant. With a 0-60 mph time of just 3.1 seconds, the AMG GT is a true powerhouse. Its long hood, aggressive stance, and sleek lines make it a head-turner, while the interior offers a perfect mix of sportiness and luxury, featuring high-quality materials and advanced driver-assistance systems. The AMG GT is a grand tourer that excels in both style and substance."
                    },
                    tesla: {
                        name: "Tesla Model S Plaid",
                        image: "/images/tesla.jpg",
                        description: "The Tesla Model S Plaid is a revolutionary electric vehicle that redefines what a car can do. With a tri-motor electric powertrain generating 1,020 horsepower, the Model S Plaid accelerates from 0 to 60 mph in an astonishing 1.99 seconds, making it the fastest production car in the world. It boasts an impressive range of 396 miles on a single charge, ensuring long-distance travel without compromise. The minimalist interior features a yoke steering wheel, a massive touchscreen, and over-the-air software updates that keep the car at the forefront of technology. The Model S Plaid is a testament to Tesla’s innovation and dominance in the EV market."
                    },
                    bmw: {
                        name: "BMW M5 Competition",
                        image: "/images/bmw.jpg",
                        description: "The BMW M5 Competition is the ultimate expression of a high-performance luxury sedan. Its 4.4L V8 engine churns out 617 horsepower, enabling it to sprint from 0 to 60 mph in just 3.1 seconds. The M5 Competition combines BMW’s signature driving dynamics with all-wheel drive for exceptional handling and stability. Inside, the cabin is a blend of luxury and sportiness, featuring premium materials, advanced infotainment systems, and customizable driving modes. Whether on the track or the highway, the M5 Competition delivers a thrilling yet refined driving experience, making it a standout in BMW’s lineup."
                    },
                    toyota: {
                        name: "Toyota GR Supra",
                        image: "/images/toyota.jpg",
                        description:"The Toyota GR Supra is a modern reincarnation of a legendary sports car, designed to deliver pure driving excitement. Powered by a 3.0L inline-6 engine producing 382 horsepower, the GR Supra accelerates from 0 to 60 mph in just 3.9 seconds. Its rear-wheel-drive setup and perfectly tuned suspension provide a dynamic and engaging driving experience. The Supra’s bold design, with its double-bubble roof and aggressive lines, pays homage to its iconic predecessors while incorporating modern touches. Inside, the cockpit is driver-focused, with sporty seats and intuitive controls. The GR Supra is a testament to Toyota’s commitment to performance and heritage."
                    },
                   lamborghini: {
                        name: "Lamborghini Aventador SVJ",
                        image: "/images/lamborghini.jpg",
                        description:"The Lamborghini Aventador SVJ is the epitome of Italian supercar excellence, combining jaw-dropping design with mind-blowing performance. Its 6.5L V12 engine produces 759 horsepower, allowing it to rocket from 0 to 60 mph in just 2.8 seconds and reach a top speed of 217 mph. The SVJ features advanced aerodynamics, including an active rear wing and Lamborghini’s ALA (Aerodinamica Lamborghini Attiva) system, which enhances downforce and stability. The interior is a blend of luxury and race-inspired design, with premium materials and cutting-edge technology. With its scissor doors and aggressive styling, the Aventador SVJ is a true masterpiece that embodies Lamborghini’s passion for performance and innovation."
                    }
        }
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
      
      },
    
  });
  
  export default carSlice.reducer;