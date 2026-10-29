import modelImage2 from "../assets/login.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="relative flex w-full max-w-6xl h-[400px] bg-white rounded-xl border border-gray-100 overflow-hidden">

        {/* Left Image */}
        <div className="hidden md:block w-1/2 h-full">
          <img
            src={modelImage2}
            alt="Fashion model"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col w-full md:w-1/2 px-8 md:px-10 lg:px-12">

          {/* Logo */}
          <h1 className="text-2xl font-volkhov text-[#444444] mt-7">
            FASCO
          </h1>

          {/* Password Form */}
          <div className="w-full max-w-sm mx-auto my-auto pb-4">

            <h2 className="text-sm font-volkhov text-black mb-5">
              Enter Your New Password.
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Add password reset logic here
              }}
              className="space-y-2"
            >
              <input
                type="password"
                placeholder="New Password"
                required
                className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-[9px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="w-full border-0 border-b border-gray-200 bg-transparent py-2 text-[9px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
              />

              <button
                type="submit"
                className="w-[92%] mx-auto block mt-3 bg-[#6085e8] text-white py-2 rounded-sm text-[8px] font-medium hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>

          </div>

          {/* Footer */}
          <p className="text-right text-[7px] text-gray-600 mb-3">
            FASCO Terms &amp; Conditions
          </p>

        </div>
      </div>
    </div>
  );
}