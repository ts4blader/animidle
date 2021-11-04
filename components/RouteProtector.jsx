import React, { useContext, useEffect } from "react";
import { AuthContext } from "../pages/_app";
import { useRouter } from "next/router";

export default function RouteProtector({ loggedPath, unLoggedPath }) {
  const user = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.prefetch(loggedPath === undefined ? router.pathname : loggedPath);
      router.push(loggedPath === undefined ? router.pathname : loggedPath);
    } else {
      router.prefetch(
        unLoggedPath === undefined ? router.pathname : unLoggedPath
      );
      router.push(unLoggedPath === undefined ? router.pathname : unLoggedPath);
    }
  }, [user]);

  return <> </>;
}
