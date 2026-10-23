import { useCallback, useEffect, useRef, useState } from "react";


const testimonials = [
  {
    name: "Suzan B.",
    role: "UI Designer",
    image: "/images/testimonials/ou-customer1.png",
    quote:
      "\u201CItems That I ordered were the best investment I ever made. I can't say enough about your quality service.\"",
  },
  {
    name: "James K.",
    role: "Traveler",
    image: "/images/testimonials/ou-customer2.png",
    quote:
      "\"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!\"",
  },
  {
    name: "James K.",
    role: "Traveler",
    image: "/images/testimonials/ou-customer2.png",
    quote:
      "\"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!\"",
  },
];

const CARD_W = 864;
const CARD_H = 400;
const STAGE_W = 1440; 
const SIDE_SCALE = 646 / 864; 
const SWIPE_DISTANCE = 50;

const Stars = () => (
  <div className="flex" aria-label="5 out of 5 stars" role="img">
    {Array.from({ length: 5 }).map((_, i) => (
      <img key={i} src="/images/starIcon.svg" alt="" className="size-[19px]" />
    ))}
  </div>
);

const Chevron = ({ flip }) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    className={flip ? "rotate-180" : ""}
    aria-hidden="true"
  >
    <path d="M1 1l6 6-6 6" stroke="#484848" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowButton = ({ dir, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
    className="grid size-12 cursor-pointer place-items-center rounded-full bg-white shadow-[0_8px_20px_rgba(46,33,61,0.12)] transition-transform hover:scale-105 active:scale-95"
  >
    <Chevron flip={dir === "prev"} />
  </button>
);


const DesktopCard = ({ t }) => (
  <div className="relative size-full rounded-[10px] bg-white">
    <div className="absolute left-[49px] top-[89px] size-[242px] bg-[#d9d9d9]" />
    <img
      src={t.image}
      alt={t.name}
      draggable={false}
      className="absolute left-[70px] top-[69px] size-[242px] object-cover"
    />
    <div className="absolute left-[395px] top-[69px] w-[419px] text-left">
      <p className="font-poppins text-[16px] leading-[normal] text-heading">{t.quote}</p>
    </div>
    <div className="absolute left-[395px] top-[168px]">
      <Stars />
    </div>
    <div className="absolute left-[395px] top-[217px] h-px w-[230px] bg-heading" />
    <p className="absolute left-[395px] top-[233px] whitespace-nowrap font-volkhov text-[32px] leading-[normal] text-heading">
      {t.name}
    </p>
    <p className="absolute left-[395px] top-[287px] whitespace-nowrap font-poppins text-[16px] leading-[normal] text-heading">
      {t.role}
    </p>
  </div>
);


const MobileCard = ({ t }) => (
  <div className="mx-auto flex max-w-[420px] flex-col items-center rounded-[10px] bg-white px-6 py-10 text-center shadow-[0_20px_60px_rgba(46,33,61,0.08)]">
    <div className="relative size-[180px]">
      <div className="absolute left-[-16px] top-[16px] size-full bg-[#d9d9d9]" />
      <img src={t.image} alt={t.name} draggable={false} className="relative size-full object-cover" />
    </div>
    <p className="mt-10 font-poppins text-[14px] leading-[22px] text-heading">{t.quote}</p>
    <div className="mt-4">
      <Stars />
    </div>
    <div className="mt-4 h-px w-[120px] bg-heading" />
    <p className="mt-3 font-volkhov text-[24px] text-heading">{t.name}</p>
    <p className="mt-1 font-poppins text-[14px] text-heading">{t.role}</p>
  </div>
);

const Testimonials = () => {
  const total = testimonials.length;
  const [index, setIndex] = useState(1); 
  const [scale, setScale] = useState(1);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true,
  );
  const wrapRef = useRef(null);
  const startX = useRef(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);


  useEffect(() => {
    const update = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (wrapRef.current) {
        setScale(Math.min(1, wrapRef.current.clientWidth / STAGE_W));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isDesktop]);

  // Swipe 
  const onPointerDown = (e) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (dx <= -SWIPE_DISTANCE) next();
    else if (dx >= SWIPE_DISTANCE) prev();
  };
  const onPointerCancel = () => {
    startX.current = null;
  };

  // Keyboard
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const slotOf = (i) => {
    let d = (i - index + total) % total;
    if (d > total / 2) d -= total;
    return d; // -1, 0, 1 are visible
  };

  const slotStyle = (slot) => {
    if (slot === 0)
      return { transform: "translate(288px, 0) scale(1)", zIndex: 20, opacity: 1 };
    if (slot === -1)
      return { transform: `translate(0px, 54px) scale(${SIDE_SCALE})`, zIndex: 10, opacity: 1 };
    if (slot === 1)
      return { transform: `translate(792px, 54px) scale(${SIDE_SCALE})`, zIndex: 10, opacity: 1 };
    return { transform: "translate(288px, 0) scale(0.7)", zIndex: 0, opacity: 0 };
  };

  return (
    <section
      className="bg-[#fafafa] pb-[58px] pt-[60px] outline-none lg:pt-[100px]"
      tabIndex={0}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div className="container text-center">
        <h2 className="font-volkhov text-[28px] leading-[normal] text-heading md:text-[46px] lg:h-[79px]">
          This Is What Our Customers Say
        </h2>
        <p className="mx-auto mt-[18px] max-w-[614px] font-poppins text-base leading-[26px] text-paragraph lg:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>

      <div
        ref={wrapRef}
        className="mx-auto mt-10 w-full max-w-[1440px] select-none px-4 lg:mt-[70px] lg:px-0 [touch-action:pan-y]"
        style={isDesktop ? { height: CARD_H * scale } : undefined}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onPointerLeave={onPointerCancel}
      >
        {isDesktop ? (
          <div
            className="relative origin-top-left"
            style={{
              width: STAGE_W,
              height: CARD_H,
              transform: `scale(${scale})`,
            }}
          >
            {testimonials.map((t, i) => {
              const slot = slotOf(i);
              const isSide = slot === -1 || slot === 1;
              const visible = slot >= -1 && slot <= 1;
              return (
                <div
                  key={t.name}
                  onClick={isSide ? (slot === -1 ? prev : next) : undefined}
                  aria-hidden={slot !== 0}
                  className={`absolute left-0 top-0 origin-top-left rounded-[10px] shadow-[0_20px_60px_rgba(46,33,61,0.08)] transition-[transform,opacity] duration-500 ease-out ${
                    isSide ? "cursor-pointer" : ""
                  } ${visible ? "" : "pointer-events-none"}`}
                  style={{ width: CARD_W, height: CARD_H, ...slotStyle(slot) }}
                >
                  <DesktopCard t={t} />
                </div>
              );
            })}
          </div>
        ) : (
          <MobileCard t={testimonials[index]} key={testimonials[index].name} />
        )}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 lg:mt-[59px]">
        <ArrowButton dir="prev" onClick={prev} />
        <ArrowButton dir="next" onClick={next} />
      </div>
    </section>
  );
};

const images = [
  { src: "/images/instagram/insta-1.png", alt: "Man in a beige trench coat", size: "wide" },
  { src: "/images/instagram/insta-2.png", alt: "Woman in a light blue knit sweater", size: "tall" },
  { src: "/images/instagram/insta-3.png", alt: "Woman in a pastel top and denim shorts", size: "short" },
  { src: "/images/instagram/insta-4.png", alt: "Man in a checked shirt and red trousers", size: "tall" },
  { src: "/images/instagram/insta-5.png", alt: "Woman in a blue bandage dress", size: "short" },
  { src: "/images/instagram/insta-6.png", alt: "Man in a grey blazer and sunglasses", size: "tall" },
  { src: "/images/instagram/insta-7.png", alt: "Woman in a blush ruffled dress", size: "wide" },
];


const sizeClasses = {
  wide: "w-[320px] aspect-[320/308] xl:w-[16.6667%]",
  tall: "w-[256px] aspect-[256/380] xl:w-[13.3333%]",
  short: "w-[256px] aspect-[256/308] xl:w-[13.3333%]",
};

const Instagram = () => {
  return (
    <section className="py-[60px] md:py-[100px]">
      <div className="container text-center">
        <h2 className="font-volkhov text-[28px] text-heading md:text-[46px]">
          Follow Us On Instagram
        </h2>
        <p className="mx-auto mt-[18px] max-w-[614px] font-poppins text-base leading-[26px] text-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>

      <div className="mt-[60px] flex snap-x snap-mandatory items-center overflow-x-auto [scrollbar-width:none] md:mt-[100px] xl:overflow-hidden [&::-webkit-scrollbar]:hidden">
        {images.map((image) => (
          <div
            key={image.src}
            className={`shrink-0 snap-start ${sizeClasses[image.size]}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const FollowUp = () => {
  return (
    <>
      <Instagram />
      <Testimonials />
    </>
  );
};

export default FollowUp;
