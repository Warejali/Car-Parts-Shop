import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const [profile, setProfile] = useState({
    education: "",
    location: "",
    number: "",
    link: "",
  });

  const { education, location, number, link } = profile;

  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    const getReviews = async () => {
      const { data } = await axios.get(
        `https://pacific-eyrie-12324.herokuapp.com/getUserProfile/${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setProfile(data);
    };
    getReviews();
  }, [user.email]);

  useEffect(() => {
    // reset form with user data
    reset(profile);
  }, [profile, reset]);

  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://pacific-eyrie-12324.herokuapp.com/userProfile/${user.email}`;

    const profile = {
      name: user.displayName,
      email: user.email,
      education: data.education,
      location: data.location,
      number: data.number,
      link: data.link,
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Profile update successfully");
        } else {
          toast.success("Profile save successfully");
        }
      })
      .catch((error) => toast.warning(error.message));
  };
  return (
    <div className="card bg-base-100  shadow-xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-bold mb-5">My Profile</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control ">
              <label className="label">
                <span className="label-userName">User Name</span>
              </label>
              <input
                type="text"
                value={user.displayName || ""}
                disabled
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-userName">Email</span>
              </label>
              <input
                type="text"
                value={user.email || ""}
                disabled
                className="input input-bordered"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-education">Education</span>
              </label>
              <input
                {...register("education", {
                  required: {
                    value: true,
                    message: "Education is required",
                  },
                })}
                type="text"
                name="education"
                onChange={(e) => onInputChange(e)}
                value={education || ""}
                placeholder="Type education"
                className="input input-bordered ratting"
              />
              {errors.education?.type === "required" && (
                <p className="text-red-500">{errors.education.message}</p>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-location">Location (city/district)</span>
              </label>
              <input
                {...register("location", {
                  required: {
                    value: true,
                    message: "Location is required",
                  },
                })}
                name="location"
                onChange={(e) => onInputChange(e)}
                type="text"
                value={location || ""}
                placeholder="Type location city/district"
                className="input input-bordered ratting"
              />
              {errors.location?.type === "required" && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-number">Phone number</span>
              </label>
              <input
                {...register("number", {
                  required: {
                    value: true,
                    message: "Number is required",
                  },
                })}
                name="number"
                onChange={(e) => onInputChange(e)}
                type="number"
                value={number || ""}
                placeholder="Type number "
                className="input input-bordered ratting"
              />
              {errors.number?.type === "required" && (
                <p className="text-red-500">{errors.number.message}</p>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-link">LinkedIn profile link</span>
              </label>
              <input
                {...register("link", {
                  required: {
                    value: true,
                    message: "Link is required",
                  },
                })}
                name="link"
                onChange={(e) => onInputChange(e)}
                value={link || ""}
                type="text"
                placeholder="Type link"
                className="input input-bordered ratting"
              />
              {errors.link?.type === "required" && (
                <p className="text-red-500">{errors.link.message}</p>
              )}
            </div>
          </div>

          <div className="card-actions mt-3">
            <button className="btn btn-accent">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
