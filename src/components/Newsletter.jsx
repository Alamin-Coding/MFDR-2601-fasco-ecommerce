import { useState } from "react";
import LEFT_IMAGE from "../assets/Newsletter1.png";
import RIGHT_IMAGE from "../assets/Newsletter2.png";

// Replace these with your own images (e.g. import leftImg from "./assets/left.png")
// const LEFT_IMAGE = "/images/model-left.png";
// const RIGHT_IMAGE = "/images/model-right.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: hook up your subscribe logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className=" w-full overflow-hidden bg-white">
      <div className="container">
        <div className="mx-auto flex items-center justify-center px-4 py-16 relative">
          {/* Left image */}
          <img
            src={LEFT_IMAGE}
            alt="Model wearing a mustard coat"
            className="pointer-events-none absolute bottom-0 left-0 hidden h-[95%] max-h-[750px] w-auto select-none object-contain lg:block"
          />

          {/* Right image */}
          <img
            src={RIGHT_IMAGE}
            alt="Model wearing a grey blazer"
            className="pointer-events-none absolute bottom-0 right-0 hidden h-[95%] max-h-[750px] w-auto select-none object-contain lg:block"
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-[650px] mx-auto text-center">
            <h2 className="font-serif text-4xl font-semibold font-volkhov text-neutral-700 md:text-[46px]">
              Subscribe To Our Newsletter
            </h2>

            <p className="mx-auto mt-6 max-w-[580px] text-sm leading-relaxed text-neutral-500 md:text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>

            <form onSubmit={handleSubmit} className="mt-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="michael@ymail.com"
                required
                className="w-full bg-white px-8 py-6 text-lg text-neutral-700 shadow-[0_8px_30px_rgba(0,0,0,0.06)] outline-none placeholder:text-neutral-400 focus:ring-1 focus:ring-neutral-300"
              />

              <button
                type="submit"
                className="mt-8 rounded-lg bg-black px-11 py-4 text-sm text-white shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition hover:bg-neutral-800 active:scale-95"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
