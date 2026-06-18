// src/app/layout.js
import "./globals.css";
import Navbars from "./users/navbars/page";
import Footer from "./users/Footer/footer";
import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer";

export const metadata = {
  title: "HealthMart",
  description: "Your trusted online pharmacy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <CartDrawer />
          <Navbars />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}