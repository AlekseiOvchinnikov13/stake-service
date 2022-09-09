import PropTypes from 'prop-types';

import styles from '../../styles/components/Text.module.scss';

const Text = ({text, isDescription, className}) =>
  <p
    className={`${styles.paragraph} ${isDescription ? styles.description : ''} ${className}`}
    dangerouslySetInnerHTML={{
      __html: text
    }}
  />;

Text.propTypes = {
  text: PropTypes.string.isRequired,
  isDescription: PropTypes.bool
};

export default Text;