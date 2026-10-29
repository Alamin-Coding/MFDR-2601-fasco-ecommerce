import modelImage2 from "../assets/login.png";
import mail from "../assets/mail.png";
import google from "../assets/google.png";


export default function App() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Image */}
      <div className="hidden md:block w-1/2 overflow-hidden">
        <img
          src={modelImage2}
          alt="Model"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[380px]">
          <h1 className="font-volkhov text-[32px] text-gray-900 mb-10 tracking-wide">
            FASCO
          </h1>

          <h2 className="text-[22px] font-medium text-gray-900 mb-8">
            Sign In To FASCO
          </h2>

          {/* Social buttons */}
          <div className="flex gap-3 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              <img
                src={google}
                alt=""
                className="w-4 h-4"
              />
              Sign up with Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              <img
                src={mail}
                alt=""
                className="w-4 h-4"
              />
              Sign up with Email
            </button>
          </div>

          {/* OR */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">— OR —</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Inputs */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-0 border-b border-gray-200 pb-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Password</label>
              <input
                type="password"
                className="w-full border-0 border-b border-gray-200 pb-2 text-sm focus:outline-none focus:border-gray-400 bg-transparent"
              />
            </div>
          </div>

          {/* Sign In button */}
          <button className="w-full bg-black text-white py-3 rounded-md text-sm font-medium mb-3 hover:bg-gray-900">
            Sign In
          </button>

          {/* Register Now */}
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md text-sm mb-4 hover:bg-gray-50">
            Register Now
          </button>

          <div className="text-right mb-12">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forget Password?
            </a>
          </div>

          <p className="text-right text-xs text-gray-400">
            FASCO Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}