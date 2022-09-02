import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Toast = () => {
  return (
    <ToastContainer
      autoClose={3000}
      position="bottom-right"
      hideProgressBar
      theme="dark"
    />
  );
};

export default Toast;