import { Poppins } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Poppins({ subsets: ["latin"], weight:['400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Tronix",
  description: "Generated by Md Hadiul Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
