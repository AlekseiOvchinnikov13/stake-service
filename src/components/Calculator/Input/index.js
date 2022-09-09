import PropTypes from 'prop-types';

import styles from '../../../styles/components/Input.module.scss';

const Input = ({
  coin,
  isActive,
  value,
  setValue
}) =>
  <div className={`${styles.input} ${isActive ? styles.inputActive : ''}`}>
    <input
      type="number"
      step="any"
      min="0"
      onChange={setValue}
      value={value}
      readOnly={!isActive}
    />
    <span>{`(${coin})`}</span>
  </div>;
 
Input.propTypes = {
  coin: PropTypes.string,
  isActive: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
};

export default Input;