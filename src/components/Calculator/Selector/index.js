import {useState} from 'react';
import Arrow from '../../Arrow';
import ToggleArrow from './images/toggle-arrow.svg';
import ImageContainer from '../../ImageContainer';
import DropDown from '../DropDown';
import styles from '../../../styles/components/Selector.module.scss';
import {purpleColor, calcInactiveColor} from '../../../styles/variables.module.scss';

const Selector = ({
  activeCoin,
  setActiveCoin,
  isCrypto,
  toggleHandler,
}) => {
  const [isSpin, setIsSpin] = useState(false);

  const toggle = () => {
    toggleHandler();
    setIsSpin(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.selector}>
      <div
        className={`${styles.colorBlock} ${isCrypto ? styles.colorBlockUp : styles.colorBlockDown} ${isCrypto && isOpen ? styles.colorBlockBorder : ''}`}/>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.text} ${isCrypto ? styles.textActive : ''}`}
      >
        {`${activeCoin?.coinName} (${activeCoin?.coin?.toUpperCase()})`}
        <Arrow
          fillColor={isCrypto ? purpleColor : calcInactiveColor}
          direction={'down'}
          isLong={false}
          className={styles.arrow}
        />
      </button>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.hideToggle : ''}`}
        onClick={toggle}
        onAnimationEnd={() => setIsSpin(false)}
      >
        <ImageContainer
          src={ToggleArrow}
          alt="toggle"
          className={`${styles.toggleImg} ${isSpin ? styles.toggleSpin : ''}`}
        />
      </button>
      <div className={`${styles.text} ${!isCrypto ? styles.textActive : ''}`}>
        Dollar ($)
      </div>
      <DropDown
        isOpen={isOpen}
        closeHandler={() => setIsOpen(!isOpen)}
        onSelect={setActiveCoin}
      />
    </div>
  );
};

export default Selector;