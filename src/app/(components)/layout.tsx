import SideNav from "@/components/sidenav";
import { PropsWithChildren } from "react";

const ComponentLayout = ({ children }: PropsWithChildren) => {
  return <SideNav>{children}</SideNav>;
};

export default ComponentLayout;
