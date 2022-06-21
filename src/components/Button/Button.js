import PropTypes from 'prop-types';
import Arrow from '../Arrow';
import styles from '../../styles/components/Button.module.scss';
import {whiteColor} from '../../styles/variables.module.scss';

const Button = ({label, onClick, className}) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${className}`}
  >
    {label}
    <Arrow fillColor={whiteColor}/>
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;