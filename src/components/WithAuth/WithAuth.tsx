import { useRouter } from "next/router";
import { AuthProps } from "./types";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useState, useEffect } from "react";

const Auth = ({ children }: AuthProps) => {
  const localStorageToken = window.localStorage.getItem("token");
  const router = useRouter();

  if (localStorageToken || router.pathname === "/login") return <>{children}</>;
  else if (!localStorageToken && router.pathname !== "/login") {
    router.push("/login");
    return <LoadingScreen />;
  }
  return <LoadingScreen />;
};

export default Auth;
