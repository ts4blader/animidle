import React, { useContext, useEffect } from "react";
import { AuthContext } from "../pages/_app";
import { useRouter } from "next/router";

export default function RouteProtector({ loggedPath, unLoggedPath }) {
  const user = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(loggedPath === undefined ? router.pathname : loggedPath);
    } else {
      router.push(unLoggedPath === undefined ? router.pathname : unLoggedPath);
    }
  }, [user]);

  return <> </>;
}
