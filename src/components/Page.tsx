import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Page;
