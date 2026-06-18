// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import { useCart } from "../../CartContext";

// const menuItems = [
//   { label: "Home", href: "/" },
//   {
//     label: "Medicine",
//     href: "/medicine",
//     children: [
//       "Derma", "Gastro-Intestinal Tract", "Circulatory System", "Others",
//       "Endocrine System", "Eyes, Nose, Ear", "Urinary Tract System",
//       "Central Nervous System", "Respiratory Tract System",
//       "Cardio-Vascular System", "Oral Care",
//     ],
//   },
//   {
//     label: "Baby & Mother Care",
//     href: "/babymothercare",
//     children: [
//       "Baby Diapers & Wipes", "Baby Bath & Body", "New Mommy Aids",
//       "Baby Food & Milk", "Baby Appliances", "Baby Essentials",
//     ],
//   },
//   {
//     label: "Nutritions & Supplements",
//     href: "/nutritions",
//     children: ["Multivitamins", "Nutritional Drinks"],
//   },
//   {
//     label: "Foods & Beverages",
//     href: "/foods",
//     children: [
//       "Honey & Oils", "Beverages", "Chocolate & Confectionery",
//       "Biscuits & Wafers", "Package Food", "Tea & Coffee",
//       "Snacks", "Breakfast & Cereals",
//     ],
//   },
//   {
//     label: "Devices & Support",
//     href: "/devices",
//     children: [
//       "Cells & Batteries", "Other Appliances", "BP Monitors",
//       "Diabetes Apparatus", "Supports & Braces", "Mobility Equipments",
//       "Medicine Accessories", "Thermometer",
//       "Steamers, Nebulizers & Vaporizers", "Body Massagers", "Weighing Scales",
//     ],
//   },
//   {
//     label: "Personal Care",
//     href: "/personalcare",
//     children: [
//       "Men Grooming", "Skin Care", "Hair Care", "Sexual Wellness",
//       "Corona Essentials", "Adult Diapers & Wipes", "Feminine Care",
//       "Makeup", "Hand & Foot Care", "Appliances",
//       "Personal Grooming", "Body Care", "Dental Care",
//     ],
//   },
//   {
//     label: "OTC & Health Need",
//     href: "/otc",
//     children: [
//       "First Aid", "Acidity & Indigestion", "Pain & Fever",
//       "Cough & Cold", "Diarrhea & Vomiting",
//     ],
//   },
//   { label: "Login", href: "/auth/login" },
//   // { label: "Register", href: "/auth/register" },
// ];

// /* ── Icons ── */
// const ChevronDown = ({ className = "" }) => (
//   <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
//     <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const ChevronRight = () => (
//   <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//     <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const HamburgerIcon = ({ open }) =>
//   open ? (
//     <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//       <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   ) : (
//     <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//       <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );

// const CartIcon = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="9" cy="21" r="1" />
//     <circle cx="20" cy="21" r="1" />
//     <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
//   </svg>
// );

// /* ── Desktop dropdown item ── */
// function DesktopItem({ item }) {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);
//   const timer = useRef(null);

//   const show = () => { clearTimeout(timer.current); setOpen(true); };
//   const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };

//   if (!item.children) {
//     return (
//       <li>
//         <Link href={item.href} className="nav-link">{item.label}</Link>
//       </li>
//     );
//   }

//   return (
//     <li ref={ref} onMouseEnter={show} onMouseLeave={hide} className="relative">
//       <Link href={item.href} className="nav-link flex items-center gap-1">
//         {item.label}
//         <ChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
//       </Link>
//       {open && (
//         <ul className="dropdown-menu">
//           {item.children.map((child) => (
//             <li key={child}>
//               <Link href="#" className="dropdown-item">
//                 <ChevronRight />
//                 {child}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// /* ── Mobile accordion item ── */
// function MobileItem({ item, onClose }) {
//   const [open, setOpen] = useState(false);

//   if (!item.children) {
//     return (
//       <li>
//         <Link href={item.href} className="mobile-link" onClick={onClose}>
//           {item.label}
//         </Link>
//       </li>
//     );
//   }

//   return (
//     <li>
//       <button
//         className="mobile-link w-full flex justify-between items-center"
//         onClick={() => setOpen((v) => !v)}
//       >
//         {item.label}
//         <ChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
//       </button>
//       <div
//         className="mobile-submenu-wrapper"
//         style={{ maxHeight: open ? `${item.children.length * 44}px` : "0px" }}
//       >
//         <ul className="mobile-submenu">
//           {item.children.map((child) => (
//             <li key={child}>
//               <Link href="#" className="mobile-sub-link" onClick={onClose}>
//                 {child}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </li>
//   );
// }

// /* ── Main Navbar ── */
// const Navbars = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mounted, setMounted] = useState(false); // ✅ Hydration fix
//   const { cartItems, setCartOpen } = useCart();

//   // ✅ Sirf client pe mount hone ke baad true hoga
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

//   // ✅ Badge sirf client pe render hogi — hydration mismatch nahi hoga
//   const CartBadge = () =>
//     mounted && totalItems > 0 ? (
//       <span key={totalItems} className="cart-badge">{totalItems}</span>
//     ) : null;

//   /* close on outside click */
//   useEffect(() => {
//     if (!mobileOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("#mobile-menu") && !e.target.closest("#hamburger-btn")) {
//         setMobileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [mobileOpen]);

//   /* lock body scroll when mobile menu open */
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [mobileOpen]);

//   return (
//     <>
//       <style>{`
//         :root {
//           --green: #16a34a;
//           --green-light: #22c55e;
//           --green-bg: #f0fdf4;
//           --text: #1a1a2e;
//           --muted: #6b7280;
//           --border: #e5e7eb;
//           --white: #ffffff;
//           --shadow: 0 8px 32px rgba(0,0,0,0.10);
//         }

//         .nav-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 4px;
//           padding: 6px 10px;
//           border-radius: 8px;
//           font-size: 0.78rem;
//           font-weight: 600;
//           color: var(--text);
//           white-space: nowrap;
//           letter-spacing: 0.01em;
//           transition: color 0.18s, background 0.18s;
//         }
//         .nav-link:hover { color: var(--green); background: var(--green-bg); }

//         .dropdown-menu {
//           position: absolute;
//           top: calc(100% + 8px);
//           left: 0;
//           background: var(--white);
//           border: 1px solid var(--border);
//           border-radius: 12px;
//           box-shadow: var(--shadow);
//           min-width: 220px;
//           z-index: 100;
//           padding: 6px;
//           animation: fadeSlideIn 0.18s ease;
//         }
//         @keyframes fadeSlideIn {
//           from { opacity: 0; transform: translateY(-6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         .dropdown-item {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 9px 12px;
//           border-radius: 8px;
//           font-size: 0.8rem;
//           font-weight: 500;
//           color: var(--text);
//           transition: background 0.15s, color 0.15s;
//         }
//         .dropdown-item svg { opacity: 0; transition: opacity 0.15s; flex-shrink: 0; }
//         .dropdown-item:hover { background: var(--green); color: var(--white); }
//         .dropdown-item:hover svg { opacity: 1; color: var(--white); }

//         .mobile-link {
//           display: flex;
//           align-items: center;
//           padding: 13px 16px;
//           font-size: 0.92rem;
//           font-weight: 600;
//           color: var(--text);
//           border-bottom: 1px solid var(--border);
//           transition: background 0.15s, color 0.15s;
//           text-align: left;
//           background: none;
//           border-left: 3px solid transparent;
//           cursor: pointer;
//         }
//         .mobile-link:hover {
//           background: var(--green-bg);
//           color: var(--green);
//           border-left-color: var(--green);
//         }

//         .mobile-submenu-wrapper {
//           overflow: hidden;
//           transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
//           background: #f9fafb;
//         }
//         .mobile-submenu { padding: 4px 0; }
//         .mobile-sub-link {
//           display: block;
//           padding: 10px 16px 10px 28px;
//           font-size: 0.83rem;
//           font-weight: 500;
//           color: var(--muted);
//           border-left: 3px solid transparent;
//           transition: background 0.15s, color 0.15s, border-color 0.15s;
//         }
//         .mobile-sub-link:hover {
//           background: var(--green-bg);
//           color: var(--green);
//           border-left-color: var(--green-light);
//         }

//         .mobile-overlay {
//           position: fixed; inset: 0;
//           background: rgba(0,0,0,0.35);
//           z-index: 39;
//           animation: fadeIn 0.2s ease;
//         }
//         @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }

//         #mobile-menu {
//           position: fixed;
//           top: 0; left: 0; bottom: 0;
//           width: min(320px, 90vw);
//           background: var(--white);
//           z-index: 40;
//           overflow-y: auto;
//           transform: translateX(-100%);
//           transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
//           box-shadow: 4px 0 32px rgba(0,0,0,0.12);
//         }
//         #mobile-menu.open { transform: translateX(0); }

//         .cart-btn {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 8px;
//           border-radius: 10px;
//           color: var(--text);
//           transition: color 0.18s, background 0.18s;
//           cursor: pointer;
//         }
//         .cart-btn:hover { color: var(--green); background: var(--green-bg); }

//         .cart-badge {
//           position: absolute;
//           top: 2px;
//           right: 2px;
//           min-width: 17px;
//           height: 17px;
//           background: #ef4444;
//           color: white;
//           border-radius: 999px;
//           font-size: 0.65rem;
//           font-weight: 700;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0 4px;
//           line-height: 1;
//           animation: popIn 0.2s cubic-bezier(0.34,1.56,0.64,1);
//         }
//         @keyframes popIn {
//           from { transform: scale(0); }
//           to   { transform: scale(1); }
//         }
//       `}</style>

//       <nav className="bg-white shadow-md">
//         {/* ── Desktop nav ── */}
//         <div className="hidden lg:flex justify-center items-center px-4 py-2 gap-4">
//           <ul className="flex flex-wrap justify-center items-center gap-1 flex-1">
//             {menuItems.map((item) => (
//               <DesktopItem key={item.label} item={item} />
//             ))}
//           </ul>

//           {/* Desktop Cart */}
//           <button onClick={() => setCartOpen(true)} className="cart-btn" aria-label="Cart">
//             <CartIcon />
//             <CartBadge />
//           </button>
//         </div>

//         {/* ── Mobile top bar ── */}
//         <div className="flex lg:hidden items-center justify-between px-4 py-3">
//           <Link href="/" className="text-green-600 font-bold text-lg tracking-tight">
//             🏥 HealthMart
//           </Link>

//           <div className="flex items-center gap-2">
//             {/* Mobile Cart */}
//             <button onClick={() => setCartOpen(true)} className="cart-btn" aria-label="Cart">
//               <CartIcon />
//               <CartBadge />
//             </button>

//             <button
//               id="hamburger-btn"
//               onClick={() => setMobileOpen((v) => !v)}
//               className="p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
//               aria-label="Toggle menu"
//             >
//               <HamburgerIcon open={mobileOpen} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ── Mobile overlay ── */}
//       {mobileOpen && (
//         <div className="mobile-overlay lg:hidden" onClick={() => setMobileOpen(false)} />
//       )}

//       {/* ── Mobile drawer ── */}
//       <div id="mobile-menu" className={`lg:hidden ${mobileOpen ? "open" : ""}`}>
//         <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-green-600">
//           <span className="text-white font-bold text-base">Browse Categories</span>
//           <button
//             onClick={() => setMobileOpen(false)}
//             className="text-white hover:bg-green-700 p-1.5 rounded-lg transition"
//             aria-label="Close menu"
//           >
//             <HamburgerIcon open={true} />
//           </button>
//         </div>

//         <ul>
//           {menuItems.map((item) => (
//             <MobileItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbars;






"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
// import { useCart } from "../CartContext";
import { useCart } from "../../CartContext";

import { useRouter } from "next/navigation";
import supabase from "../../../lib/supabase";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Medicine",
    href: "/medicine",
    children: [
      "Derma", "Gastro-Intestinal Tract", "Circulatory System", "Others",
      "Endocrine System", "Eyes, Nose, Ear", "Urinary Tract System",
      "Central Nervous System", "Respiratory Tract System",
      "Cardio-Vascular System", "Oral Care",
    ],
  },
  {
    label: "Baby & Mother Care",
    href: "/babymothercare",
    children: [
      "Baby Diapers & Wipes", "Baby Bath & Body", "New Mommy Aids",
      "Baby Food & Milk", "Baby Appliances", "Baby Essentials",
    ],
  },
  {
    label: "Nutritions & Supplements",
    href: "/nutritions",
    children: ["Multivitamins", "Nutritional Drinks"],
  },
  {
    label: "Foods & Beverages",
    href: "/foods",
    children: [
      "Honey & Oils", "Beverages", "Chocolate & Confectionery",
      "Biscuits & Wafers", "Package Food", "Tea & Coffee",
      "Snacks", "Breakfast & Cereals",
    ],
  },
  {
    label: "Devices & Support",
    href: "/devices",
    children: [
      "Cells & Batteries", "Other Appliances", "BP Monitors",
      "Diabetes Apparatus", "Supports & Braces", "Mobility Equipments",
      "Medicine Accessories", "Thermometer",
      "Steamers, Nebulizers & Vaporizers", "Body Massagers", "Weighing Scales",
    ],
  },
  {
    label: "Personal Care",
    href: "/personalcare",
    children: [
      "Men Grooming", "Skin Care", "Hair Care", "Sexual Wellness",
      "Corona Essentials", "Adult Diapers & Wipes", "Feminine Care",
      "Makeup", "Hand & Foot Care", "Appliances",
      "Personal Grooming", "Body Care", "Dental Care",
    ],
  },
  {
    label: "OTC & Health Need",
    href: "/otc",
    children: [
      "First Aid", "Acidity & Indigestion", "Pain & Fever",
      "Cough & Cold", "Diarrhea & Vomiting",
    ],
  },
];

const ChevronDown = ({ className = "" }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HamburgerIcon = ({ open }) =>
  open ? (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timer = useRef(null);

  const show = () => { clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className="nav-link">{item.label}</Link>
      </li>
    );
  }

  return (
    <li ref={ref} onMouseEnter={show} onMouseLeave={hide} className="relative">
      <Link href={item.href} className="nav-link flex items-center gap-1">
        {item.label}
        <ChevronDown className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Link>
      {open && (
        <ul className="dropdown-menu">
          {item.children.map((child) => (
            <li key={child}>
              <Link href="#" className="dropdown-item">
                <ChevronRight />
                {child}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileItem({ item, onClose }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className="mobile-link" onClick={onClose}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        className="mobile-link w-full flex justify-between items-center"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className="mobile-submenu-wrapper"
        style={{ maxHeight: open ? `${item.children.length * 44}px` : "0px" }}
      >
        <ul className="mobile-submenu">
          {item.children.map((child) => (
            <li key={child}>
              <Link href="#" className="mobile-sub-link" onClick={onClose}>
                {child}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

const Navbars = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const { cartItems, setCartOpen } = useCart();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const CartBadge = () =>
    mounted && totalItems > 0 ? (
      <span key={totalItems} className="cart-badge">{totalItems}</span>
    ) : null;

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (!e.target.closest("#mobile-menu") && !e.target.closest("#hamburger-btn")) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        :root {
          --green: #16a34a;
          --green-light: #22c55e;
          --green-bg: #f0fdf4;
          --text: #1a1a2e;
          --muted: #6b7280;
          --border: #e5e7eb;
          --white: #ffffff;
          --shadow: 0 8px 32px rgba(0,0,0,0.10);
        }
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          letter-spacing: 0.01em;
          transition: color 0.18s, background 0.18s;
        }
        .nav-link:hover { color: var(--green); background: var(--green-bg); }
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: var(--shadow);
          min-width: 220px;
          z-index: 100;
          padding: 6px;
          animation: fadeSlideIn 0.18s ease;
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text);
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item svg { opacity: 0; transition: opacity 0.15s; flex-shrink: 0; }
        .dropdown-item:hover { background: var(--green); color: var(--white); }
        .dropdown-item:hover svg { opacity: 1; color: var(--white); }
        .mobile-link {
          display: flex;
          align-items: center;
          padding: 13px 16px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text);
          border-bottom: 1px solid var(--border);
          transition: background 0.15s, color 0.15s;
          text-align: left;
          background: none;
          border-left: 3px solid transparent;
          cursor: pointer;
        }
        .mobile-link:hover {
          background: var(--green-bg);
          color: var(--green);
          border-left-color: var(--green);
        }
        .mobile-submenu-wrapper {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
          background: #f9fafb;
        }
        .mobile-submenu { padding: 4px 0; }
        .mobile-sub-link {
          display: block;
          padding: 10px 16px 10px 28px;
          font-size: 0.83rem;
          font-weight: 500;
          color: var(--muted);
          border-left: 3px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .mobile-sub-link:hover {
          background: var(--green-bg);
          color: var(--green);
          border-left-color: var(--green-light);
        }
        .mobile-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 39;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        #mobile-menu {
          position: fixed;
          top: 0; left: 0; bottom: 0;
          width: min(320px, 90vw);
          background: var(--white);
          z-index: 40;
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 4px 0 32px rgba(0,0,0,0.12);
        }
        #mobile-menu.open { transform: translateX(0); }
        .cart-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 10px;
          color: var(--text);
          transition: color 0.18s, background 0.18s;
          cursor: pointer;
        }
        .cart-btn:hover { color: var(--green); background: var(--green-bg); }
        .cart-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          min-width: 17px;
          height: 17px;
          background: #ef4444;
          color: white;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          line-height: 1;
          animation: popIn 0.2s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes popIn {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
      `}</style>

      <nav className="bg-white shadow-md">
        {/* Desktop nav */}
        <div className="hidden lg:flex justify-center items-center px-4 py-2 gap-4">
          <ul className="flex flex-wrap justify-center items-center gap-1 flex-1">
            {menuItems.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </ul>

          {/* Cart */}
          <button onClick={() => setCartOpen(true)} className="cart-btn" aria-label="Cart">
            <CartIcon />
            <CartBadge />
          </button>

          {/* Profile / Login */}
          {mounted && (
            user ? (
              <button
                onClick={() => router.push("/users")}
                className="cart-btn"
                title={user.email}
              >
                <div className="w-8 h-8 rounded-full bg-[#5BBF2A] flex items-center justify-center text-white font-bold text-sm">
                  {user.email?.[0]?.toUpperCase()}
                </div>
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="nav-link font-semibold text-[#5BBF2A] border border-[#5BBF2A] rounded-lg px-3 py-1.5"
              >
                Login
              </Link>
            )
          )}
        </div>

        {/* Mobile top bar */}
        <div className="flex lg:hidden items-center justify-between px-4 py-3">
          <Link href="/" className="text-green-600 font-bold text-lg tracking-tight">
            🏥 HealthMart
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => setCartOpen(true)} className="cart-btn" aria-label="Cart">
              <CartIcon />
              <CartBadge />
            </button>
            <button
              id="hamburger-btn"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-overlay lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <div id="mobile-menu" className={`lg:hidden ${mobileOpen ? "open" : ""}`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-green-600">
          <span className="text-white font-bold text-base">Browse Categories</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white hover:bg-green-700 p-1.5 rounded-lg transition"
          >
            <HamburgerIcon open={true} />
          </button>
        </div>

        <ul>
          {menuItems.map((item) => (
            <MobileItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
          ))}
        </ul>

        {/* Mobile Profile / Login */}
        <div className="p-4 border-t">
          {mounted && (
            user ? (
              <button
                onClick={() => { router.push("/users"); setMobileOpen(false); }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-green-50 text-green-700 font-semibold"
              >
                <div className="w-8 h-8 rounded-full bg-[#5BBF2A] flex items-center justify-center text-white font-bold text-sm">
                  {user.email?.[0]?.toUpperCase()}
                </div>
                My Profile
              </button>
            ) : (
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center p-3 rounded-xl bg-[#5BBF2A] text-white font-semibold"
              >
                Login
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbars;








// "use client";

// import { useEffect, useState, useRef } from "react";
// import supabase from "@/lib/supabase";
// import { useCart } from "@/app/CartContext";
// import { useRouter } from "next/navigation";

// export default function ProfilePage() {
//   const [user, setUser] = useState(null);
//   const [profile, setProfile] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [activeTab, setActiveTab] = useState("profile");
//   const [loading, setLoading] = useState(true);
//   const [editMode, setEditMode] = useState(false);
//   const [editForm, setEditForm] = useState({ name: "", phone: "", address: "", city: "" });
//   const [saving, setSaving] = useState(false);
//   const [saveMsg, setSaveMsg] = useState("");
//   const [uploadingImg, setUploadingImg] = useState(false);
//   const fileInputRef = useRef(null);
//   const { cartItems } = useCart();
//   const router = useRouter();

//   const parsePrice = (price = "") => {
//     return parseFloat(price?.toString().replace(/[^0-9.]/g, "")) || 0;
//   };

//   useEffect(() => {
//     const getUser = async () => {
//       // ✅ Pehle session check karo
//       const { data: { session } } = await supabase.auth.getSession();
      
//       if (!session || !session.user) {
//         router.push("/auth/login");
//         return;
//       }

//       const currentUser = session.user;
//       setUser(currentUser);

//       const { data: profileData } = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("id", currentUser.id)
//         .single();
//       setProfile(profileData);
//       setEditForm({
//         name: profileData?.name || "",
//         phone: profileData?.phone || "",
//         address: profileData?.address || "",
//         city: profileData?.city || "",
//       });

//       const { data: ordersData } = await supabase
//         .from("orders")
//         .select("*")
//         .eq("user_id", currentUser.id)
//         .order("created_at", { ascending: false });
//       setOrders(ordersData || []);
//       setLoading(false);
//     };
//     getUser();
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/auth/login");
//   };

//   const handleSave = async () => {
//     setSaving(true);
//     setSaveMsg("");
//     const { error } = await supabase
//       .from("profiles")
//       .update({
//         name: editForm.name,
//         phone: editForm.phone,
//         address: editForm.address,
//         city: editForm.city,
//       })
//       .eq("id", user.id);

//     if (error) {
//       setSaveMsg("❌ Save nahi hua, dobara try karo.");
//     } else {
//       setProfile({ ...profile, ...editForm });
//       setEditMode(false);
//       setSaveMsg("✅ Profile update ho gayi!");
//       setTimeout(() => setSaveMsg(""), 3000);
//     }
//     setSaving(false);
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploadingImg(true);
//     const fileExt = file.name.split(".").pop();
//     const fileName = `${user.id}.${fileExt}`;

//     const { error: uploadError } = await supabase.storage
//       .from("avatars")
//       .upload(fileName, file, { upsert: true });

//     if (uploadError) {
//       alert("Image upload nahi hui: " + uploadError.message);
//       setUploadingImg(false);
//       return;
//     }

//     const { data: urlData } = supabase.storage
//       .from("avatars")
//       .getPublicUrl(fileName);

//     const avatarUrl = urlData.publicUrl;

//     await supabase
//       .from("profiles")
//       .update({ avatar_url: avatarUrl })
//       .eq("id", user.id);

//     setProfile({ ...profile, avatar_url: avatarUrl });
//     setUploadingImg(false);
//   };

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5BBF2A]"></div>
//     </div>
//   );

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-gray-50">

//       <div className="bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] h-32 sm:h-40"></div>

//       <div className="max-w-4xl mx-auto px-3 sm:px-4 -mt-16 pb-16">

//         {/* Profile Card */}
//         <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">

//           <div className="relative group">
//             <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#5BBF2A] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-white shadow overflow-hidden">
//               {profile?.avatar_url ? (
//                 <img src={profile.avatar_url} alt="avatar" className="w-full h-full object-cover" />
//               ) : (
//                 user?.email?.[0]?.toUpperCase()
//               )}
//             </div>

//             <button
//               onClick={() => fileInputRef.current.click()}
//               disabled={uploadingImg}
//               className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
//             >
//               {uploadingImg ? (
//                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
//               ) : (
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
//                   <circle cx="12" cy="13" r="4"/>
//                 </svg>
//               )}
//             </button>

//             <input
//               ref={fileInputRef}
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageUpload}
//             />
//           </div>

//           <div className="flex-1 text-center sm:text-left">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
//               {profile?.name || user?.email?.split("@")[0]}
//             </h1>
//             <p className="text-gray-500 text-sm sm:text-base">{user?.email}</p>
//             {profile?.phone && (
//               <p className="text-gray-400 text-sm">📞 {profile.phone}</p>
//             )}
//           </div>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-red-600 transition font-semibold text-sm sm:text-base"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-1 sm:gap-2 mt-6 border-b overflow-x-auto">
//           {[
//             { key: "profile", label: "👤 Profile" },
//             { key: "cart", label: "🛒 Cart" },
//             { key: "orders", label: "📦 Orders" },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               className={`px-3 sm:px-5 py-2 font-semibold transition border-b-2 text-sm sm:text-base whitespace-nowrap ${
//                 activeTab === tab.key
//                   ? "border-[#5BBF2A] text-[#5BBF2A]"
//                   : "border-transparent text-gray-500 hover:text-gray-700"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         <div className="mt-6">

//           {/* Profile Tab */}
//           {activeTab === "profile" && (
//             <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-4">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-bold text-gray-700">Personal Info</h2>
//                 {!editMode ? (
//                   <button
//                     onClick={() => setEditMode(true)}
//                     className="bg-[#5BBF2A] text-white px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#4AAD1A] transition"
//                   >
//                     ✏️ Edit
//                   </button>
//                 ) : (
//                   <div className="flex gap-2">
//                     <button
//                       onClick={handleSave}
//                       disabled={saving}
//                       className="bg-[#5BBF2A] text-white px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#4AAD1A] transition disabled:opacity-60"
//                     >
//                       {saving ? "Saving..." : "💾 Save"}
//                     </button>
//                     <button
//                       onClick={() => setEditMode(false)}
//                       className="bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {saveMsg && (
//                 <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2">
//                   {saveMsg}
//                 </div>
//               )}

//               {!editMode ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                   <InfoRow label="Full Name" value={profile?.name || "—"} />
//                   <InfoRow label="Email" value={user?.email} />
//                   <InfoRow label="Phone" value={profile?.phone || "—"} />
//                   <InfoRow label="Address" value={profile?.address || "—"} />
//                   <InfoRow label="City" value={profile?.city || "—"} />
//                   <InfoRow label="Member Since" value={new Date(user?.created_at).toLocaleDateString()} />
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                   {[
//                     { label: "Full Name", key: "name" },
//                     { label: "Phone", key: "phone" },
//                     { label: "Address", key: "address" },
//                     { label: "City", key: "city" },
//                   ].map(({ label, key }) => (
//                     <div key={key}>
//                       <label className="text-xs text-gray-400 uppercase">{label}</label>
//                       <input
//                         className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#5BBF2A]"
//                         value={editForm[key]}
//                         onChange={(e) => setEditForm({ ...editForm, [key]: e.target.value })}
//                       />
//                     </div>
//                   ))}
//                   <div>
//                     <label className="text-xs text-gray-400 uppercase">Email</label>
//                     <input
//                       className="w-full mt-1 px-3 py-2 border border-gray-100 rounded-xl text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
//                       value={user?.email}
//                       disabled
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Cart Tab */}
//           {activeTab === "cart" && (
//             <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
//               <h2 className="text-lg font-bold text-gray-700 mb-4">Cart Items</h2>
//               {!cartItems || cartItems.length === 0 ? (
//                 <p className="text-gray-400 text-center py-10">Cart khali hai 🛒</p>
//               ) : (
//                 <div className="space-y-4">
//                   {cartItems.map((item, i) => (
//                     <div key={i} className="flex items-center gap-3 sm:gap-4 border-b pb-4">
//                       {item.image && (
//                         <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover" />
//                       )}
//                       <div className="flex-1 min-w-0">
//                         <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</p>
//                         <p className="text-gray-400 text-xs sm:text-sm">Qty: {item.quantity}</p>
//                         <p className="text-gray-400 text-xs sm:text-sm">Price: {item.price}</p>
//                       </div>
//                       <p className="font-bold text-[#5BBF2A] text-sm sm:text-base">
//                         Rs. {parsePrice(item.price) * item.quantity}
//                       </p>
//                     </div>
//                   ))}
//                   <div className="text-right font-bold text-base sm:text-lg text-gray-800 pt-2">
//                     Total: Rs. {cartItems.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0).toFixed(2)}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Orders Tab */}
//           {activeTab === "orders" && (
//             <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
//               <h2 className="text-lg font-bold text-gray-700 mb-4">Order History</h2>
//               {orders.length === 0 ? (
//                 <p className="text-gray-400 text-center py-10">Koi order nahi abhi tak 📦</p>
//               ) : (
//                 <div className="space-y-4">
//                   {orders.map((order) => (
//                     <div key={order.id} className="border rounded-xl p-3 sm:p-4">
//                       <div className="flex justify-between items-center">
//                         <p className="font-semibold text-gray-700 text-sm sm:text-base">Order #{order.id?.slice(0, 8)}</p>
//                         <span className={`text-xs px-2 sm:px-3 py-1 rounded-full font-semibold ${
//                           order.status === "delivered" ? "bg-green-100 text-green-600"
//                           : order.status === "pending" ? "bg-yellow-100 text-yellow-600"
//                           : "bg-blue-100 text-blue-600"
//                         }`}>
//                           {order.status}
//                         </span>
//                       </div>
//                       <p className="text-gray-400 text-xs sm:text-sm mt-1">{new Date(order.created_at).toLocaleDateString()}</p>
//                       <p className="font-bold text-[#5BBF2A] mt-1">Rs. {order.total}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }

// function InfoRow({ label, value }) {
//   return (
//     <div className="bg-gray-50 rounded-xl p-3">
//       <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
//       <p className="text-gray-800 font-medium mt-1 text-sm sm:text-base">{value}</p>
//     </div>
//   );
// }