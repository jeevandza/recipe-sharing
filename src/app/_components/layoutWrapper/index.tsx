import Footer from "./footer";
import Navbar from "./navbar";

type LayoutWrapperI = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: LayoutWrapperI) {
  return (
    <div className="flex min-h-screen flex-col bg-white ">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 bg-white h-screen w-screen overflow-scroll">{children}</div>
      <div className="fixed bottom-0 w-full">
        {/* <Footer /> */}
      </div>
    </div>
  );
}
