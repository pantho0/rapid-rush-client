import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";

const Booking = () => {
  const {user} = useAuth()
  return (
    <div>
      <Helmet>
        <title>RapidRush || Bookings</title>
      </Helmet>
      <h1 className="text-[#3b0032] text-4xl text-center mt-6 mb-6">
        Book Your Percel
      </h1>
      <div className="px-6 mb-6">
        {/* Name & Email */}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              disabled
            />
          </div>
        </div>
        {/* Phone & Percel */}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Parcel Type</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Recever's Name & Percel Weight */}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recever's Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Percel Weight</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Recever's Name & Percel Weight */}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recever's Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Percel Weight</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Recever's Address & Recever's Phone Number */}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recever's Address</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recever's Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Parcel Delivery Address & Requested Delivery Date*/}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Parcel Delivery Address</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Requested Delivery Date</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Delivery Latitude & Delivery Longitude*/}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Delivery Latitude</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Delivery Longitude</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Price & Booking*/}
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text mb-5"></span>
            </label>
            <input
              type="submit"
              value={'Book Now'}
              className="input input-bordered w-full cursor-pointer bg-[#3b0032] text-white hover:bg-[#3b0032f1] hover:text-[#F7FF00]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
