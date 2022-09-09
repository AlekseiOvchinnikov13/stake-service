import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {isMobile} from '../../utils';

import styles from '../../styles/components/TextStroke.module.scss';

const TextStroke = ({text, position, textCase, className}) => {
  const [isMobileState, setIsMobileState] = useState(false);

  useEffect(() => {
    setIsMobileState(isMobile());
  }, [isMobile()]);

  const [textDecoration, setTextDecoration] = useState('');
  const [positionClass, setPositionClass] = useState('');

  useEffect(() => {
    switch (textCase) {
    case 'upper':
      setTextDecoration(styles.uppercase);
      break;
    case 'lowercase':
      setTextDecoration(styles.lowercase);
    }
  }, [textCase]);

  useEffect(() => {
    switch (position) {
    case 'center':
      setPositionClass(styles.center);
      break;
    case 'rightCenter':
      setPositionClass(styles.rightCenter);
      break;
    case 'rightUp':
      setPositionClass(styles.rightUp);
      break;
    case 'rightBottom':
      setPositionClass(styles.rightBottom);
    }
  }, [position]);

  if (isMobileState && position !== 'center') return null;

  return (
    <p className={`${styles.textStroke} ${textDecoration} ${positionClass} ${className}`}>
      {text}
    </p>
  );
};

TextStroke.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  textCase: PropTypes.oneOf(['upper', 'lower']),
  position: PropTypes.oneOf(['center', 'rightCenter', 'rightUp', 'rightBottom'])
};

export default TextStroke;