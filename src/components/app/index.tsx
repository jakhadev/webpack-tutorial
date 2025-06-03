import { Route, Routes } from "react-router";
import AppNavbar from "../app-navbar";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("@/pages/home"));
const LazyAbout = lazy(() => import("@/pages/about"));
const LazyContact = lazy(() => import("@/pages/contact"));

const App = () => {
  return (
    <>
      <AppNavbar />
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
