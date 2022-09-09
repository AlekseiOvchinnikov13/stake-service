import {getAllCategories} from '../../helpers/helpers';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import usePosts from '../../hooks/usePosts';

import styles from '../../styles/components/Categories.module.scss';

const Categories = ({addHandle, delHandle}) => {
  const {data} = usePosts();

  return (
    <div className={styles.categories}>
      <p className={styles.title}>Categories</p>
      <div className={styles.tagsWrapper}>
        {getAllCategories(data).map(cat =>
          <Tag
            key={cat}
            isFilter
            label={cat}
            addHandle={addHandle}
            delHandle={delHandle}
            className={styles.tag}
          />
        )}
      </div>
    </div>
  );
};

Categories.propTypes = {
  addHandle: PropTypes.func,
  delHandle: PropTypes.func,
};

export default Categories;