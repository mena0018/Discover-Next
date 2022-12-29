import { ReactNode } from "react";
import Navbar from "./Navbar";

function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Container;
