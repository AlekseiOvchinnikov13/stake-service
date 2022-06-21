import '../styles/globals.scss';
import Layout from '../components/Layout';

function StakeService({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default StakeService;
