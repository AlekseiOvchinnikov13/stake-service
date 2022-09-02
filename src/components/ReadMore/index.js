import PropTypes from 'prop-types';
import Arrow from '../Arrow';
import styles from '../../styles/components/ReadMore.module.scss';
import {blueColor} from '../../styles/variables.module.scss';

const ReadMore = ({onClick, textOpen, isOpen, className}) => {
  return (
    <button
      className={`${styles.readMore} ${className} ${isOpen ? styles.readMoreOpen : ''}`}
      onClick={onClick}
    >
      {!isOpen && textOpen}
      {isOpen && 'Show less'}
      <Arrow
        isLong={false}
        direction={isOpen ? 'up' : 'down'}
        fillColor={blueColor}
        className={styles.arrow}
      />
    </button>
  );
};

ReadMore.propTypes = {
  onClick: PropTypes.func,
  textOpen: PropTypes.string,
  textClose: PropTypes.string,
  isOpen: PropTypes.bool
};

ReadMore.defaultProps = {
  textOpen: 'Read more',
};

export default ReadMore;
