/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import rice from "../../assets/r1.png";

const OrderList = () => {
  return (
    <div>
      {
        <div className=" my-5 py-5 px-4  shadow">
          <div className="lg:flex justify-between hidden">
            <div className="flex gap-4 ">
              <img className="w-20" src={rice} alt="" />
            </div>
            <Link
              href={`/getorderdetails`}
              className=" border border-primary rounded-sm transition duration-300 h-10 px-4 py-2 bg-transparent text-primary hover:bg-primary hover:text-white"
            >
              View Order
            </Link>
          </div>
          <thead className=" hidden lg:block text-md text-gray-700  bg-gray-50">
            <tr>
              <th className="px-2 py-3">Order Number</th>
              <th className="px-2 py-3">Purchased</th>
              <th className="px-2 py-3">Quanity</th>
              <th className="px-2 py-3">Total</th>
              <th className="px-2 py-3">Paid Status</th>
              <th className="px-2 py-3">Delivery Status</th>
            </tr>
          </thead>
          <tbody className="hidden lg:block">
            <tr>
              <td className="px-3 py-3">{order._id} </td>
              <td className="px-3 py-3">
                {new Date(order.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
              </td>
              <td className="px-3 py-3">
                x
                {order.products.reduce(
                  (acc, product) => acc + product.quantity,
                  0
                )}{" "}
              </td>
              <td className="px-3 py-3">
                $
                {order.products.reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                )}{" "}
              </td>
              <td className="px-3 py-3">
                {order.paidStatus === true ? "Paid" : "Unpaid"}{" "}
              </td>
              <td className="px-3 py-3">{order.deliveryStatus} </td>
            </tr>
          </tbody>

          <div className="lg:hidden block">
            <h1 className="font-semibold">{order._id}</h1>
            <p>
              Order Date-{" "}
              {new Date(order.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="">
              <span className="font-semibold">Quantity- </span>x
              {order.products.reduce(
                (acc, product) => acc + product.quantity,
                0
              )}{" "}
            </p>
            <p className="">
              $
              {order.products.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )}{" "}
            </p>
            <p className="my-1">
              {order.paidStatus === true ? (
                <span className="bg-green-200 p-1">Paid </span>
              ) : (
                <span className="bg-red-200 p-1">Unpaid </span>
              )}{" "}
            </p>
            <p className="my-1.5 m">
              <span className="bg-yellow-200 p-1">{order.deliveryStatus} </span>{" "}
            </p>
            <div className="mt-6">
              <Link
                href={`/getorderdetails/${order._id}`}
                className="border border-primary rounded-sm transition duration-300 h-10 px-4 py-2 bg-transparent text-primary hover:bg-primary hover:text-white"
              >
                View Order
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default OrderList;
