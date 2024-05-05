
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

  const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password)

        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.log(error));
        
      }


    return (
        
        <div className="hero min-h-screen bg-base-200 mb-10">
           <div className="hero-content flex-col lg:flex-row">
             <div className="mr-12  w-1/2">
               
               <img src= {img} alt="" />
               
             </div>
             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
               <h1 className="text-5xl font-bold">Login now!</h1>

                 <form onSubmit={handleLogin}>


                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                   <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                   </label>
                 </div>

                   <div className="form-control mt-6">
                   
                   <input className='btn btn-primary' type="submit" value="Login" />
                   </div>


                 </form>

                 <p>New to Car Doctors <span className='text-red-500 font-bold'><Link to='/signup'><u>Sign Up</u></Link></span></p>

               </div>
             </div>
           </div>
        </div>
    );
};

export default Login;