// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", agree: false });
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     setError("");
//     if (!form.name) return setError("Naam daalna zaroori hai.");
//     if (!form.phone) return setError("Phone number daalna zaroori hai.");
//     if (!form.email) return setError("Email daalna zaroori hai.");
//     if (!form.password) return setError("Password daalna zaroori hai.");
//     if (!form.agree) return setError("Terms agree karna zaroori hai.");
//     // TODO: apni API yahan lagao
//     alert("Account ban gaya!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F3FAF0] px-4">
//       <div className="w-full max-w-md bg-white border border-[#D6EEC9] rounded-3xl shadow-xl overflow-hidden">
//         <div className="h-1 bg-gradient-to-r from-[#5BBF2A] to-[#8FDE52]" />

//         <div className="flex justify-center pt-7">
//           <div className="w-14 h-14 bg-[#5BBF2A] rounded-full flex items-center justify-center">
//             <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
//               <polyline points="9,15 13,19 21,11" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//         </div>

//         <div className="px-8 py-8">
//           <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Join Us Today! 🎉</h1>
//           <p className="text-sm text-center text-[#6B7B65] mb-6">Account banayein, health explore karein</p>

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">
//               {error}
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Aapka Naam *</label>
//               <input
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="Full name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Phone Number *</label>
//               <input
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="+92 300 0000000"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Email Address *</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="aap@example.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Password *</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="Naya password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>

//             <label className="flex items-start gap-2.5 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="accent-[#5BBF2A] w-4 h-4 mt-0.5"
//                 checked={form.agree}
//                 onChange={(e) => setForm({ ...form, agree: e.target.checked })}
//               />
//               <span className="text-xs text-[#6B7B65]">
//                 Main emails aur notification updates receive karne se agree karta/karti hoon.
//               </span>
//             </label>

//             <button
//               onClick={handleSubmit}
//               className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1"
//             >
//               REGISTER
//             </button>

//             <p className="text-center text-xs text-[#6B7B65] mt-2">
//               Pehle se account hai?{" "}
//               <Link href="/auth/login" className="text-[#5BBF2A] font-bold">
//                 Login karein
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import supabase from "@/lib/supabase";

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", agree: false });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setError("");
//     setSuccess("");
//     if (!form.name) return setError("Naam daalna zaroori hai.");
//     if (!form.phone) return setError("Phone number daalna zaroori hai.");
//     if (!form.email) return setError("Email daalna zaroori hai.");
//     if (!form.password) return setError("Password daalna zaroori hai.");
//     if (!form.agree) return setError("Terms agree karna zaroori hai.");

//     setLoading(true);

//     const { error } = await supabase.from("users").insert([
//       {
//         name: form.name,
//         phone: form.phone,
//         email: form.email,
//         password: form.password,
//       },
//     ]);

//     setLoading(false);

//     if (error) {
//       setError("Kuch masla hua: " + error.message);
//     } else {
//       setSuccess("Account ban gaya! Ab login karein.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F3FAF0] px-4">
//       <div className="w-full max-w-md bg-white border border-[#D6EEC9] rounded-3xl shadow-xl overflow-hidden">
//         <div className="h-1 bg-gradient-to-r from-[#5BBF2A] to-[#8FDE52]" />

//         <div className="flex justify-center pt-7">
//           <div className="w-14 h-14 bg-[#5BBF2A] rounded-full flex items-center justify-center">
//             <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
//               <polyline points="9,15 13,19 21,11" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//         </div>

//         <div className="px-8 py-8">
//           <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Join Us Today! 🎉</h1>
//           <p className="text-sm text-center text-[#6B7B65] mb-6">Account banayein, health explore karein</p>

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">
//               {error}
//             </div>
//           )}
//           {success && (
//             <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2.5 mb-4">
//               {success}
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Aapka Naam *</label>
//               <input
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="Full name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Phone Number *</label>
//               <input
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="+92 300 0000000"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Email Address *</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="aap@example.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Password *</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="Naya password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>

//             <label className="flex items-start gap-2.5 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="accent-[#5BBF2A] w-4 h-4 mt-0.5"
//                 checked={form.agree}
//                 onChange={(e) => setForm({ ...form, agree: e.target.checked })}
//               />
//               <span className="text-xs text-[#6B7B65]">
//                 Main emails aur notification updates receive karne se agree karta/karti hoon.
//               </span>
//             </label>

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1 disabled:opacity-60"
//             >
//               {loading ? "Ho raha hai..." : "REGISTER"}
//             </button>

//             <p className="text-center text-xs text-[#6B7B65] mt-2">
//               Pehle se account hai?{" "}
//               <Link href="/auth/login" className="text-[#5BBF2A] font-bold">
//                 Login karein
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import supabase from "@/lib/supabase";

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", agree: false });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setError("");
//     setSuccess("");
//     if (!form.name) return setError("Naam daalna zaroori hai.");
//     if (!form.phone) return setError("Phone number daalna zaroori hai.");
//     if (!form.email) return setError("Email daalna zaroori hai.");
//     if (!form.password) return setError("Password daalna zaroori hai.");
//     if (!form.agree) return setError("Terms agree karna zaroori hai.");

//     setLoading(true);

//     // Step 1: Create Auth Account
//     const { data: authData, error: authError } = await supabase.auth.signUp({
//       email: form.email,
//       password: form.password,
//     });

//     if (authError) {
//       setLoading(false);
//       return setError("Kuch masla hua: " + authError.message);
//     }

//     // Step 2: Create Profile Record
//     if (authData.user) {
//       const { error: profileError } = await supabase.from("profiles").insert([
//         {
//           user_id: authData.user.id,
//           name: form.name,
//           phone: form.phone,
//           email: form.email,
//         },
//       ]);

//       if (profileError) {
//         console.error("Profile insert error:", profileError);
//       }
//     }

//     setLoading(false);
//     setSuccess("Account ban gaya! Ab login karein.");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F3FAF0] px-4">
//       <div className="w-full max-w-md bg-white border border-[#D6EEC9] rounded-3xl shadow-xl overflow-hidden">
//         <div className="h-1 bg-gradient-to-r from-[#5BBF2A] to-[#8FDE52]" />

//         <div className="flex justify-center pt-7">
//           <div className="w-14 h-14 bg-[#5BBF2A] rounded-full flex items-center justify-center">
//             <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
//               <polyline points="9,15 13,19 21,11" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </div>
//         </div>

//         <div className="px-8 py-8">
//           <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Join Us Today! 🎉</h1>
//           <p className="text-sm text-center text-[#6B7B65] mb-6">Account banayein, health explore karein</p>

//           {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">{error}</div>}
//           {success && <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2.5 mb-4">{success}</div>}

//           <div className="flex flex-col gap-3">
//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Aapka Naam *</label>
//               <input
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="Full name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Phone Number *</label>
//               <input
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="+92 300 0000000"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               />
//             </div>

//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Email Address *</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="aap@example.com"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//             </div>

//             {/* Password with Eye */}
//             <div>
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Password *</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="w-full px-4 py-3 pr-12 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                   placeholder="Naya password"
//                   value={form.password}
//                   onChange={(e) => setForm({ ...form, password: e.target.value })}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8BEA2] hover:text-[#5BBF2A] transition-colors"
//                 >
//                   {showPassword ? (
//                     // Eye Off
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
//                       <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
//                       <line x1="1" y1="1" x2="23" y2="23"/>
//                     </svg>
//                   ) : (
//                     // Eye
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                       <circle cx="12" cy="12" r="3"/>
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             <label className="flex items-start gap-2.5 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="accent-[#5BBF2A] w-4 h-4 mt-0.5"
//                 checked={form.agree}
//                 onChange={(e) => setForm({ ...form, agree: e.target.checked })}
//               />
//               <span className="text-xs text-[#6B7B65]">
//                 Main emails aur notification updates receive karne se agree karta/karti hoon.
//               </span>
//             </label>

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1 disabled:opacity-60"
//             >
//               {loading ? "Ho raha hai..." : "REGISTER"}
//             </button>

//             <p className="text-center text-xs text-[#6B7B65] mt-2">
//               Pehle se account hai?{" "}
//               <Link href="/auth/login" className="text-[#5BBF2A] font-bold">Login karein</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














"use client";
import { useState } from "react";
import Link from "next/link";
import supabase from "@/lib/supabase";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", agree: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (!form.name) return setError("Naam daalna zaroori hai.");
    if (!form.phone) return setError("Phone number daalna zaroori hai.");
    if (!form.email) return setError("Email daalna zaroori hai.");
    if (!form.password) return setError("Password daalna zaroori hai.");
    if (!form.agree) return setError("Terms agree karna zaroori hai.");

    setLoading(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      setLoading(false);
      return setError("Kuch masla hua: " + authError.message);
    }

    if (authData.user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: authData.user.id,  // ✅ Fixed
          name: form.name,
          phone: form.phone,
          email: form.email,
        },
      ]);

      if (profileError) {
        console.error("Profile insert error:", profileError);
      }
    }

    setLoading(false);
    setSuccess("Account ban gaya! Ab login karein.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3FAF0] px-4">
      <div className="w-full max-w-md bg-white border border-[#D6EEC9] rounded-3xl shadow-xl overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#5BBF2A] to-[#8FDE52]" />

        <div className="flex justify-center pt-7">
          <div className="w-14 h-14 bg-[#5BBF2A] rounded-full flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <polyline points="9,15 13,19 21,11" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="px-8 py-8">
          <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Join Us Today! 🎉</h1>
          <p className="text-sm text-center text-[#6B7B65] mb-6">Account banayein, health explore karein</p>

          {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">{error}</div>}
          {success && <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2.5 mb-4">{success}</div>}

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Aapka Naam *</label>
              <input
                className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Phone Number *</label>
              <input
                className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
                placeholder="+92 300 0000000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Email Address *</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
                placeholder="aap@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 pr-12 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
                  placeholder="Naya password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8BEA2] hover:text-[#5BBF2A] transition-colors"
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#5BBF2A] w-4 h-4 mt-0.5"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              />
              <span className="text-xs text-[#6B7B65]">
                Main emails aur notification updates receive karne se agree karta/karti hoon.
              </span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1 disabled:opacity-60"
            >
              {loading ? "Ho raha hai..." : "REGISTER"}
            </button>

            <p className="text-center text-xs text-[#6B7B65] mt-2">
              Pehle se account hai?{" "}
              <Link href="/auth/login" className="text-[#5BBF2A] font-bold">Login karein</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}