import PropTypes from 'prop-types';
import styles from '../../../styles/components/EarningCard.module.scss';
import {PROJECTS_DATA} from '../../../data/projects';
import useProjects from '../../../hooks/useProjects';

const EarningCard = ({
  isCrypto,
  cryptoValue,
  usdValue,
  projectId,
  tokenName,
  data: {
    period,
    count
  }
}) => {

  const coins = useProjects();

  if (!projectId) return null;

  const symbol = coins ? coins.find(coin => coin.id === projectId).symbol : tokenName;
  const {apy} = PROJECTS_DATA.find(project => project.id === projectId).commonInfo;

  return (
    <div className={styles.earningCard}>
      <span className={`${styles.text} ${isCrypto ? styles.textActive : ''}`}>
        {`$ ${(usdValue * count * apy / 100).toFixed(4)}`}
      </span>
      <span className={`${styles.text} ${styles.textCenter} ${!isCrypto ? styles.textActive : ''}`}>
        {`${symbol} ${(cryptoValue * count * apy / 100).toFixed(4)}`}
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