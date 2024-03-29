import Menu from './-Menu';
import Logo from './-Logo';
import CalculatorButton from './-CalculatorButton';
import {isMobile} from '../../utils';
import {useEffect, useState} from 'react';

import styles from '../../styles/components/Header.module.scss';

const Header = () => {
  const [isMobileState, setIsMobileState] = useState(false);
  useEffect(() => {
    setIsMobileState(isMobile());
  }, [isMobile()]);

  return (
    <header className={`${styles.header} container`}>
      <Logo className={styles.logo}/>
      <Menu isMobile={isMobileState}/>
      {!isMobileState && <CalculatorButton/>}
    </header>
  );
};

export default Header;