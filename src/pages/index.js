import {useEffect, useState} from 'react';
import {
  ABOUT_US, ABOUT_US_SUBTITLE, ABOUT_US_TEXT,
  WHAT_WE_DO_TEXT, OUR_BEGINNING_TEXT,
  PRODUCT_CARDS_ARRAY, RELIABLE_VALIDATOR,
  OUR_BEGINNING_SUBTITLE, WHAT_WE_DO,
  CALCULATOR_STROKE_TEXT, CALCULATOR_TITLE,
  BLOG, BLOG_SUBTITLE, CONTACT, CONTACT_TEXT,
  CONTACT_SUBTITLE, OUR_CONTACT, CONTACTS_SUBTITLE,
} from '../data/home';

import {getCoinsMarkets, getFeeds} from './api/api';

import {sliceArrayByCount, transformFetchCoinData} from '../helpers/helpers';
import Contexts from '../components/Contexts';
import {isBrowser, isMobile} from '../utils';

import topImage from '/public/assets/images/top-bg.svg';
import bottomImage from '/public/assets/images/footer-bg.svg';
import middleImage from '/public/assets/images/what-we-do-bg.svg';

import Loader from '../components/Loader';
import ProjectCard from '../components/ProjectCard';
import ImageContainer from '../components/ImageContainer';

import SubTitleBlock from '../components/SubTitleBlock';
import TextStroke from '../components/TextStroke';
import LinkArrow from '../components/LinkArrow';
import BlogCard from '../components/BlogCard';
import Calculator from '../components/Calculator';

import styles from '../styles/pages/Home.module.scss';
import ContactForm from '../components/ContactForm';
import Contacts from '../components/Contacts';

const Home = ({coins, posts}) => {
  const [coinList, setCoinList] = useState([]);
  const [postList, setPostList] = useState();

  useEffect(() => {
    setCoinList(transformFetchCoinData(coins));
  }, [coins]);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const [isMobileState, setIsMobileTate] = useState(false);
  useEffect(() => {
    setIsMobileTate(isMobile());
  }, [isMobile()]);

  const [countPosts, setCountPosts] = useState(0);
  useEffect(() => {
    if (!isBrowser()) return;
    setCountPosts(4);
  }, [isBrowser()]);

  return (
    <Contexts coinList={coinList} postList={postList}>
      <section className={`${styles.section} ${styles.headSection}`}>
        <p className={styles.subTitle}>trusted & secure</p>
        <h1 className={styles.title}>validator</h1>
      </section>
      <section id="project" className={`${styles.section} ${styles.projectSection}`}>
        <div className={styles.cardsWrapper}>
          {coinList.length > 0
            ? coinList.map(coin =>
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
      </section>
      <section id="about-us" className={`${styles.aboutSection} ${styles.section}`}>
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
      </section>
      <section id="blog" className={`${styles.blogSection} ${styles.section}`}>
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
          {posts?.length > 0
            ? sliceArrayByCount(countPosts, posts).map(card =>
              <BlogCard data={card} key={card.title}/>)
            : <Loader/>
          }
        </div>
      </section>
      <section id="calculator" className={`${styles.calcSection} ${styles.section}`}>
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
        {coins.length > 0
          ? <Calculator/>
          : <Loader/>
        }
      </section>
      <section id="contact" className={`${styles.contactSection} ${styles.section}`}>
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
      </section>
      <section id="contacts" className={`${styles.contactsSection} ${styles.section}`}>
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
      </section>
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
    </Contexts>
  );
};

export async function getStaticProps() {
  const posts = await getFeeds();

  const projectsIds = PRODUCT_CARDS_ARRAY.reduce((acc, item) => acc.concat(item.id), []);
  const coins = await getCoinsMarkets(projectsIds);

  return {
    props: {
      posts,
      coins
    }
  };
}

export default Home;


{/*<section id="project" className="container">
        <div className="project-cards-wrapper">
          {coinsArray.length > 0
            ? coinsArray.map(card =>
              <ProjectViewCard key={card.coin} card={card}/>)
            : <Loader/>}
        </div>
        {isMobile() &&
          <ReadMore
            onClick={() => setIsProjectOpen(!isProjectWrapperOpen)}
            textClose={READ_MORE_TEXT_SEE_ALL_CLOSE}
            textOpen={READ_MORE_TEXT_SEE_ALL_OPEN}
            isOpen={isProjectWrapperOpen}
          />}
      </section>*/
}
{/*<section id="about-us" className="container">
        <div className="about-us-block">
          <SubTitleBlock
            label={ABOUT_US}
            title={ABOUT_US_SUBTITLE}
            text={ABOUT_US_TEXT}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={ABOUT_US} className="right-center"/>
          }
        </div>
        <div className="reliable-validator">
          <img src={WhatWeDoBg} alt="what we do background" className="reliable-validator__background"/>
          <TextStroke
            text={RELIABLE_VALIDATOR}
            className="center"
            isUpperCase
          />
          <SubTitleBlock
            title={OUR_BEGINNING_SUBTITLE}
            text={OUR_BEGINNING_TEXT}
            className={!isMobile() ? 'subtitle-block-right' : ''}
            isBlueStick={isMobile()}
          />
        </div>
        <div className="what-we-do">
          <SubTitleBlock
            label={WHAT_WE_DO}
            text={WHAT_WE_DO_TEXT}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={WHAT_WE_DO} className="right-up"/>
          }
        </div>
      </section>*/
}
{/*<section id="blog" className="container">
        <div className="blog-header">
          <SubTitleBlock
            label={BLOG}
            Component={LinkArrow}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={BLOG_SUBTITLE} className="right-center"/>
          }
        </div>
        <div className="blog-cards">
          {posts?.length > 0
            ? sliceArrayByCount(countPosts, posts).map(card =>
              <BlogCard data={card} key={card.title}/>)
            : <Loader/>
          }
        </div>
      </section>*/
}
{/*<section id="calculator" className="container">
        <div className="calculator-header">
          <SubTitleBlock
            label={CALCULATOR_TITLE}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke text={CALCULATOR_STROKE_TEXT} className="right-bottom"/>
          }
        </div>
        {coins.length > 0
          ? <Calculator/>
          : <Loader/>
        }
      </section>*/
}
{/*<section id="contact" className="container">
        {!isMobile() && <img src={FooterBg} alt="footer background" className="contact-footer__background"/>}
        <div className="contact-header">
          <SubTitleBlock
            label={CONTACT}
            text={CONTACT_TEXT}
            isBlueStick
          />
          {!isMobile() &&
            <TextStroke
              text={CONTACT_SUBTITLE}
              className="right-up"
              isNonCase
            />
          }
        </div>
        <div className="contact-form">
          <ContactForm/>
        </div>
        <div className="contact-footer">
          <SubTitleBlock
            label={OUR_CONTACT}
            isBlueStick
            Component={Contacts}
          />
          {!isMobile() &&
            <TextStroke
              text={CONTACTS_SUBTITLE}
              className="right-center"
              isNonCase
            />
          }
        </div>
      </section>*/
}