import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        
        <div className="hero min-h-screen ">
           <div className="hero-content flex-col lg:flex-row">

            <div className='lg:w-1/2 relative'>
              <img src={person} className="w-3/4 rounded-lg shadow-2xl" />   
              <img src={parts} className="w-1/2 rounded-lg absolute right-3 top-1/2 shadow-2xl" />   
            </div>

             <div className='lg:w-1/2'>
                <p className='text-red-700 font-bold'>About Us</p>
               <h2 className="text-5xl font-bold">We are qualified & of experiens in this field</h2>
               <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.  In deleniti eaque aut repudiandae et a id. There are many Variation of Pagaes anad ring o our provider all bandj.
               </p>
               <button className="btn btn-primary">Get More Info</button>
             </div>
           </div>
        </div>
    );
};

export default About;