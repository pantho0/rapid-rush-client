import { Helmet } from "react-helmet-async";


const MyPercel = () => {
    return (
        <div>
      <Helmet>
        <title>RapidRush || My Percels</title>
      </Helmet>
      <h1 className="text-[#3b0032] text-4xl text-center mt-6 mb-6">
       My Bookings
      </h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Parcel Type</th>
        <th>Requested Delivery Date</th>
        <th>Approximate Delivery Date</th>
        <th>Booking Date</th>
        <th>Delivery Men ID</th>
        <th>Booking Status</th>
        <th>Action</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    );
};

export default MyPercel;