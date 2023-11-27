import Lottie from "lottie-react";
import animationData from "../../../public/Animation - 1701096524891.json"
const Login = () => {
  return (
    <div>
      <section class="grid grid-cols-1 gap-0 lg:grid-cols-12">
        <div class="w-full col-span-1 mx-auto mt-10 lg:col-span-6 md:w-2/4">
          <div className="flex-1  font-rapid text-[#F7FF00] bg-[#3b0032] text-center p-4 text-4xl font-semibold">
            Rapid<span className="text-[#fff]">Rush</span>
          </div>
            <h1 class="font-ubuntu mt-6 mb-4 text-xl font-bold text-[#3b0032] text-center">
                Log in to your account
            </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div class="my-6 space-y-2">
            <p class="text-xs text-gray-600">
              Don't have an account?
              <a href="#" class="text-purple-700 hover:text-black">
                Create an account
              </a>
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
