// "use client";
// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window === "undefined") return [];
//     try {
//       const saved = localStorage.getItem("cart");
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });
//   const [cartOpen, setCartOpen] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((i) => i.id === product.id);
//       if (exists) {
//         return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//     setCartOpen(true);
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   const updateQuantity = (id, qty) => {
//     if (qty < 1) return removeFromCart(id);
//     setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: qty } : i));
//   };

//   const parsePrice = (price = "") => {
//     return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
//   };

//   const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
//   const totalPrice = cartItems.reduce((sum, i) => sum + (parsePrice(i.price) * i.quantity), 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartOpen, setCartOpen, totalItems, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }












"use client";
import { createContext, useContext, useState, useEffect } from "react";
import supabase from "@/lib/supabase";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Monitor user authentication
  useEffect(() => {
    const getUser = async () => {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);

      // If user is logged in, load their cart from Supabase
      if (currentUser) {
        const { data, error } = await supabase
          .from("cart_items")
          .select("*")
          .eq("user_id", currentUser.id);
        
        if (!error && data) {
          setCartItems(data);
        }
      } else {
        // If user logged out, keep localStorage cart or clear
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          const { data } = await supabase
            .from("cart_items")
            .select("*")
            .eq("user_id", session.user.id);
          setCartItems(data || []);
        } else {
          setUser(null);
          setCartItems([]);
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  // Save to localStorage for non-logged-in users, or Supabase for logged-in
  useEffect(() => {
    if (!user) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = async (product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // If user is logged in, save to Supabase
    if (user) {
      const exists = cartItems.find((i) => i.id === product.id);
      if (exists) {
        await supabase
          .from("cart_items")
          .update({ quantity: exists.quantity + 1 })
          .eq("product_id", product.id)
          .eq("user_id", user.id);
      } else {
        await supabase.from("cart_items").insert([
          {
            user_id: user.id,
            product_id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ]);
      }
    }
    setCartOpen(true);
  };

  const removeFromCart = async (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    
    if (user) {
      await supabase
        .from("cart_items")
        .delete()
        .eq("product_id", id)
        .eq("user_id", user.id);
    }
  };

  const updateQuantity = async (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: qty } : i));

    if (user) {
      await supabase
        .from("cart_items")
        .update({ quantity: qty })
        .eq("product_id", id)
        .eq("user_id", user.id);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const parsePrice = (price = "") => {
    return parseFloat(price?.toString().replace(/[^0-9.]/g, "")) || 0;
  };

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + (parsePrice(i.price) * i.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartOpen,
      setCartOpen,
      totalItems,
      totalPrice,
      parsePrice,
      user,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}