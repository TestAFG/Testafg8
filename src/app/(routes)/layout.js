import "./bedroom/bedroom.css";
import Footer from "@/components/footer";
import RouteNavbar from "@/components/routeNavbar";
import Slider from "@/components/slider";

export default function RootLayout({ children }) {
  return (
    <div>
      <RouteNavbar />
      <Slider />
      {children}
      <Footer />
    </div>
  );
}
