import modelImage2 from "../assets/login.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center font-sans border border-gray-100">
      <div className="flex w-full max-w-6xl min-h-[400px] md:h-[400px] bg-white rounded-xl border border-gray-200 overflow-hidden">

        {/* Left Image */}
        <div className="hidden md:block w-1/2 h-full overflow-hidden">
          <img
            src={modelImage2}
            alt="Fashion model"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 relative flex flex-col px-8 md:px-12 lg:px-16">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-volkhov text-[#444444] mt-8 md:mt-7">
            FASCO
          </h1>

          {/* Recovery Form */}
          <div className="w-full max-w-sm mx-auto my-auto pb-8">

            <h2 className="text-sm md:text-base font-volkhov text-black mb-6">
              Enter The Confirmation Code
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Add confirmation code verification here
              }}
            >
              <input
                type="text"
                placeholder="Confirmation Code"
                required
                className="w-full border-0 border-b border-gray-300 bg-transparent py-2 text-[9px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-black transition"
              />

              <button
                type="submit"
                className="w-[92%] mx-auto block mt-2.5 bg-black text-white py-2 rounded-md text-[8px] font-semibold shadow-lg hover:bg-gray-800 transition"
              >
                Recover Account
              </button>
            </form>

            <p className="text-center text-[8px] text-gray-600 mt-3">
              Didn't receive Confirmation Code?{" "}
              <button
                type="button"
                className="text-blue-500 font-semibold hover:underline"
              >
                Resend Now
              </button>
            </p>
          </div>

          {/* Footer */}
          <p className="text-right text-[7px] text-black mb-3">
            FASCO Terms &amp; Conditions
          </p>

        </div>
      </div>
    </div>
  );
}