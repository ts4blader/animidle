import React, { useEffect, createContext, useState } from "react";
import "../scss/main.scss";
import "../libs/FirebaseHelper";
import Layout from "../components/Layout";
import Store from "../store/Store";
import { authChange } from "../libs/AuthHelper";

export const AuthContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("authUser")));
    authChange(
      (user) => {
        setUser(user);
        localStorage.setItem("authUser", JSON.stringify(user));
      },
      () => {
        setUser(null);
        localStorage.removeItem("authUser");
      }
    );
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Store>
        <div className="wrapper">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Store>
    </AuthContext.Provider>
  );
}

export default MyApp;
