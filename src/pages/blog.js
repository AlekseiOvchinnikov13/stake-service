import SubTitleBlock from '../components/SubTitleBlock';
import {useEffect, useState} from 'react';
import TextStroke from '../components/TextStroke';
import BlogCard from '../components/BlogCard';
import usePosts from '../hooks/usePosts';
import topImage from '/public/assets/images/top-bg.svg';
import {BLOG, BLOG_SUBTITLE} from '../data/home';
import {getAllCategories} from '../helpers/helpers';
import Categories from '../components/Categories';
import ImageContainer from '../components/ImageContainer';
import {useDispatch} from 'react-redux';
import {getPosts} from '../store/posts/postsSlice';
import Loader from '../components/Loader';

import styles from '../styles/pages/Blog.module.scss';

const Blog = () => {
  const {data: posts, status} = usePosts();

  const dispatch = useDispatch();
  useEffect(() => {
    posts?.length < 1 && dispatch(getPosts());
  }, [dispatch, posts?.length]);

  const [activeCategories, setActiveCategories] = useState([]);
  const [activePosts, setActivePosts] = useState(posts);

  const addCategory = cat => {
    setActiveCategories(activeCategories.concat(cat));
  };

  const delCategory = cat => {
    setActiveCategories(activeCategories.filter(el => el !== cat));
  };

  const getActivePosts = () => {
    const res = posts.reduce((acc, item) => {
      const cardCategories = item.categories;
      if (cardCategories.some(cat => activeCategories.includes(cat))) {
        acc.push(item);
      }
      return acc;
    }, []);
    setActivePosts(res);
  };

  useEffect(() => {
    if (activeCategories.length === 0) {
      setActivePosts(posts);
    } else {
      getActivePosts();
    }
  }, [activeCategories, posts]);

  return (
    <div className={styles.blogPage}>
      <ImageContainer
        src={topImage}
        alt="blog top background"
        className={styles.topBg}
      />
      <div className={styles.header}>
        <div className={styles.mainBlock}>
          <SubTitleBlock
            title={BLOG}
            isBlueStick
            className={styles.title}
          />
          {getAllCategories(posts).length > 0 && status === 'success' &&
            <Categories
              addHandle={addCategory}
              delHandle={delCategory}
            />}
        </div>
        <TextStroke
          text={BLOG_SUBTITLE}
          className={styles.stroke}
        />
      </div>
      <div className={styles.postsWrapper}>
        {activePosts?.length > 0 && status === 'success'
          ? activePosts.map(card =>
            <BlogCard data={card} key={card.title}/>)
          : <Loader/>
        }
      </div>
    </div>
  );
};

export default Blog;