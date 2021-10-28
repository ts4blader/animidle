import "../scss/main.scss";
import Layout from "../components/Layout";
import Store from "../store/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <div className="wrapper">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Store>
  );
}

export default MyApp;
