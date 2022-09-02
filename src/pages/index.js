import {useEffect, useState} from 'react';
import {
  ABOUT_US, ABOUT_US_SUBTITLE, ABOUT_US_TEXT,
  WHAT_WE_DO_TEXT, OUR_BEGINNING_TEXT, RELIABLE_VALIDATOR,
  OUR_BEGINNING_SUBTITLE, WHAT_WE_DO,
  CALCULATOR_STROKE_TEXT, CALCULATOR_TITLE,
  BLOG, BLOG_SUBTITLE, CONTACT, CONTACT_TEXT,
  CONTACT_SUBTITLE, OUR_CONTACT, CONTACTS_SUBTITLE,
} from '../data/home';
import {isMobile} from '../utils';
import topImage from '/public/assets/images/top-bg.svg';
import bottomImage from '/public/assets/images/footer-bg.svg';
import middleImage from '/public/assets/images/middle-bg.svg';
import Loader from '../components/Loader';
import ProjectCard from '../components/ProjectCard';
import ImageContainer from '../components/ImageContainer';
import SubTitleBlock from '../components/SubTitleBlock';
import TextStroke from '../components/TextStroke';
import LinkArrow from '../components/LinkArrow';
import BlogCard from '../components/BlogCard';
import Calculator from '../components/Calculator';
import ContactForm from '../components/ContactForm';
import Contacts from '../components/Contacts';
import {PROJECTS_DATA} from '../data/projects';
import {useGetProjectsQuery} from '../store/projects/projectsApi';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../store/posts/postsSlice';
import {sliceArrayByCount} from '../helpers/helpers';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  const {data, isLoading} = useGetProjectsQuery(PROJECTS_DATA.map(item => item.id));
  const {data: posts, status} = useSelector(state => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  /* const [isMobileState, setIsMobileTate] = useState(false);
  useEffect(() => {
    setIsMobileTate(isMobile());
  }, [isMobile()]);*/

  /*const [countPosts, setCountPosts] = useState(0);
  useEffect(() => {
    if (!isBrowser()) return;
    setCountPosts(4);
  }, [isBrowser()]);*/

  return (
    <>
      <div className={`${styles.section} ${styles.headSection}`}>
        <p className={styles.subTitle}>trusted & secure</p>
        <h1 className={styles.title}>validator</h1>
      </div>
      <div id="project" className={`${styles.section} ${styles.projectSection}`}>
        <div className={styles.cardsWrapper}>
          {!isLoading && data.length > 0
            ? data.map(coin =>
              <ProjectCard key={coin.id} data={coin}/>)
            : <Loader/>}
        </div>
        {/*{isMobileState &&
          <ReadMore
            onClick={() => setIsProjectOpen(!isProjectWrapperOpen)}
            textClose={READ_MORE_TEXT_SEE_ALL_CLOSE}
            textOpen={READ_MORE_TEXT_SEE_ALL_OPEN}
            isOpen={isProjectWrapperOpen}
          />}*/}
      </div>
      <div id="about-us" className={`${styles.aboutSection} ${styles.section}`}>
        <div className={styles.about}>
          <SubTitleBlock
            label={ABOUT_US}
            title={ABOUT_US_SUBTITLE}
            text={ABOUT_US_TEXT}
            isBlueStick
          />
          <TextStroke
            text={ABOUT_US}
            position="rightCenter"
          />
        </div>
        <TextStroke
          text={RELIABLE_VALIDATOR}
          position="center"
          textCase="upper"
          className={styles.reliableValidator}
        />
        <div className={styles.beginnings}>
          <SubTitleBlock
            title={OUR_BEGINNING_SUBTITLE}
            text={OUR_BEGINNING_TEXT}
            isOnRight={!isMobileState}
            isBlueStick={isMobileState}
          />
        </div>
        <div className={styles.whatWeDo}>
          <SubTitleBlock
            label={WHAT_WE_DO}
            text={WHAT_WE_DO_TEXT}
            isBlueStick
          />
          <TextStroke
            text={WHAT_WE_DO}
            position="rightUp"
          />
        </div>
        <ImageContainer
          src={middleImage}
          alt="middle circle"
          className={styles.middleImage}
          objectFit="cover"
        />
      </div>
      <div id="blog" className={`${styles.blogSection} ${styles.section}`}>
        <div className={styles.blogHeader}>
          <SubTitleBlock
            label={BLOG}
            Component={LinkArrow}
            isBlueStick
          />
          <TextStroke
            text={BLOG_SUBTITLE}
            position="rightCenter"
          />
        </div>
        <div className={styles.blogCardsWrapper}>
          {posts?.length > 0 && status === 'success'
            ? sliceArrayByCount(4, posts).map(card =>
              <BlogCard data={card} key={card.title}/>)
            : <Loader/>
          }
        </div>
      </div>
      <div id="calculator" className={`${styles.calcSection} ${styles.section}`}>
        <div className={styles.calcHeader}>
          <SubTitleBlock
            label={CALCULATOR_TITLE}
            isBlueStick
          />
          <TextStroke
            text={CALCULATOR_STROKE_TEXT}
            position="rightBottom"
            className={styles.stroke}
          />
        </div>
        {data && !isLoading
          ? <Calculator/>
          : <Loader/>
        }
      </div>
      <div id="contact" className={`${styles.contactSection} ${styles.section}`}>
        <div className={styles.contactHeader}>
          <SubTitleBlock
            label={CONTACT}
            text={CONTACT_TEXT}
            isBlueStick
            className={styles.SubTitleBlock}
          />
          <TextStroke
            text={CONTACT_SUBTITLE}
            position={'rightUp'}
            className={styles.stroke}
          />
        </div>
        <div className={styles.contactForm}>
          <ContactForm/>
        </div>
      </div>
      <div id="contacts" className={`${styles.contactsSection} ${styles.section}`}>
        <div className={styles.contactsHeader}>
          <SubTitleBlock
            label={OUR_CONTACT}
            isBlueStick
            Component={Contacts}
            className={styles.SubTitleBlock}
          />
          <TextStroke
            text={CONTACTS_SUBTITLE}
            position={'rightCenter'}
            className={styles.stroke}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <ImageContainer
          src={topImage}
          alt="top circle"
          className={styles.topImage}
          objectFit="cover"
        />
        <ImageContainer
          src={bottomImage}
          alt="bottom circle"
          className={styles.bottomImage}
          objectFit="cover"
          priority
        />
      </div>
    </>
  );
};

export default Home;