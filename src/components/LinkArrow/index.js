import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../../styles/components/LinkArrow.module.scss';
import Arrow from '../Arrow';

const LinkArrow = ({to, label, className, color}) => {
  const isNav = to.startsWith('/');

  return (
    <>
      {isNav
        ? (<Link href={to}>
          <a className={`${styles.linkArrow} ${className}`}>
            {label}
            <Arrow isLong={false} className={styles.arrow} fillColor={color}/>
          </a>
        </Link>)
        : (<a className={`${styles.linkArrow} ${className}`} target="_blank" href={to} rel="noreferrer">
          {label}
          <Arrow isLong={false} className={styles.arrow} fillColor={color}/>
        </a>)
      }
    </>
  );
};

LinkArrow.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  isOpenNewPage: PropTypes.bool
};

LinkArrow.defaultProps = {
  label: 'See All',
  to: '/blog'
};

export default LinkArrow;