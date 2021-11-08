import React from "react";
import "../scss/main.scss";
import "../libs/FirebaseHelper";
import Layout from "../components/Layout";
import { Store } from "../store/Store";
import { AuthProvider } from "../store/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Store>
        <div className="wrapper">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Store>
    </AuthProvider>
  );
}

export default MyApp;
