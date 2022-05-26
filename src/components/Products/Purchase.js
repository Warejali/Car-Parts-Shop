import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState({
    name: "",
    img: "",
    description: "",
    minQuantity: "",
    quantity: "",
    price: "",
  });

  const {
    name,
    img,
    description,
    minQuantity,
    quantity,
    price,
  } = product;
  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (
      parseInt(products.minQuantity) > parseInt(minQuantity) ||
      parseInt(products.quantity) < parseInt(minQuantity)
    ) {
      toast.warning(
        `Minimum order : ${products.minQuantity} and Maximum order : ${products.quantity}`
      );
    }
  }, [
    products.quantity,
    products.minQuantity,
    minQuantity,
  ]);

  useEffect(() => {
    const url = `https://pacific-eyrie-12324.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setProducts(data);
      });
  }, [id]);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading) {
    <Loading />;
  }
  useEffect(() => {
    reset(product);
  }, [product, reset]);

  const onSubmit = (data) => {
    const url = `https://pacific-eyrie-12324.herokuapp.com/order`;

    const order = {
      userName: user.displayName,
      userEmail: user.email,
      address: data.address,
      phone: data.phoneNumber,
      name: name,
      quantity: minQuantity,
      price: price * minQuantity,
      img: img,
    };
    console.log(order);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/dashboard/myAllOrders");
          toast.success("Product Add Successfully");
        }
      })
      .catch((error) => toast.warning(error.message));
  };

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-20">
      <div class="collapse">
        <input type="checkbox" class="peer" />
        <div class="collapse-title w-96 mx-auto bg-red-100 rounded-xl mt-5 text-center">
          <h2 className='text-xl text-primary font-bold uppercase'>Product Details</h2>
        </div>
        <div class="collapse-content">
          <div className="hero lg:mx-auto">
            <div className="hero-content grid lg:grid-cols-2 lg:gap-20 lg:px-16">
              <div>
                <img className='lg:w-80' src={img} alt="" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{name}</h1>
                <small>{description}</small>
                <p className="py-3 font-bold">Price per unit: ${price}</p>
                <p className="py-3 font-bold">Stock Quantity: {quantity}</p>
                <p className="py-3 font-bold">Min Order Quantity: {minQuantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center w-full">

        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Detailed information about the product
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="card">
          <div className="card-body" id="login">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="font-bold mb-5">User information</h2>

              <div className="form-control w-full mb-3">
                <label className="label">
                  <span className="label-userName">User Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user.displayName || ""}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-email">Email</span>
                </label>
                <input
                  type="email"
                  disabled
                  value={user.email || ""}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full mb-3">
                <label className="label">
                  <span className="label-name">Product Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={name || ""}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full mb-3">
                <label className="label">
                  <span className="label-minQuantity">Quantity</span>
                </label>
                <input
                  {...register("minQuantity", {
                    required: {
                      value: true,
                      message: "Quantity is required",
                    },
                  })}
                  name="minQuantity"
                  value={minQuantity || ""}
                  type="number"
                  onChange={(e) => onInputChange(e)}
                  placeholder="Type Quantity"
                  className="input input-bordered w-full"
                />
                {errors.minQuantity?.type === "required" && (
                  <p className="text-red-500">
                    {errors.minQuantity.message}
                  </p>
                )}
              </div>

              <span className="text-red-600">
                Price : ${price * minQuantity}
              </span>
              <div className="form-control w-full mb-3">
                <label className="label">
                  <span className="label-address">Address</span>
                </label>
                <input
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                    minLength: {
                      value: 4,
                      message: "Must be 4 characters or longer",
                    },
                  })}
                  type="text"
                  placeholder="Type Address"
                  className="input input-bordered w-full"
                />

                {errors.address?.type === "required" && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
                {errors.address?.type === "minLength" && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
              <div className="form-control w-full mb-3">
                <label className="label">
                  <span className="label-phoneNumber">Phone Number</span>
                </label>
                <input
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                    minLength: {
                      value: 4,
                      message: "Must be 4 characters or longer",
                    },
                  })}
                  type="number"
                  placeholder="Type Phone Number"
                  className="input input-bordered w-full"
                />

                {errors.phoneNumber?.type === "required" && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
                {errors.phoneNumber?.type === "minLength" && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div className="card-actions">
                <button
                  className="btn btn-accent"
                  disabled={
                    products.minQuantity >
                    parseInt(minQuantity) ||
                    products.quantity < parseInt(minQuantity)
                  }
                >
                  {false ? "Loading..." : "Place the order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
