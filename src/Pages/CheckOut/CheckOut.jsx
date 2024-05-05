import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const service = useLoaderData();
    const {title} = service;


    return (
        <div>
            <h2>Book Service: {title}</h2>


            <div className=" ">
               <div className="hero-content flex-col lg:flex-row-reverse">
                 
                 <div className="card shrink-0   shadow-2xl bg-base-100">
                   <div className="card-body">

                    <form>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input type="email" placeholder="email" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input type="email" placeholder="email" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input type="email" placeholder="email" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Password</span>
                       </label>
                       <input type="password" placeholder="password" className="input input-bordered" required />
                       
                     </div>

                     </div>

                     <div className="form-control mt-6">
                       
                       <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                     </div>

                     </form>

                   </div>
                 </div>
               </div>
            </div>

           
      
        </div>
    
 
    );
};

export default CheckOut;