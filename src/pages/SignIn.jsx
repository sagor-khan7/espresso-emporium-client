import { NavLink } from "react-router-dom";
import bgImg from "../assets/more/11.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const { signInUser, googleSignin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className="flex items-center justify-center bg-[#f8f6f3] px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full max-w-2xl bg-white rounded-md shadow-lg p-6 md:p-8 mt-10 md:mt-20">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#331A15] mb-6">
          Create an Account
        </h2>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-xl font-medium text-[#5C5B5B] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-[#D2B48C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xl font-medium text-[#5C5B5B] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-[#D2B48C] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#331A15]"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#331A15] text-white py-2 rounded-lg hover:bg-[#5C5B5B] transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-[#D2B48C]" />
          <span className="px-2 text-[#5C5B5B] text-xl">or</span>
          <hr className="flex-grow border-[#D2B48C]" />
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignin}
          className="w-full flex items-center justify-center gap-2 border border-[#D2B48C] py-2 rounded-lg hover:bg-[#D2B48C]/20 transition duration-200"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Login Redirect */}
        <p className="text-center text-xl text-[#5C5B5B] mt-6">
          Don't have an account?{" "}
          <NavLink
            to="/signup"
            className="text-[#331A15] font-medium hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
