import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex justify-center pt-48">{children}</div>;
};

export default AuthLayout;
