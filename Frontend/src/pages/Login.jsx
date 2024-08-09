import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessModal from '../components/SuccessModal';

const validate = (values) => {
  const errors = {};

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

const Login = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Form Data:', values);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false); // Hide the success modal after 1 second
        formik.resetForm(); // Reset form fields after submission
      }, 1000);
      // Optionally, you can close the modal here if it's needed
      document.getElementById('my_modal_3').close();
    },
  });

  return (
    <>
      <div className="dark:text-black">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={formik.handleSubmit}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('my_modal_3').close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-xl">Login</h3>

              <div className="mt-4 space-y-2 text-left">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error text-red-500 text-xs font-poppins italic">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mt-4 space-y-2 text-left">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-80 px-3 py-1 border rounded-md outline-none"
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
                <p className="text-sm">
                  Not registered?{' '}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer text-base"
                    onClick={() => document.getElementById('my_modal_3').close()}
                  >
                    Signup
                  </Link>{' '}
                </p>
              </div>
            </form>
          </div>
        </dialog>
        {/* Display the success modal if showSuccessModal is true */}
        {showSuccessModal && (
          <SuccessModal message="LogIn Successfully" />
        )}
      </div>
    </>
  );
};

export default Login;
