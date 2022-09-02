import '../styles/globals.scss';
import Layout from '../components/Layout';
import {Provider} from 'react-redux';
import {store} from '../store/store';

const StakeService = ({Component, pageProps}) =>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>;

export default StakeService;
