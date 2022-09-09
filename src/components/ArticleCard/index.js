import PropTypes from 'prop-types';
import ImageContainer from '../ImageContainer';
import Arrow from '../Arrow';
import {POST_TITLE_HOW_TO_STAKE} from '../../data/projects';

import styles from '../../styles/components/ArticleCard.module.scss';
import {orangeColor} from '../../styles/variables.module.scss';

const ArticleCard = ({
  data: {
    postTitle,
    articleSubtitle,
    sourceLink,
    img,
    isSoon,
    isIntro
  },
  name,
  symbol
}) => (
  <div className={styles.articleCard}>
    <div className={styles.articleHeader}>
      <ImageContainer
        className={styles.image}
        src={img}
        alt={articleSubtitle}
      />
      <div className={styles.textWrapper}>
        <p className={styles.title}>{isIntro ? 'INTRODUCTORY ARTICLE' : POST_TITLE_HOW_TO_STAKE(symbol)}</p>
        <p className={styles.subtitle}>
          {articleSubtitle ? articleSubtitle : name}
        </p>
      </div>
    </div>
    <div className={styles.articleContent}>
      <p className={styles.title}>{!isSoon ? postTitle : 'Soon'}</p>
      <a className={styles.source} href="https://medium.com/stake-service" target="_blank" rel="noreferrer">
        medium.com
      </a>
      {!isSoon &&
        <a className={styles.link} href={sourceLink} target="_blank" rel="noreferrer">
          see explained
          <Arrow
            className={styles.arrow}
            fillColor={orangeColor}
          />
        </a>
      }
    </div>
  </div>
);

ArticleCard.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string,
};

export default ArticleCard;