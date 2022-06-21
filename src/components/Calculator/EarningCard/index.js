import PropTypes from 'prop-types';
import {useContext} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import {getProfitByCoin} from '../../../helpers/helpers';
import styles from '../../../styles/components/EarningCard.module.scss';

const EarningCard = ({
  isCrypto,
  cryptoValue,
  usdValue,
  coin,
  data: {
    period,
    count
  }
}) => {
  const coins = useContext(CoinsContext);

  return (
    <div className={styles.earningCard}>
      <span className={`${styles.text} ${isCrypto ? styles.textActive : ''}`}>
        {`$ ${(usdValue * count * getProfitByCoin(coin, coins)).toFixed(4)}`}
      </span>
      <span className={`${styles.text} ${styles.textCenter} ${!isCrypto ? styles.textActive : ''}`}>
        {`${coin} ${(cryptoValue * count * getProfitByCoin(coin, coins)).toFixed(4)}`}
      </span>
      <span className={styles.period}>
        {period}
      </span>
    </div>
  );
};

EarningCard.propTypes = {
  isCrypto: PropTypes.bool,
  data: PropTypes.object,
  cryptoValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  usdValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  coin: PropTypes.string
};

export default EarningCard;