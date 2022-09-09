import PropTypes from 'prop-types';
import Text from '../Text';

import styles from '../../styles/components/SubTitleBlock.module.scss';
import {blueColor} from '../../styles/variables.module.scss';

const SubTitleBlock = ({label, title, text, Component, isBlueStick, isOnRight, className}) =>
  <div
    className={`${styles.subtitleWrapper} ${isBlueStick ? styles.blueStick : ''} ${isOnRight ? styles.onRight : ''} ${className}`}>
    {label && <span>{label}</span>}
    {title && <h6>{title}</h6>}
    {text && <Text text={text}/>}
    {Component && <Component color={blueColor} className={styles.linkArrow}/>}
  </div>;

SubTitleBlock.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  Component: PropTypes.func,
  isBlueStick: PropTypes.bool
};

export default SubTitleBlock;