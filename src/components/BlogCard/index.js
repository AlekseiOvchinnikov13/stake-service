import PropTypes from 'prop-types';
import Text from '../Text';
import {cleanText, dateTimeToDateFormat} from '../../helpers/helpers';
import LinkArrow from '../LinkArrow';
import ImageContainer from '../ImageContainer';
import Tag from '../Tag';
import styles from '../../styles/components/BlogCard.module.scss';
import {blueColor} from '../../styles/variables.module.scss';

const BlogCard = (
  {
    data: {
      thumbnail,
      title,
      description,
      link,
      pubDate,
      categories
    }
  }
) => (
  <div className={styles.blogCard}>
    <ImageContainer
      className={styles.img}
      src={thumbnail}
      alt={title}
      objectFit="contain"
      unoptimized
    />
    <div className={styles.textBlock}>
      <div className={styles.row}>
        {categories.length > 0 &&
          <Tag label={categories[0]}/>
        }
        <span>{dateTimeToDateFormat(pubDate)}</span>
      </div>
      <h5 className={styles.title}>{title}</h5>
      <Text
        text={cleanText(description)}
        isDescription
        className={styles.description}
      />
      <LinkArrow color={blueColor} label="Read more" to={link} className={styles.link}/>
    </div>
  </div>
);

BlogCard.propTypes = {
  data: PropTypes.object
};

export default BlogCard;