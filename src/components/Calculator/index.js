import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';
import Input from './Input';
import EarningCard from './EarningCard';
import Button from '../Button/Button';
import {EARNING_CARDS_DATA} from '../../data/calculator';
import {PROJECTS_DATA} from '../../data/projects';
import useProjects from '../../hooks/useProjects';

import styles from '../../styles/components/Calculator.module.scss';

const Calculator = ({projectId, info, onButtonClick}) => {
  const coins = useProjects();

  const [isCrypto, setIsCrypto] = useState(true);
  const toggleCryptoHandler = () => {
    setIsCrypto(!isCrypto);
    setCryptoValue(1);
    setUsdValue(1);
  };

  const [activeCoin, setActiveCoin] = useState(null);
  const changeActiveCoinHandler = obj => setActiveCoin(obj);

  useEffect(() => {
    setActiveCoin(projectId ? {...PROJECTS_DATA.find(project => project.id === projectId), ...info} : coins[0]);
  }, [coins, info, projectId]);

  const [cryptoValue, setCryptoValue] = useState(1);
  const [usdValue, setUsdValue] = useState(1);

  const calcInputValues = value => {
    if (value < 0) return;
    if (isCrypto) {
      setCryptoValue(value);
      setUsdValue(value * activeCoin?.current_price);
    } else {
      setUsdValue(value);
      setCryptoValue(value / activeCoin?.current_price);
    }
  };

  const inputChangeHandler = e => {
    calcInputValues(e.target.value);
  };

  useEffect(() => {
    calcInputValues(cryptoValue);
  }, [isCrypto, activeCoin]);

  return (
    <>
      <div className={`${styles.calculator} ${projectId ? styles.calculatorProject : ''}`}>
        <div className={styles.calcWrapper}>
          <Selector
            activeCoin={activeCoin}
            setActiveCoin={changeActiveCoinHandler}
            isCrypto={isCrypto}
            toggleHandler={toggleCryptoHandler}
            projectId={projectId}
            handlerStake={onButtonClick}
          />
          <Input
            coin={activeCoin?.symbol}
            isActive={isCrypto}
            setValue={inputChangeHandler}
            value={cryptoValue}
          />
          {projectId && <Button
            label={'Stake Now'}
            onClick={onButtonClick}
            className={`stake-button ${styles.stakeBtn}`}
            asLink={projectId}
          />}
          <Input
            coin="$"
            isActive={!isCrypto}
            setValue={inputChangeHandler}
            value={usdValue}
          />
        </div>
      </div>
      <div className={styles.earningWrapper}>
        {activeCoin && EARNING_CARDS_DATA.map(card =>
          <EarningCard
            isCrypto={isCrypto}
            data={card}
            key={card.period}
            cryptoValue={cryptoValue}
            usdValue={usdValue}
            projectId={activeCoin.id}
            tokenName={activeCoin.symbol}
          />
        )}
      </div>
    </>
  );
};

Calculator.propTypes = {
  projectId: PropTypes.string,
  onButtonClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default Calculator;