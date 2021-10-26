import "../scss/main.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
