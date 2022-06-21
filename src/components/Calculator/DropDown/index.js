import {useContext} from 'react';
import {CoinsContext} from '../../../context/CoinsContext';
import styles from '../../../styles/components/DropDown.module.scss';

const DropDown = ({
  coinName,
  onSelect,
  closeHandler,
  isOpen
}) => {
  const coins = useContext(CoinsContext);

  const selectHandler = val => {
    onSelect(val);
    closeHandler();
  };

  return (
    <div className={`${styles.dropDown} ${isOpen ? styles.dropDownOpen : ''}`}>
      {coins && coins.filter(el => el.coinName !== coinName && el.price && el.percentNumber).map(currency =>
        <button
          key={currency.coin}
          onClick={() => selectHandler(currency)}
        >
          {`${currency.coinName} (${currency.coin.toUpperCase()})`}
        </button>
      )}
    </div>
  );
};

export default DropDown;