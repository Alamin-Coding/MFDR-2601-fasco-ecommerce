import modelImage2 from "../assets/login.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12 flex items-center justify-center font-sans">
      <div className="relative flex w-full max-w-6xl bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px]">
        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center overflow-hidden">
          <img
            src={modelImage2}
            alt="Model"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 relative">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-900 mb-8 font-volkhov text-3xl font-semibold ">
              FASCO
            </h1>

            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Forget Password
            </h2>

            <div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-7">
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-0 border-b border-gray-200 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-0 border-b border-gray-200 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border-0 border-b border-gray-200 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border-0 border-b border-gray-200 py-2 text-sm text-gray-900 focus:outline-none focus:border-gray-400 bg-transparent"
                />
              </div>
            </div>

            <button className="w-full bg-black text-white py-3.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition mb-5">
              Send Confirmation Code
            </button>

            <p className="text-center text-sm text-gray-500 mb-10">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}