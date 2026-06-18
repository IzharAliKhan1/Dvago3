// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function LoginPage() {
//   const [form, setForm] = useState({ phone: "", password: "" });
//   const [error, setError] = useState("");

//   const handleSubmit = () => {
//     setError("");
//     if (!form.phone) return setError("Phone number daalna zaroori hai.");
//     if (!form.password) return setError("Password daalna zaroori hai.");
//     // TODO: apni API yahan lagao
//     alert("Login ho gaya!");
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
//           <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Hey There! 👋</h1>
//           <p className="text-sm text-center text-[#6B7B65] mb-6">Login karein aur explore karein</p>

//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">
//               {error}
//             </div>
//           )}

//           <div className="flex flex-col gap-3">
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
//               <label className="text-xs font-semibold text-[#1F2A1A] block mb-1.5">Password *</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-3 border border-[#D6EEC9] rounded-xl text-sm bg-[#FAFFFE] outline-none focus:border-[#5BBF2A] focus:ring-2 focus:ring-[#5BBF2A]/20 placeholder:text-[#A8BEA2]"
//                 placeholder="Password daalkein"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1"
//             >
//               LOGIN
//             </button>

//             <p className="text-center text-xs text-[#6B7B65] mt-2">
//               Account nahi hai?{" "}
//               <Link href="/auth/register" className="text-[#5BBF2A] font-bold">
//                 Register karein
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

// export default function LoginPage() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setError("");
//     setSuccess("");
//     if (!form.email) return setError("Email daalna zaroori hai.");
//     if (!form.password) return setError("Password daalna zaroori hai.");

//     setLoading(true);

//     const { data, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("email", form.email)
//       .eq("password", form.password)
//       .single();

//     setLoading(false);

//     if (error || !data) {
//       setError("Email ya password galat hai.");
//     } else {
//       setSuccess("Login ho gaya! Welcome " + data.name);
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
//           <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Hey There! 👋</h1>
//           <p className="text-sm text-center text-[#6B7B65] mb-6">Login karein aur explore karein</p>

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
//                 placeholder="Password daalkein"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1 disabled:opacity-60"
//             >
//               {loading ? "Check ho raha hai..." : "LOGIN"}
//             </button>

//             <p className="text-center text-xs text-[#6B7B65] mt-2">
//               Account nahi hai?{" "}
//               <Link href="/auth/register" className="text-[#5BBF2A] font-bold">
//                 Register karein
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// important


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import supabase from "@/lib/supabase";

// export default function LoginPage() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     setError("");
//     setSuccess("");
//     if (!form.email) return setError("Email daalna zaroori hai.");
//     if (!form.password) return setError("Password daalna zaroori hai.");

//     setLoading(true);
//     const { data, error } = await supabase
//       .from("users")
//       .select("*")
//       .eq("email", form.email)
//       .eq("password", form.password)
//       .single();
//     setLoading(false);

//     if (error || !data) {
//       setError("Email ya password galat hai.");
//     } else {
//       setSuccess("Login ho gaya! Welcome " + data.name);
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
//           <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Hey There! 👋</h1>
//           <p className="text-sm text-center text-[#6B7B65] mb-6">Login karein aur explore karein</p>

//           {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">{error}</div>}
//           {success && <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2.5 mb-4">{success}</div>}

//           <div className="flex flex-col gap-3">
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
//                   placeholder="Password daalkein"
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

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1 disabled:opacity-60"
//             >
//               {loading ? "Check ho raha hai..." : "LOGIN"}
//             </button>

//             <p className="text-center text-xs text-[#6B7B65] mt-2">
//               Account nahi hai?{" "}
//               <Link href="/auth/register" className="text-[#5BBF2A] font-bold">Register karein</Link>
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
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    if (!form.email) return setError("Email daalna zaroori hai.");
    if (!form.password) return setError("Password daalna zaroori hai.");

    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setLoading(false);

    if (error) {
      setError("Email ya password galat hai.");
    } else {
      setSuccess("Login ho gaya! Welcome " + data.user.email.split("@")[0]);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
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
          <h1 className="text-2xl font-extrabold text-center text-[#1F2A1A] mb-1">Hey There! 👋</h1>
          <p className="text-sm text-center text-[#6B7B65] mb-6">Login karein aur explore karein</p>

          {error && <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-2.5 mb-4">{error}</div>}
          {success && <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2.5 mb-4">{success}</div>}

          <div className="flex flex-col gap-3">
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
                  placeholder="Password daalkein"
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

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] text-white font-bold text-sm rounded-2xl shadow-md mt-1 disabled:opacity-60"
            >
              {loading ? "Check ho raha hai..." : "LOGIN"}
            </button>

            <p className="text-center text-xs text-[#6B7B65] mt-2">
              Account nahi hai?{" "}
              <Link href="/auth/register" className="text-[#5BBF2A] font-bold">Register karein</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}