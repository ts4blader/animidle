import "../scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
