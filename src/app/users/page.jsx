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

//   // useEffect(() => {
//   //   const getUser = async () => {
//   //     // ✅ Pehle session check karo
//   //     const { data: { session } } = await supabase.auth.getSession();
      
//   //     if (!session || !session.user) {
//   //       router.push("/auth/login");
//   //       return;
//   //     }

//   //     const currentUser = session.user;
//   //     setUser(currentUser);

//   //     const { data: profileData } = await supabase
//   //       .from("profiles")
//   //       .select("*")
//   //       .eq("id", currentUser.id)
//   //       .single();
//   //     setProfile(profileData);
//   //     setEditForm({
//   //       name: profileData?.name || "",
//   //       phone: profileData?.phone || "",
//   //       address: profileData?.address || "",
//   //       city: profileData?.city || "",
//   //     });

//   //     const { data: ordersData } = await supabase
//   //       .from("orders")
//   //       .select("*")
//   //       .eq("user_id", currentUser.id)
//   //       .order("created_at", { ascending: false });
//   //     setOrders(ordersData || []);
//   //     setLoading(false);
//   //   };
//   //   getUser();
//   // }, []);


//   useEffect(() => {
//     const loadProfile = async (currentUser) => {
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

//     // ✅ Auth state listener - session track karta hai
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         if (session?.user) {
//           setUser(session.user);
//           await loadProfile(session.user);
//         } else {
//           router.push("/auth/login");
//         }
//       }
//     );

//     return () => subscription.unsubscribe();
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











"use client";

import { useEffect, useState, useRef } from "react";
import supabase from "@/lib/supabase";
import { useCart } from "@/app/CartContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", phone: "", address: "", city: "" });
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [uploadingImg, setUploadingImg] = useState(false);
  const fileInputRef = useRef(null);
  const { cartItems } = useCart();
  const router = useRouter();

  const parsePrice = (price = "") => {
    return parseFloat(price?.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  useEffect(() => {
    const loadProfile = async (currentUser) => {
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single();
      setProfile(profileData);
      setEditForm({
        name: profileData?.name || "",
        phone: profileData?.phone || "",
        address: profileData?.address || "",
        city: profileData?.city || "",
      });

      const { data: ordersData } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", currentUser.id)
        .order("created_at", { ascending: false });
      setOrders(ordersData || []);
      setLoading(false);
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
          await loadProfile(session.user);
        } else {
          setLoading(false);
          router.push("/auth/login");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setSaveMsg("");
    const { error } = await supabase
      .from("profiles")
      .update({
        name: editForm.name,
        phone: editForm.phone,
        address: editForm.address,
        city: editForm.city,
      })
      .eq("id", user.id);

    if (error) {
      setSaveMsg("❌ Save nahi hua, dobara try karo.");
    } else {
      setProfile({ ...profile, ...editForm });
      setEditMode(false);
      setSaveMsg("✅ Profile update ho gayi!");
      setTimeout(() => setSaveMsg(""), 3000);
    }
    setSaving(false);
  };

  const handleImageUpload = async (e) => {
    if (!user) return;
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImg(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(fileName, file, { upsert: true });

    if (uploadError) {
      alert("Image upload nahi hui: " + uploadError.message);
      setUploadingImg(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(fileName);

    const avatarUrl = urlData.publicUrl;

    await supabase
      .from("profiles")
      .update({ avatar_url: avatarUrl })
      .eq("id", user.id);

    setProfile({ ...profile, avatar_url: avatarUrl });
    setUploadingImg(false);
  };

  // ✅ Loading ya user null hone pe spinner dikhaO
  if (loading || !user) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5BBF2A]"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#5BBF2A] to-[#4AAD1A] h-32 sm:h-40"></div>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 -mt-16 pb-16">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#5BBF2A] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold border-4 border-white shadow overflow-hidden">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                user?.email?.[0]?.toUpperCase()
              )}
            </div>
            <button
              onClick={() => fileInputRef.current.click()}
              disabled={uploadingImg}
              className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              {uploadingImg ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              )}
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              {profile?.name || user?.email?.split("@")[0]}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">{user?.email}</p>
            {profile?.phone && <p className="text-gray-400 text-sm">📞 {profile.phone}</p>}
          </div>

          <button onClick={handleLogout} className="bg-red-500 text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-red-600 transition font-semibold text-sm sm:text-base">
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 sm:gap-2 mt-6 border-b overflow-x-auto">
          {[
            { key: "profile", label: "👤 Profile" },
            { key: "cart", label: "🛒 Cart" },
            { key: "orders", label: "📦 Orders" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 sm:px-5 py-2 font-semibold transition border-b-2 text-sm sm:text-base whitespace-nowrap ${
                activeTab === tab.key ? "border-[#5BBF2A] text-[#5BBF2A]" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-700">Personal Info</h2>
                {!editMode ? (
                  <button onClick={() => setEditMode(true)} className="bg-[#5BBF2A] text-white px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#4AAD1A] transition">
                    ✏️ Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button onClick={handleSave} disabled={saving} className="bg-[#5BBF2A] text-white px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#4AAD1A] transition disabled:opacity-60">
                      {saving ? "Saving..." : "💾 Save"}
                    </button>
                    <button onClick={() => setEditMode(false)} className="bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-300 transition">
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {saveMsg && <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-2">{saveMsg}</div>}

              {!editMode ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <InfoRow label="Full Name" value={profile?.name || "—"} />
                  <InfoRow label="Email" value={user?.email} />
                  <InfoRow label="Phone" value={profile?.phone || "—"} />
                  <InfoRow label="Address" value={profile?.address || "—"} />
                  <InfoRow label="City" value={profile?.city || "—"} />
                  <InfoRow label="Member Since" value={new Date(user?.created_at).toLocaleDateString()} />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: "Full Name", key: "name" },
                    { label: "Phone", key: "phone" },
                    { label: "Address", key: "address" },
                    { label: "City", key: "city" },
                  ].map(({ label, key }) => (
                    <div key={key}>
                      <label className="text-xs text-gray-400 uppercase">{label}</label>
                      <input
                        className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#5BBF2A]"
                        value={editForm[key]}
                        onChange={(e) => setEditForm({ ...editForm, [key]: e.target.value })}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs text-gray-400 uppercase">Email</label>
                    <input className="w-full mt-1 px-3 py-2 border border-gray-100 rounded-xl text-sm bg-gray-50 text-gray-400 cursor-not-allowed" value={user?.email} disabled />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Cart Tab */}
          {activeTab === "cart" && (
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-700 mb-4">Cart Items</h2>
              {!cartItems || cartItems.length === 0 ? (
                <p className="text-gray-400 text-center py-10">Cart khali hai 🛒</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-4 border-b pb-4">
                      {item.image && <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover" />}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.name}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Qty: {item.quantity}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Price: {item.price}</p>
                      </div>
                      <p className="font-bold text-[#5BBF2A] text-sm sm:text-base">Rs. {parsePrice(item.price) * item.quantity}</p>
                    </div>
                  ))}
                  <div className="text-right font-bold text-base sm:text-lg text-gray-800 pt-2">
                    Total: Rs. {cartItems.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0).toFixed(2)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-700 mb-4">Order History</h2>
              {orders.length === 0 ? (
                <p className="text-gray-400 text-center py-10">Koi order nahi abhi tak 📦</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-xl p-3 sm:p-4">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-700 text-sm sm:text-base">Order #{order.id?.slice(0, 8)}</p>
                        <span className={`text-xs px-2 sm:px-3 py-1 rounded-full font-semibold ${
                          order.status === "delivered" ? "bg-green-100 text-green-600"
                          : order.status === "pending" ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                        }`}>{order.status}</span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{new Date(order.created_at).toLocaleDateString()}</p>
                      <p className="font-bold text-[#5BBF2A] mt-1">Rs. {order.total}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
      <p className="text-gray-800 font-medium mt-1 text-sm sm:text-base">{value}</p>
    </div>
  );
}