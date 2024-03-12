"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

const Providers = (props) => {
  return (
    <SessionProvider>
      <RecoilRoot>{props.children}</RecoilRoot>
    </SessionProvider>
  );
};

export default Providers;
