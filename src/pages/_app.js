import { store } from '@/app/store';
import '@/styles/globals.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer />
    </Provider>
  );
}
