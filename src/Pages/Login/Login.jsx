import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1701096524891.json"
import { Helmet } from "react-helmet-async";
import useAuth from "../../Components/Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
const Login = () => {
  const {loginUser, googleLogin} = useAuth();
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const login = (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(res=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(res);
      navigate('/dashboard/profile')
    })
    .catch(error=>{
      console.log(error);
      if(error){
        navigate('/')
      }
    })
  }
  const handleGoolge = () =>{
    googleLogin()
    .then(res=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(res);
      const userInfo = {
        name : res.user.displayName,
        email : res.user.email,
        role : "user",
        photo : res?.user.photoURL
      }
      axiosPublic.post("/users", userInfo)
      .then(res=>{
        console.log(res.data);
        navigate("/dashboard/profile")
      })
    })
    .catch((error)=>{
      console.log(error)
      navigate("/")
    })
  }
  return (
    <div>
      <Helmet>
        <title>RapidRush | Login</title>
      </Helmet>
      <section class="grid grid-cols-1 gap-0 lg:grid-cols-12">
        <div class="w-full col-span-1 mx-auto mt-10 lg:col-span-6 md:w-2/4">
          <div className="flex-1  font-rapid text-[#F7FF00] bg-[#3b0032] text-center p-4 text-4xl font-semibold">
            Rapid<span className="text-[#fff]">Rush</span>
          </div>
            <h1 class="font-ubuntu mt-6 mb-4 text-xl font-bold text-[#3b0032] text-center">
                Log in to your account
            </h1>
            <div className="mt-8 space-y-10">
            <div className="grid justify-center grid-cols-1">
              <a href="#" onClick={handleGoolge} className="py-3 btn btn-icon btn-google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                <span className="sr-only">Continue with</span> Google
              </a>
            </div>
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white">
                Or
              </span>
            </div>
          </div>
          <form onSubmit={login} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white bg-[#3b0032] border-none hover:bg-[#3b0032d8] hover:text-[#F7FF00]">Login</button>
            </div>
          </form>
          <div class="my-6 space-y-2">
            <p class="text-xs text-gray-600">
              Don't have an account?
              <Link to={'/register'} class="text-purple-700 hover:text-black">
                Create an account
              </Link>
            </p>
            <a href="#" class="block text-xs text-purple-700 hover:text-black">
              Forgot password?
            </a>
            <a href="#" class="block text-xs text-purple-700 hover:text-black">
              Privacy & Terms
            </a>
          </div>
        </div>
        <div class="col-span-1 lg:col-span-6">
          {/* <img
            src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt="3 women looking at a laptop"
            class="object-cover w-full h-64 min-h-full bg-gray-100"
            loading="lazy"
          /> */}
          <Lottie animationData={animationData}></Lottie>
        </div>
      </section>
    </div>
  );
};

export default Login;
