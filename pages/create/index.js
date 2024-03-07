import React, { useState } from "react";
import { uploadProduct } from "../../lib/uploadProduct";
import { FilePicker } from "evergreen-ui";

export default function Create() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "1000",
    brand: "",
    description: "",
    features: "",
    specifications: "",
    units: "",
    deliveryMethod: "",
    deliveryPrice: "",
    images: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();

    const result = await uploadProduct(formData);

    if (result) {
      alert("Product uploaded successfully");
    } else {
      alert("Error uploading product");
    }

    window.location.reload();
  };

  return (
    <div className="min-h-screen">
      <h2 className="m-5">Create Product</h2>

      <div className="avatar">
        <div className="w-50 rounded">
          {formData.images ? (
            <img
              src={URL.createObjectURL(formData.images)}
              alt="Project Image"
              className="max-w-xl"
            />
          ) : (
            <img src="/avatar.png" alt="Project Image" className="max-w-xl" />
          )}
        </div>
      </div>

      <div className="mt-5">
        <p>Product Image</p>
        <FilePicker
          className="w-full max-w-xs"
          placeholder="Upload Project Image"
          onChange={(files) =>
            setFormData({ ...formData, images: files[0] })
          }
        />
      </div>

      <div className="mt-5">
        <input
          type="text"
          placeholder="Product Title"
          defaultValue={formData.title}
          className="input input-bordered bg-white input-success w-full max-w-xl"
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <select
          className="select select-success bg-white w-full max-w-xs"
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
        >
          <option defaultValue value="othercategories">
            Category
          </option>
          <option value="groceries">Groceries</option>
          <option value="healthbeauty">Health & Beauty</option>
          <option value="homeoffice">Home & Office</option>
          <option value="appliances">Appliances</option>
          <option value="phonestablets">smartphones</option>
          <option value="computing">Computing</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="babyproducts">Baby Products</option>
          <option value="gaming">Gaming</option>
          <option value="cars">Cars</option>
          <option value="othercategories">Other Categories</option>
        </select>
      </div>

      <div className="mt-5">
        <input
          type="number"
          defaultValue={formData.price}
          placeholder="Product Price (Naira)"
          className="input input-bordered bg-white input-success w-full max-w-xs"
          onChange={(event) =>
            setFormData({ ...formData, price: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <input
          type="text"
          placeholder="Product Brand e.g Samsung, Oraimo, Apple"
          className="input input-bordered bg-white input-success w-full max-w-xs"
          onChange={(event) =>
            setFormData({ ...formData, brand: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <textarea
          className="textarea textarea-success bg-white w-full max-w-xl h-[150px] max-h-[200px]"
          placeholder="Product Details"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        ></textarea>
      </div>

      <div className="mt-5">
        <textarea
          className="textarea textarea-success bg-white w-full max-w-xl h-[150px] max-h-[200px]"
          placeholder="Key Features"
          onChange={(event) =>
            setFormData({ ...formData, features: event.target.value })
          }
        ></textarea>
      </div>

      <div className="mt-5">
        <textarea
          className="textarea textarea-success bg-white w-full max-w-xl h-[150px] max-h-[200px]"
          placeholder="Specifications"
          onChange={(event) =>
            setFormData({ ...formData, specifications: event.target.value })
          }
        ></textarea>
      </div>

      <div className="mt-5">
        <input
          type="number"
          min="1"
          placeholder="Number of Units Available"
          className="input input-bordered bg-white input-success w-full max-w-xs"
          onChange={(event) =>
            setFormData({ ...formData, units: event.target.value })
          }
        />
      </div>

      <div className="mt-5">
        <select
          className="select select-success bg-white w-full max-w-xs"
          onChange={(event) =>
            setFormData({ ...formData, deliveryMethod: event.target.value })
          }
        >
          <option defaultValue value="Pay Before Delivery">
            Pay Before Delivery
          </option>

          <option value="Free Delivery">Free Delivery</option>
          <option value="Pay on Delivery">Pay on Delivery</option>
        </select>
      </div>

      <div className="mt-5">
        <input
          type="number"
          min="500"
          placeholder="Delivery Price (Naira)"
          className="input input-bordered bg-white input-success w-full max-w-xs"
          onChange={(event) =>
            setFormData({ ...formData, deliveryPrice: event.target.value })
          }
        />
      </div>

      <div className="mt-5 pb-5">
        <button onClick={submitForm} className="btn btn-success text-white">
          Submit
        </button>
      </div>
    </div>
  );
}
