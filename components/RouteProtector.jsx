import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../store/AuthContext";

export default function RouteProtector({ loggedPath, unLoggedPath }) {
  const { user } = useAuth();
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
