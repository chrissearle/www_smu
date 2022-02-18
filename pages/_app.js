import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
import "../styles/overrides.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout files={pageProps.files}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
