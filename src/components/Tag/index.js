import PropTypes from 'prop-types';
import {useState} from 'react';
import styles from '../../styles/components/Tag.module.scss';

const Tag = ({label, className, isFilter, addHandle, delHandle}) => {
  const [isActive, setActive] = useState(false);
  const onClickHandle = (e) => {
    !isActive ? addHandle(e) : delHandle(e);
    setActive(!isActive);
  };

  const classes = `${styles.tag} ${isFilter ? styles.tagFilterButton : ''} ${isActive ? styles.tagFilterActive : ''} ${className}`;

  return (
    <>
      {isFilter
        ? (<button
          className={classes}
          onClick={e => onClickHandle(e.target.value)}
          value={label}
        >
          {label}
        </button>)
        : <span className={classes}>{label}</span>
      }
    </>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  isFilter: PropTypes.bool,
  addHandle: PropTypes.func,
  delHandle: PropTypes.func,
  className: PropTypes.string
};

export default Tag;