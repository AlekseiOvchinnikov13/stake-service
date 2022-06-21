import {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';
import Input from './Input';
import EarningCard from './EarningCard';
import Button from '../Button/Button';
import {EARNING_CARDS_DATA} from '../../data/calculator';
import {CoinsContext} from '../../context/CoinsContext';
import styles from '../../styles/components/Calculator.module.scss';

const Calculator = ({projectId, onButtonClick}) => {
  const coins = useContext(CoinsContext);

  const [isCrypto, setIsCrypto] = useState(true);
  const toggleCryptoHandler = () => {
    setIsCrypto(!isCrypto);
    setCryptoValue(1);
    setUsdValue(1);
  };

  const [activeCoin, setActiveCoin] = useState({});
  const changeActiveCoinHandler = obj => setActiveCoin(obj);

  useEffect(() => {
    setActiveCoin(projectId ? coins.find(coin => coin.id === projectId) : coins[0]);
  }, [coins, projectId]);

  const [cryptoValue, setCryptoValue] = useState(1);
  const [usdValue, setUsdValue] = useState(1);

  const calcInputValues = value => {
    if (value < 0) return;
    if (isCrypto) {
      setCryptoValue(value);
      setUsdValue(value * activeCoin?.price);
    } else {
      setUsdValue(value);
      setCryptoValue(value / activeCoin?.price);
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
          />
          {projectId &&
            <Button
              label={'Stake Now'}
              onClick={onButtonClick}
              className={'stake-button'}
            />
          }
          <div className={styles.inputsWrapper}>
            <Input
              coin={activeCoin?.coin}
              isActive={isCrypto}
              setValue={inputChangeHandler}
              value={cryptoValue}
            />
            <Input
              coin="$"
              isActive={!isCrypto}
              setValue={inputChangeHandler}
              value={usdValue}
            />
          </div>
        </div>
      </div>
      <div className={styles.earningWrapper}>
        {EARNING_CARDS_DATA.map(card =>
          <EarningCard
            isCrypto={isCrypto}
            data={card}
            key={card.period}
            cryptoValue={cryptoValue}
            usdValue={usdValue}
            coin={activeCoin?.coin}
          />
        )}
      </div>
    </>
  );
};

Calculator.propTypes = {
  projectId: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default Calculator;