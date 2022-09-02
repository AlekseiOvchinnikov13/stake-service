import PropTypes from 'prop-types';
import styles from '../../styles/components/SectionTitle.module.scss';

const SectionTitles = ({title, subtitle}) => (
  <div className={styles.titlesWrapper}>
    <h5 className={styles.sectionTitle}>{title}</h5>
    {subtitle && <h6 className={styles.sectionSubtitle}>{subtitle}</h6>}
  </div>
);

SectionTitles.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionTitles;