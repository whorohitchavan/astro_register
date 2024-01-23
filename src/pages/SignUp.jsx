import React, { useState } from "react";
import { supabase } from "./client";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      const { data, error: insertError } = await supabase
        .from('users')
        .upsert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          },
        ], { onConflict: ['email'] }); 

      if (insertError) {
        throw insertError;
      }

      setResponseMessage("Check your email for a verification link");
    } catch (error) {
      setResponseMessage(error.message);
    }
  };

  return (
    <div className="flex min-h-full">
      {/* Left Column */}
      <div className="flex-1 px-6 py-7 lg:px-8">
        <div className="flex items-center justify-between">
          <img
            className="ml-15 h-8 w-auto"
            src="https://magicai.liquid-themes.com/assets/img/logo/magicAI-logo.svg"
            alt="Your Company"
          />
          <p className="mr-6 text-right absolute right-0 text-white">
            <a href="#"> &lt; Back to home</a>
          </p>
        </div>

        <div className="sm:w-full sm:max-w-sm relative top-20 left-60">
  <h2 className="mt-0 ml-0 text-4xl font-bold tracking-tight text-gray-900 text-left">
    Sign up
  </h2>
</div>
        <br></br>

        <div className="mt-20 flex justify-center">
          <button className="flex items-center border border-gray-200 text-gray-900 text-sm px-7 py-2 rounded-lg transition-transform transform hover:scale-105 focus:outline-none mr-2">
            <svg
              className="shrink-0 me-2"
              width="22"
              height="22"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Google SVG Path */}
              <path d="M23.001 12.2332C23.001 11.3699 22.9296 10.7399 22.7748 10.0865H12.7153V13.9832H18.62C18.501 14.9515 17.8582 16.4099 16.4296 17.3898L16.4096 17.5203L19.5902 19.935L19.8106 19.9565C21.8343 18.1249 23.001 15.4298 23.001 12.2332Z" fill="#4285F4" />
      <path d="M12.714 22.5C15.6068 22.5 18.0353 21.5666 19.8092 19.9567L16.4282 17.3899C15.5235 18.0083 14.3092 18.4399 12.714 18.4399C9.88069 18.4399 7.47596 16.6083 6.61874 14.0766L6.49309 14.0871L3.18583 16.5954L3.14258 16.7132C2.41814 8.71002 2.00146 10.3084 2.00146 12C2.00146 13.6917 2.41814 15.29 3.14429 16.7133L6.62046 14.0767Z" fill="#FBBC05" />
      <path d="M6.62046 14.0767C6.39428 13.4234 6.26337 12.7233 6.26337 12C6.26337 11.2767 6.39428 10.5767 6.60856 9.92337L6.60257 9.78423L3.25386 7.2356L3.14429 7.28667C2.41814 8.71002 2.00146 10.3084 2.00146 12C2.00146 13.6917 2.41814 15.29 3.14429 16.7133L6.62046 14.0767Z" fill="#FBBC05" />
      <path d="M12.7141 5.55997C14.7259 5.55997 16.083 6.41163 16.8569 7.12335L19.8807 4.23C18.0236 2.53834 15.6069 1.5 12.7141 1.5C8.52353 1.5 4.90447 3.85665 3.14258 7.28662L6.60686 9.92332C7.47598 7.39166 9.88073 5.55997 12.7141 5.55997Z" fill="#EB4335" />
            </svg>
            Login with Google
          </button>

          <button className="flex items-center border border-gray-200 text-gray-900 text-sm px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:outline-none">
            <svg
              className="shrink-0 me-2"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Facebook SVG Path */}
              <path d="M24 12C24 5.3726 18.6274 2.65179e-05 12 2.65179e-05C5.37258 2.65179e-05 0 5.3726 0 12C0 17.9896 4.38823 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35628C10.125 6.34878 11.9165 4.68753 14.6576 4.68753C15.9705 4.68753 17.3438 4.9219 17.3438 4.9219V7.87503H15.8306C14.3399 7.87503 13.875 8.80003 13.875 9.74902V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9896 24 12Z" fill="#1877F2" />
             <path d="M16.6711 15.4687L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92187C17.3438 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4687H16.6711Z" fill="white" />
            </svg>
            Login with Facebook
          </button>
        </div>

        <br />

        <div className="flex items-center justify-center mt-1">
  <div className="w-1/5 h-0.5 bg-gray-100"></div>
  <p className="mx-4 text-center text-gray-600">or</p>
  <div className="w-1/5 h-0.5 bg-gray-100 py-0"></div>
</div>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignup} className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                 Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Your Name"
                  required
                  className="block w-full px-4 rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="your last name"
                  required
                  className="block w-full px-4 rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  required
                  className="block w-full px-4 rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-500"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="    Password confirmation"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-3xl bg-purple-950 px-3 py-2  font-bold leading-9 text-white  shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
              Have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2"
              >
                Sign in
              </a>
            </div>
          </form>

          <p>{responseMessage}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 relative">
  <div className="flex justify-end items-center h-full">
    {/* Image container */}
    <img
      className="w-full h-full object-cover"
      src="https://magicai.liquid-themes.com/images/bg/bg-auth.jpg"
      alt="Background Auth"
      style={{ position: "absolute", zIndex: "-1" }}
    />
    <div
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <img
        className="w-full h-auto"
        src="https://magicai.liquid-themes.com/images/bg/dash-mockup.jpg"
        alt="Dashboard Mockup"
        style={{
          marginRight: "-25%",
          marginLeft: "auto",
          width: "150%",
          height: "150%",
          borderRadius: "6%",
        }}
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default SignUp;
