import { Route, Routes } from "react-router";
import AppNavbar from "../app-navbar";
import { lazy, Suspense } from "react";
import background from "@/assets/background.jpg";
import car from "@/assets/car.png";
import Start from "@/assets/star.svg";

const LazyHome = lazy(() => import("@/pages/home"));
const LazyAbout = lazy(() => import("@/pages/about"));
const LazyContact = lazy(() => import("@/pages/contact"));

const App = () => {
  return (
    <>
      <AppNavbar />
      <Start />
      <img
        src={background}
        width={`100%`}
        height={400}
        style={{ objectFit: "cover" }}
        alt="bg"
      />
      <img
        src={car}
        width={500}
        height={200}
        style={{ objectFit: "cover" }}
        alt="bg"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/contact" element={<LazyContact />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
