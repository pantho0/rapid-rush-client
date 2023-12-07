import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {googleLogin, createUser, updateUserProfile} = useContext(authContext)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const handleGoolge = () =>{
    googleLogin()
    .then(res=>{
      console.log(res.user);
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
    .catch((error)=>
      console.log(error)
      )
  }

  const userCreate = (e) =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
    .then(res=>{
      updateUserProfile(name, photo)
      .then(res =>{
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
      const userInfo = {
        name : name,
        email : email,
        role : "user",
        photo : photo
      }
      axiosPublic.post("/users", userInfo)
      .then(res=>{
        console.log(res.data);
        navigate("/dashboard/profile")
      })
    })
    .catch((error)=>{
      console.log(error.message);
      if(error){
        navigate('/')
      }
    })
  }

  return (
    <div className="font-ubuntu">
      <Helmet>
        <title>RapidRush | Signup</title>
      </Helmet>
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full px-4 py-20 mx-auto bg-white xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
          <h1 className="font-ubuntu text-[#3b0032] mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left  md:text-4xl">
            Sign up to our product today for free
          </h1>
          <div className="mt-8 space-y-10">
            <div className="grid grid-cols-1 justify-center">
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
          <form onSubmit={userCreate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="Your Image URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
          <div className="pt-6 mt-6 text-sm font-medium text-[#3b0032] border-t border-gray-200">
            Already have an account?
            <Link to={'/login'}>
            <span href="#" className="text-[#0d3013] underline ml-1 hover:text-purple-900">
              Sign in
            </span>
            </Link>
          </div>
        </div>
        <div className="px-4 py-20 space-y-10 bg-[#3b0032ea] xl:py-32 md:px-40 lg:px-20 xl:px-40">
          <div className="flex flex-col space-x-3">
            <div className="flex-1 px-2 mx-2 font-rapid text-[#F7FF00] text-4xl font-semibold">
              Rapid<span className="text-[#fff]">Rush</span>
            </div>
            <div>
              <h2 className="text-xl font-medium text-[#F7FF00]">
                Free account
              </h2>
              <p className="mt-1 text-white">
              Unlock Hassle-Free Parcel Delivery Solution
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-none w-6 h-6 mt-1 text-[#F7FF00]"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-[#F7FF00]">
              Effortless Parcel Delivery
              </h2>
              <p className="mt-1 text-white">
              Quickly create and send parcels with a few clicks, saving you valuable time and effort.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-none w-6 h-6 mt-1 text-[#F7FF00]"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-[#F7FF00]">
              Real-Time Tracking
              </h2>
              <p className="mt-1 text-white">
              Stay informed with real-time tracking, giving you visibility into your parcels' journey from pickup to delivery.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-none w-6 h-6 mt-1 text-[#F7FF00]"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <h2 className="text-xl font-medium text-[#F7FF00]">
              Secure and Reliable Service
              </h2>
              <p className="mt-1 text-white">
              Trust in our commitment to the safety and security of your parcels, ensuring they reach their destination intact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
