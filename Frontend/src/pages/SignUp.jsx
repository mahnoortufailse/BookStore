import { useFormik } from 'formik';
import { useState } from 'react';
import SuccessModal from '../components/SuccessModal'; // Ensure you have this component

const validate = (values) => {
  const errors = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  }

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

const SignUp = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Form Data:', values);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        formik.resetForm();
      }, 1000);
      // Optionally, you can close the modal here if it's needed
      document.getElementById('my_modal_3')?.close();
    },
  });

  return (
    <>
      <div className="py-1 dark:bg-slate-900">
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 dark:bg-slate-800">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 dark:bg-slate-900">

              <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
                <div>
                  <h1 className="text-2xl font-semibold">SignUp</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        name="name"
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 dark:bg-slate-900"
                        placeholder="User Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        User Name
                      </label>
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <div className="error text-red-500 text-xs font-poppins italic">
                        {formik.errors.name}
                      </div>
                    ) : null}

                    <div className="relative">
                      <input
                        autoComplete="off"
                        name="email"
                        type="text"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 dark:bg-slate-900"
                        placeholder="Email Address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error text-red-500 text-xs font-poppins italic">
                        {formik.errors.email}
                      </div>
                    ) : null}

                    <div className="relative">
                      <input
                        autoComplete="off"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 dark:bg-slate-900"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error text-red-500 text-xs font-poppins italic pt-">
                        {formik.errors.password}
                      </div>
                    ) : null}

                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-pink-500 text-white rounded-md px-2 py-1"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p className="mt-4 text-center text-sm text-gray-500">
                Have an account?
                <button
                  className="font-semibold leading-6 text-black-600 hover:text-black-500 text-lg px-2 dark:text-gray-500"
                  onClick={() => document.getElementById('my_modal_3')?.showModal()}
                >
                  LogIn
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <SuccessModal
          message="Signup successfully"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
};

export default SignUp;
