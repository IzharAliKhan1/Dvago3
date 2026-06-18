"use client";

import Link from "next/link";

const hoverIn  = (e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)");
const hoverOut = (e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)");
const linkHoverIn  = (e) => (e.currentTarget.style.color = "#ffffff");
const linkHoverOut = (e) => (e.currentTarget.style.color = "#f2c4cf");

const categories = [
  "Medicine",
  "A to Z Medicine",
  "Baby & Mother Care",
  "Nutrition & Supplements",
  "Food & Beverage",
  "Devices & Appliances",
  "Personal Care",
  "OTC And Health Need",
];

const navigate = [
  "Feedback",
  "Instant Order",
  "Deals",
  "Stores",
  "Brands",
  "Blogs",
];

const support = [
  "FAQs",
  "Terms Of Service",
  "Shipping Policy",
  "Return Policy",
  "Refund Policy",
  "Privacy Policy",
  "Careers",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

export default function DvagoFooter() {
  return (
    <footer className="w-full font-sans">
      {/* Main footer */}
      <div
        style={{ backgroundColor: "#b85070" }}
        className="text-white px-6 py-12 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <div>
              <span
                className="text-white font-extrabold tracking-tight leading-none"
                style={{ fontSize: "2.6rem", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
              >
                D<span style={{ color: "#f9d4de" }}>V</span>AGO
              </span>
              <p className="text-sm font-semibold mt-0.5 tracking-wide" style={{ color: "#f9d4de" }}>
                Pharmacy &amp; Wellness Experts
              </p>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "#f2c4cf" }}>
              Pakistan's most trusted pharmacy chain delivering nationwide
            </p>

            {/* Social */}
            <div>
              <p className="text-base font-semibold mb-3">Follow us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="rounded-full p-2 transition-colors duration-200"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide">Categories</h3>
            <ul className="space-y-2.5">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#f2c4cf" }}
                    onMouseEnter={linkHoverIn}
                    onMouseLeave={linkHoverOut}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide">Navigate</h3>
            <ul className="space-y-2.5">
              {navigate.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#f2c4cf" }}
                    onMouseEnter={linkHoverIn}
                    onMouseLeave={linkHoverOut}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide">Support</h3>
            <ul className="space-y-2.5">
              {support.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#f2c4cf" }}
                    onMouseEnter={linkHoverIn}
                    onMouseLeave={linkHoverOut}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-bold mb-4 tracking-wide">Contact Us</h3>
            <address className="not-italic text-sm leading-relaxed space-y-4" style={{ color: "#f2c4cf" }}>
              <p>
                1st Floor, Plot No. 1 Shaheed-e-Millat Road, Modern Society MCHS,
                Karachi, Sindh 75100, Pakistan
              </p>
              <p>
                <span className="font-semibold text-white">Phone: </span>
                <Link
                  href="tel:02111138246"
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-white"
                  style={{ color: "#f2c4cf" }}
                >
                  (021) 11 11 DVAGO (38246)
                </Link>
              </p>
              <p>
                <span className="font-semibold text-white">Email: </span>
                <Link
                  href="mailto:feedback@dvago.pk"
                  className="underline underline-offset-2 transition-colors duration-150 hover:text-white"
                  style={{ color: "#f2c4cf" }}
                >
                  feedback@dvago.pk
                </Link>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Disclaimer bar */}
      <div className="bg-white border-t border-gray-200 px-6 py-5 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs leading-relaxed text-gray-700">
            <span className="font-bold text-gray-900">Disclaimer</span>{" "}
            Our official website is{" "}
            <Link href="https://www.dvago.pk" className="text-pink-700 hover:underline">
              www.dvago.pk
            </Link>{" "}
            and our official mobile app is Dvago – Pharmacy &amp; Health by Novacare (Pvt) Ltd.
            We are not liable for orders placed through unauthorized platforms. Stay vigilant
            against scams. Report any fraudulent websites, apps, or numbers falsely claiming
            association with Dvago to (021) 11-11-38246 immediately. Thank you.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            &copy; 2026 Dvago – A Brand by Nova Care (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}