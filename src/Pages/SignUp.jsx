import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "nodemon";
import Swal from "sweetalert2";

// import React from 'react';

const SignUp = () => {
  const { createuser, updateUserProfaile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfaile(data.name, data.PhotoUrl)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign up </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue="test"
                  {...register("name", { required: true })}
                  type="name"
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="font-bold text-red-600">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  defaultValue="test"
                  {...register("PhotoUrl", { required: true })}
                  type="text"
                  name="PhotoUrl"
                  placeholder="Type PhotoUrl"
                  className="input input-bordered"
                  required
                />
                {errors.PhotoUrl && (
                  <span className="font-bold text-red-600">
                    PhotoUrl is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  defaultValue="test"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="font-bold text-red-600">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    defaultValue: "test",
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[@#$&*])(?=.*[0-9])(?=.*[a-z])/, // Corrected regex
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 font-sans font-bold">
                    Password must be 6 characters is required
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 font-sans font-bold">
                    Password must be less than 20 characters is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 font-sans font-bold">
                    Password must have one upperCase one lower case, one number
                    and special characters
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="signup"
                />
                {/* <button className="btn btn-primary">Sign UP</button> */}
              </div>
            </form>
            <p className="text-xl text-center font-bold">
              <small>
                Already have an Account{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login{" "}
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
