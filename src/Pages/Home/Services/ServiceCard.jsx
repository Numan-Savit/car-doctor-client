import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {


    const {_id, title, img, price} = service;


    return (
        
        <div className="card w-96 bg-base-100 shadow-xl mt-8 mb-14">
           <figure className="px-10 pt-10">
             <img src={img} alt="Shoes" className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{title}</h2>
             <p className="text-red-700">Price: ${price}</p>
             <div className="card-actions">
                <Link to={`/book/${_id}`}>
                   <button className="btn btn-primary">Book Now</button>
                </Link>
             </div>
           </div>
        </div>
    );
};

export default ServiceCard;