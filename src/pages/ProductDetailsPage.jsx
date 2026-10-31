import { useEffect, useState } from "react";
import { useParams } from "react-router";

/* ------------------------------------------------------------------ */
/*  Replace these with your real product images                        */
/* ------------------------------------------------------------------ */
const IMAGES = [
  "/images/denim-jacket-1.jpg",
  "/images/denim-jacket-2.jpg",
  "/images/denim-jacket-3.jpg",
  "/images/denim-jacket-4.jpg",
  "/images/denim-jacket-5.jpg",
  "/images/denim-jacket-6.jpg",
  "/images/denim-jacket-7.jpg",
];

const SIZES = ["M", "L", "XL", "XXL"];
const COLORS = [
  { name: "Blue", hex: "#8db4d9" },
  { name: "Black", hex: "#000000" },
  { name: "Pink", hex: "#ffc9dc" },
];

const pad = (n) => String(n).padStart(2, "0");

/* ------------------------------ Icons ------------------------------ */
const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#000" : "none"}
    stroke="#000"
    strokeWidth="1.5"
    strokeLinejoin="round"
  >
    <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="14" viewBox="0 0 24 16" fill="none">
    <path
      d="M1 8s4-7 11-7 11 7 11 7-4 7-11 7S1 8 1 8z"
      stroke="#000"
      strokeWidth="2"
    />
    <circle cx="12" cy="8" r="4.2" fill="#000" />
    <circle cx="13.3" cy="6.7" r="1.2" fill="#fff" />
  </svg>
);

const CompareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 20V4M3 8l4-4 4 4M17 4v16M13 16l4 4 4-4" />
  </svg>
);

const QuestionIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

const ShareIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 24 22"
    fill="none"
    stroke="#000"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 3h13v12H1zM14 7h5l4 4v4h-9" />
    <circle cx="6" cy="17.5" r="2" fill="#fff" />
    <circle cx="18" cy="17.5" r="2" fill="#fff" />
    <path d="M4 7h6M4 10h4" />
  </svg>
);

const BoxIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="8" width="18" height="13" rx="1" />
    <path d="M3 8l2-5h14l2 5M9 12h6" />
  </svg>
);

/* ---------------------------- Card badges ---------------------------- */
const Card = ({ bg, color = "#fff", border, children }) => (
  <div
    style={{
      width: 44,
      height: 24,
      borderRadius: 3,
      background: bg,
      color,
      border: border || "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "Arial, sans-serif",
      overflow: "hidden",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);

const PaymentIcons = () => (
  <div
    style={{
      display: "flex",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Card bg="#fff" color="#1a1f71" border="1px solid #e2e2e2">
      <i style={{ fontSize: 12 }}>VISA</i>
    </Card>
    <Card bg="#1a1a2e">
      <span style={{ display: "flex" }}>
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#eb001b",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#f79e1b",
            marginLeft: -5,
          }}
        />
      </span>
    </Card>
    <Card bg="#2e77bc">AMEX</Card>
    <Card bg="#fff" color="#0a5c36" border="1px solid #e2e2e2">
      JCB
    </Card>
    <Card bg="#fff" color="#555" border="1px solid #e2e2e2">
      <span style={{ fontSize: 7 }}>DISCOVER</span>
    </Card>
    <Card bg="#fff" color="#0079be" border="1px solid #e2e2e2">
      <span
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          border: "3px solid #0079be",
          boxSizing: "border-box",
        }}
      />
    </Card>
    <Card bg="#01798a">
      <span style={{ fontSize: 8 }}>UnionPay</span>
    </Card>
  </div>
);

/* ----------------------------- Component ----------------------------- */
export default function ProductDetailsPage() {
  const [activeImage, setActiveImage] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Blue");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  // countdown: DD : HH : MM : SS  (starts at 00 : 05 : 59 : 47)
  const [remaining, setRemaining] = useState(5 * 3600 + 59 * 60 + 47);

  // useEffect(() => {
  //   const t = setInterval(() => setRemaining((r) => (r > 0 ? r - 1 : 0)), 1000);
  //   return () => clearInterval(t);
  // }, []);

  const days = Math.floor(remaining / 86400);
  const hours = Math.floor((remaining % 86400) / 3600);
  const mins = Math.floor((remaining % 3600) / 60);
  const secs = remaining % 60;

  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(product);

  return (
    <>
      <style>{css}</style>

      <div className="pdp">
        {/* ------------------------- Gallery ------------------------- */}
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            {IMAGES.map((src, i) => (
              <button
                key={i}
                type="button"
                className={`pdp-thumb ${activeImage === i ? "active" : ""}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={src} alt={`Denim Jacket thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>

          <div className="pdp-main-image">
            <img src={product.thumbnail} alt="Denim Jacket" />
          </div>
        </div>

        {/* ------------------------- Details ------------------------- */}
        <div className="pdp-info">
          <div className="pdp-brand">FASCO</div>

          <div className="pdp-title-row">
            <h1 className="pdp-title">{product.title}</h1>
            <button
              type="button"
              className="pdp-wish"
              aria-label="Add to wishlist"
              onClick={() => setWishlisted((w) => !w)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={wishlisted ? "#000" : "none"}
                stroke="#000"
                strokeWidth="1.8"
                strokeLinejoin="round"
              >
                <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
              </svg>
            </button>
          </div>

          <div className="pdp-rating">
            {[1, 2, 3, 4].map((n) => (
              <StarIcon key={n} filled />
            ))}
            <StarIcon />
            <span className="pdp-rating-count">(3)</span>
          </div>

          <div className="pdp-price-row">
            <span className="pdp-price">$39.00</span>
            <span className="pdp-old-price">$59.00</span>
            <span className="pdp-save">SAVE 33%</span>
          </div>

          <div className="pdp-viewing">
            <EyeIcon />
            <span>24 people are viewing this right now</span>
          </div>

          <div className="pdp-sale">
            <span className="pdp-sale-label">Hurry up! Sale ends in:</span>
            <span className="pdp-timer">
              <span>{pad(days)}</span>
              <i>:</i>
              <span>{pad(hours)}</span>
              <i>:</i>
              <span>{pad(mins)}</span>
              <i>:</i>
              <span>{pad(secs)}</span>
            </span>
          </div>

          <div className="pdp-stock">
            Only <b>9</b> item(s) left in stock!
          </div>
          <div className="pdp-stock-bar">
            <div className="pdp-stock-fill" />
          </div>

          <div className="pdp-label">
            Size: <span>{size}</span>
          </div>
          <div className="pdp-sizes">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                className={`pdp-size ${size === s ? "active" : ""}`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="pdp-label" style={{ marginTop: 30 }}>
            Color: <span>{color}</span>
          </div>
          <div className="pdp-colors">
            {COLORS.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-label={c.name}
                className={`pdp-color ${color === c.name ? "active" : ""}`}
                onClick={() => setColor(c.name)}
              >
                <span style={{ background: c.hex }} />
              </button>
            ))}
          </div>

          <div className="pdp-label" style={{ marginTop: 30 }}>
            Quantity
          </div>
          <div className="pdp-cart-row">
            <div className="pdp-qty">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease"
              >
                −
              </button>
              <span>{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase"
              >
                +
              </button>
            </div>
            <button type="button" className="pdp-add">
              Add to cart
            </button>
          </div>

          <div className="pdp-actions">
            <button type="button">
              <CompareIcon /> Compare
            </button>
            <button type="button">
              <QuestionIcon /> Ask a question
            </button>
            <button type="button">
              <ShareIcon /> Share
            </button>
          </div>

          <div className="pdp-meta">
            <div>
              <TruckIcon />
              <p>
                <b>Estimated Delivery:</b> <span>Jul 30 - Aug 03</span>
              </p>
            </div>
            <div>
              <BoxIcon />
              <p>
                <b>Free Shipping &amp; Returns:</b> On all orders over $75
              </p>
            </div>
          </div>

          <div className="pdp-secure">
            <PaymentIcons />
            <p>Guarantee safe &amp; secure checkout</p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------ Styles ------------------------------ */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

.pdp, .pdp * { box-sizing: border-box; }
.pdp {
  --serif: 'Gelasio', 'Georgia', serif;
  --sans: 'Jost', 'Helvetica Neue', Arial, sans-serif;
  --red: #ff5b5b;
  display: flex;
  gap: 80px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 0 40px;
  background: #fff;
  color: #000;
  font-family: var(--sans);
  align-items: flex-start;
}
.pdp button { font-family: inherit; cursor: pointer; background: none; border: none; padding: 0; color: inherit; }

/* Gallery */
.pdp-gallery { display: flex; gap: 20px; flex: 0 0 auto; }
.pdp-thumbs { display: flex; flex-direction: column; gap: 20px; width: 64px; margin-left: 25px; margin-right: -4px; }
.pdp-thumb {
  width: 64px; height: 78px; border: 1px solid transparent; padding: 0 !important;
  background: #f4f4f4; overflow: hidden; display: block;
}
.pdp-thumb.active { border: 1px solid #000; padding: 4px !important; background: #fff; height: 90px; margin: -6px 0; }
.pdp-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pdp-main-image { width: 491px; height: 655px; background: #e6e6e6; overflow: hidden; }
.pdp-main-image img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* Info */
.pdp-info { width: 585px; flex: 0 0 585px; }
.pdp-brand { font-family: var(--serif); font-size: 14px; color: #555; line-height: 1; margin-top: 0; }
.pdp-title-row { display: flex; align-items: center; justify-content: space-between; margin-top: 8px; }
.pdp-title { font-family: var(--serif); font-weight: 500; font-size: 32px; line-height: 1.2; margin: 0; }
.pdp-wish {
  width: 46px; height: 46px; border-radius: 50%; border: 1px solid #eee !important;
  display: flex; align-items: center; justify-content: center; margin-top: -8px;
}
.pdp-rating { display: flex; align-items: center; gap: 1px; margin-top: 2px; }
.pdp-rating-count { margin-left: 8px; font-size: 15px; }

.pdp-price-row { display: flex; align-items: center; gap: 9px; margin-top: 24px; }
.pdp-price { font-family: var(--serif); font-size: 24px; font-weight: 500; }
.pdp-old-price { font-family: var(--serif); font-size: 16px; color: #777; text-decoration: line-through; }
.pdp-save {
  background: #dc3a3a; color: #fff; font-size: 11px; font-weight: 500; letter-spacing: .02em;
  padding: 3px 10px; border-radius: 13px; line-height: 17px;
}

.pdp-viewing { display: flex; align-items: center; gap: 10px; margin-top: 38px; color: #777; font-size: 18px; font-weight: 300; }
.pdp-viewing svg { flex: none; }

.pdp-sale {
  margin-top: 28px; height: 54px; background: #fdeaea; border: 1px solid #fadcdc; border-radius: 2px;
  display: flex; align-items: center; justify-content: space-between; padding: 0 33px 0 14px;
  color: var(--red);
}
.pdp-sale-label { font-family: var(--serif); font-size: 18px; }
.pdp-timer { display: flex; align-items: center; font-size: 20px; font-weight: 500; letter-spacing: .02em; }
.pdp-timer i { font-style: normal; margin: 0 16px; font-weight: 300; font-size: 16px; }

.pdp-stock { margin-top: 33px; font-size: 16px; color: #555; font-weight: 300; }
.pdp-stock b { font-weight: 600; color: #333; }
.pdp-stock-bar { margin-top: 15px; height: 5px; background: #ddd; border-radius: 3px; overflow: hidden; }
.pdp-stock-fill { width: 5%; height: 100%; background: #ed3b3b; border-radius: 3px; }

.pdp-label { font-family: var(--serif); font-weight: 600; font-size: 17px; margin-top: 36px; }
.pdp-label span { font-weight: 400; }

.pdp-sizes { display: flex; gap: 10px; margin-top: 15px; }
.pdp-size {
  width: 45px; height: 45px; border: 1px solid #eee !important; border-radius: 3px; font-size: 17px; background: #fff;
  display: flex; align-items: center; justify-content: center; font-weight: 400;
}
.pdp-size.active { background: #000; color: #fff; border-color: #000 !important; }

.pdp-colors { display: flex; gap: 9px; margin-top: 18px; }
.pdp-color {
  width: 41px; height: 41px; border-radius: 50%; border: 1px solid transparent !important;
  display: flex; align-items: center; justify-content: center;
}
.pdp-color span { width: 35px; height: 35px; border-radius: 50%; display: block; }
.pdp-color.active { border-color: #000 !important; }
.pdp-color.active span { width: 33px; height: 33px; }

.pdp-cart-row { display: flex; gap: 30px; margin-top: 15px; align-items: center; }
.pdp-qty {
  width: 128px; height: 45px; border: 1px solid #eee; border-radius: 3px;
  display: flex; align-items: center; justify-content: space-between; padding: 0 14px; font-size: 16px;
}
.pdp-qty button { font-size: 18px; width: 20px; }
.pdp-add {
  flex: 1; height: 45px; border: 1px solid #000 !important; border-radius: 3px;
  font-family: var(--serif); font-size: 17px; background: #fff;
  margin-right: -15px;
}
.pdp-add:hover { background: #000; color: #fff; }

.pdp-actions { display: flex; gap: 40px; margin-top: 70px; padding-bottom: 24px; border-bottom: 1px solid #eee; }
.pdp-actions button { display: flex; align-items: center; gap: 8px; font-size: 16px; }

.pdp-meta { margin-top: 28px; display: flex; flex-direction: column; gap: 8px; }
.pdp-meta > div { display: flex; align-items: center; gap: 8px; }
.pdp-meta p { margin: 0; font-size: 16px; }
.pdp-meta b { font-family: var(--serif); font-weight: 700; font-size: 17px; }
.pdp-meta > div:first-child span { font-weight: 400; }
.pdp-meta > div:last-child p { font-family: var(--serif); font-size: 17px; }

.pdp-secure { margin-top: 28px; background: #f7f7f7; border-radius: 4px; padding: 20px 0 20px; text-align: center; }
.pdp-secure p { font-family: var(--serif); font-size: 18px; margin: 20px 0 0; }

@media (max-width: 1100px) {
  .pdp { flex-direction: column; gap: 32px; padding: 0 16px 32px; }
  .pdp-gallery { flex-direction: column-reverse; }
  .pdp-thumbs { flex-direction: row; margin: 0; overflow-x: auto; }
  .pdp-main-image { width: 100%; height: auto; aspect-ratio: 491 / 655; }
  .pdp-info { width: 100%; flex: 1 1 auto; }
  .pdp-add { margin-right: 0; }
}
`;
