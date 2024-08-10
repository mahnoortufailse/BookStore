/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";
import axios from "axios";
import toast from "react-hot-toast"; // Ensure using the right toast library

const validate = (values) => {
  const errors = {};

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

const Login = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (data) => {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      try {
        const res = await axios.post(
          "http://localhost:4000/user/login",
          userInfo
        );
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully!");
          setShowSuccessModal(true);
          setTimeout(() => {
            setShowSuccessModal(false); // Hide the success modal after 1 second
            document.getElementById("my_modal_3").close(); // Close the modal
          }, 1000);

          localStorage.setItem("Users", JSON.stringify(res.data.user));
          formik.resetForm();
        }
      } catch (err) {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      }
    },
  });

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white dark:bg-slate-900">
            <form onSubmit={formik.handleSubmit}>
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
              <h3 className="font-bold text-xl dark:text-gray-500 text-black">
                Login
              </h3>

              <div className="mt-4 space-y-2 text-left">
                <span className="text-black dark:text-gray-500">Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-80 px-3 py-1 border rounded-md dark:bg-slate-950 outline-none bg-gray-100 text-black dark:text-gray-600"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error text-red-500 text-xs font-poppins italic">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mt-4 space-y-2 text-left">
                <span className="text-black dark:text-gray-500">Password</span>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-80 px-3 py-1 border rounded-md outline-none bg-gray-100 peer-focus:bg-gray-200 dark:text-gray-600 dark:bg-slate-950"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error text-red-500 text-xs font-poppins italic">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="flex justify-between mt-6 p-2">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                <p className="text-sm dark:text-gray-400 text-black">
                  Not registered?{" "} 
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer text-base"
                    onClick={() =>
                      document.getElementById("my_modal_3").close()
                    }
                  >
                    Signup
                  </Link>{" "}
                  </p>
              </div>
            </form>
          </div>
        </dialog>
        {/* Display the success modal if showSuccessModal is true */}
        {showSuccessModal && <SuccessModal message="Logged in Successfully" />}
      </div>
    </>
  );
};

export default Login;
