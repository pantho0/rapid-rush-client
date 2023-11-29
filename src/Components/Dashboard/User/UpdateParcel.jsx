import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateParcel = () => {
  const parcel = useLoaderData();
  console.log(parcel);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const type = form.type.value;
    const receiverName = form.receiverName.value;
    const weight = parseInt(form.weight.value);
    function calculatePrice(weight) {
      if (weight === 1) {
        return 50;
      } else if (weight === 2) {
        return 100;
      } else if (weight > 2) {
        return 150;
      } else {
        return 0;
      }
    }
    const receiverAddress = form.receiverAddress.value;
    const receiverPhone = form.receiverAddress.value;
    const requestedTime = form.requestedTime.value;
    const latitude = form.latitude.value;
    const longitude = form.longitude.value;
    const price = calculatePrice(weight);
    const bookingDate = new Date();
    const deliveryManId = "";
    const status = "pending";
    const currentDate = new Date();
    const approxDelivery = new Date();
    const newApprox = new Date(
      approxDelivery.setDate(currentDate.getDate() + 3)
    );

    const bookingData = {
      name,
      email,
      phone,
      type,
      receiverName,
      weight,
      receiverAddress,
      receiverPhone,
      requestedTime,
      latitude,
      longitude,
      price,
      bookingDate,
      deliveryManId,
      status,
      approxDelivery,
      newApprox,
    };
    console.log(bookingData);

    axiosSecure.put(`/update/${parcel?.data?._id}`, bookingData).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Booking Updated.Pay to confirm order",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate('/dashboard/mybooking')
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>RapidRush || Bookings</title>
      </Helmet>
      <h1 className="text-[#3b0032] text-4xl text-center mt-6 mb-6">
        Update Your Parcel
      </h1>
      <form onSubmit={handleBooking}>
        <div className="px-6 mb-6">
          {/* Name & Email */}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>
          {/* Phone & Parcel */}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                defaultValue={parcel?.data?.phone}
                name="phone"
                placeholder="Enter Valid Phone Number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Parcel Type</span>
              </label>
              <input
                type="text"
                placeholder="Parcel Type"
                defaultValue={parcel?.data?.type}
                name="type"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Recever's Name & Parcel Weight */}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Receiver's Name</span>
              </label>
              <input
                type="text"
                placeholder="Receiver's Name"
                defaultValue={parcel?.data?.receiverName}
                name="receiverName"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Parcel Weight</span>
              </label>
              <input
                type="number"
                name="weight"
                defaultValue={parcel?.data?.weight}
                placeholder="Parcel Weight"
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
                name="receiverAddress"
                defaultValue={parcel?.data?.receiverAddress}
                placeholder="Recever's Address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recever's Phone Number</span>
              </label>
              <input
                type="number"
                name="receiverPhone"
                defaultValue={parcel?.data?.receiverPhone}
                placeholder="Recever's Phone Number"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Parcel Delivery Latitude & Requested Delivery Date*/}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Requested Delivery Date</span>
              </label>
              <input
                type="date"
                placeholder="Type here"
                name="requestedTime"
                defaultValue={parcel?.data?.requestedTime}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Delivery Latitude</span>
              </label>
              <input
                type="text"
                name="latitude"
                placeholder="Delivery Latitude"
                defaultValue={parcel?.data?.latitude}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Delivery Longitude & Price*/}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Delivery Longitude</span>
              </label>
              <input
                type="text"
                name="longitude"
                placeholder="Delivery Longitude"
                defaultValue={parcel?.data?.longitude}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                defaultValue={parcel?.data?.price}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text mb-5"></span>
              </label>
              <input
                type="submit"
                value={"Update"}
                className="input input-bordered w-full cursor-pointer bg-[#3b0032] text-white hover:bg-[#3b0032f1] hover:text-[#F7FF00]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateParcel;
