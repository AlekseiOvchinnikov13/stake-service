import PropTypes from 'prop-types';
import Arrow from '../Arrow';

import styles from '../../styles/components/Button.module.scss';
import {whiteColor} from '../../styles/variables.module.scss';

const Button = ({label, onClick, className, asLink}) => (
  <>
    {asLink
      ? <a
        href={onClick}
        className={`${styles.button} ${className}`}
        target="_blank" rel="noreferrer"
      >
        {label}
        <Arrow
          fillColor={whiteColor}
          className={styles.arrow}
        />
      </a>
      : <button
        onClick={onClick}
        className={`${styles.button} ${className}`}
      >
        {label}
        <Arrow
          fillColor={whiteColor}
          className={styles.arrow}
        />
      </button>}
  </>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default Button;