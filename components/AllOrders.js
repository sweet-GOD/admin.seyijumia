"use client";
import React, { useState } from "react";
import { NGnaira } from "../lib/help";

export default function AllOrders({ orders }) {
  // const [attended, setAttended] = useState(false);
  const [attendedOrders, setAttendedOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  const handleAttended = (index) => {
    // Check if the order is already attended
    const isAttended = attendedOrders.includes(index);

    // Toggle the attended state for the selected order
    if (isAttended) {
      setAttendedOrders(attendedOrders.filter((i) => i !== index));
    } else {
      setAttendedOrders([...attendedOrders, index]);
    }
  };
  const handleDelivered = (index) => {
    // Check if the order is already attended
    const isDelivered = deliveredOrders.includes(index);

    // Toggle the attended state for the selected order
    if (isDelivered) {
      setDeliveredOrders(deliveredOrders.filter((i) => i !== index));
    } else {
      setDeliveredOrders([...deliveredOrders, index]);
    }
  };

  return (
    <>
      <div className="overflow-x-auto max-h-6xl">
        {orders?.map((order, index) => (
          <div
            key={order.id}
            className={`${
                  deliveredOrders.includes(index)
                ? "bg-green-500"
                : attendedOrders.includes(index)
                ? "bg-yellow-500"
                : "bg-white"
            } py-4 px-2 my-4 rounded-3xl`}
          >
            <table className="table w-full  table-xs mt-5">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Delivery Address</th>
                  <th>Cart Sum</th>
                  <th>Delivery Sum</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order.fullName}</td>
                  <td>{order.email}</td>
                  <td>{order.phoneNumber}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{NGnaira.format(order.cartSum)}</td>
                  <td>{NGnaira.format(order.deliverySum)}</td>
                  <td>{NGnaira.format(order.cartSum + order.deliverySum)}</td>
                  {/* <td>{formatDate(order.orderDate)}</td> */}
                </tr>
              </tbody>
            </table>

            {order.cart.map((item) => (
              <table className="table  mt-2 ml-3" key={Math.random()}>
                <tbody>
                  <tr>
                    <td>Product:</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={
                                item.images.length > 10
                                  ? item.images
                                  : item.images[0]
                              }
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-sm opacity-50">
                            {item.description.slice(0, 100)}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
            <div className="flex gap-4 justify-end items-center mt-3">
              <div className="btn" onClick={() => handleAttended(index)}>
                attended
              </div>
              <div className="btn" onClick={() => handleDelivered(index)}>
                delivered
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const formatDate = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000); // Convert timestamp to milliseconds
  return date.toLocaleString(); // Format the date as desired
};
