import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {


    const [Services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    })


    return (
        <div className="mt-10">

            <div className="text-center"> 
                <p className="text-2xl text-orange-500">Our Service</p>
                <h2 className="text-4xl mb-4 mt-4">Our Service Area</h2>
                <p>
                  Genius provider and others cold and dolor sit amet consectetur adipisicing elit. Nam, nulla veritatis. <br /> Rem sit est ipsam quis esse labore eos exercitationem?
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                Services.map(service => <ServiceCard key={service._id}service={service}></ServiceCard>)
               }
            </div>
            
        </div>
    );
};

export default Services;