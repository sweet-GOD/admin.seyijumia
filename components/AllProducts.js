import React from "react";

export default function AllProducts({ products }) {
  return (
    <>
      <div className="overflow-x-auto   max-h-6xl">
        <table className="table w-full table-xs table-pin-rows table-pin-cols ">
          <thead>
            <tr>
              <th>S/N</th>
              <td>Image</td>
              <td>Title</td>
              <td>Brand</td>
              <td>Units</td>
              <td>Price</td>
              <td>Delivery</td>

              {/* <th>{""}</th> */}
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product.id}>
                <th>{index +1}</th>

                <td>
                  <img
                    src={product.images}
                    alt="product image"
                    className="w-[50px] h-[50px]"
                  />
                </td>

                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.units}</td>
                <td>{product.price}</td>
                <td>{product.deliveryMethod}</td>

                {/* <th>{index +1}</th> */}
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
    </>
  );
}
