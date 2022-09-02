import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import Toast from '../Toast';
import styles from '../../styles/components/InfoCard.module.scss';

const InfoCard = ({
  value,
  title,
  isAddress,
  isMechanics
}) => {

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        toast.success('Copied!');
      })
      .catch(() => {
        toast.error('Something went wrong...');
      });
  };

  return (
    <>
      {isAddress && <div className={styles.toast}><Toast/></div>}
      <div className={`${styles.infoCard} ${isAddress ? styles.infoCardAddress : ''} ${isMechanics ? styles.infoCardMechanics : ''}`}>
        <p className={styles.value}>
          {value ? value : '-'}
          {isAddress &&
            <button onClick={copyToClipBoard} className={styles.copyBtn}>
              copy
            </button>
          }
        </p>
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isAddress: PropTypes.bool,
  className: PropTypes.string
};

export default InfoCard;