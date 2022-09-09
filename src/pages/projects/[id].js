import {getCoinInfo} from '../api/api';
import {
  GET_REWARD_CALCULATOR_SUBTITLE,
  GET_STAKING_TUTORIAL_SUBTITLE,
  PROJECTS_DATA
} from '../../data/projects';
import {getMainDataByCoinInfo} from '../../helpers/helpers';
import TopBg from '/public/assets/images/project-bg.svg';
import ImageContainer from '../../components/ImageContainer';
import Button from '../../components/Button/Button';
import {useEffect, useState} from 'react';
import ReadMore from '../../components/ReadMore';
import InfoCard from '../../components/InfoCard';
import SectionTitles from '../../components/SectionTitles';
import ArticleCard from '../../components/ArticleCard';
import {isMobile} from '../../utils';
import Calculator from '../../components/Calculator';

import styles from '../../styles/pages/ProjectPage.module.scss';

const Project = ({project}) => {
  const {id} = project;
  const {data: mechanicsData, info, homepage, image} = getMainDataByCoinInfo(project);
  const {commonInfo, projectsPage} = PROJECTS_DATA.find(project => project.id === id);

  const [isParagraphOpen, setParagraphOpen] = useState(false);
  const paragraphReadMoreClickHandle = () =>
    setParagraphOpen(!isParagraphOpen);

  const [isMobileState, setIsMobileTate] = useState(false);
  useEffect(() => {
    setIsMobileTate(isMobile());
  }, [isMobile()]);

  const [mechanicsList, setMechanicsList] = useState([]);
  const [isMechanicsOpen, setMechanicsOpen] = useState(false);
  const mechanicsReadMoreClickHandle = () =>
    setMechanicsOpen(!isMechanicsOpen);

  useEffect(() => {
    setMechanicsList(Object.entries(mechanicsData));
  }, []);

  return (
    <>
      <div className={styles.projectPage}>
        <ImageContainer
          src={TopBg}
          alt="top circle"
          objectFit="fill"
          className={styles.ImageWrapper}
          priority
        />
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.headerDescription}>
              <a
                href={homepage}
                target="_blank"
                rel="noreferrer"
                className={styles.imgLink}
              >
                <ImageContainer
                  src={image.large}
                  alt={info.name}
                  placeholder={image.thumb}
                  className={styles.img}
                />
              </a>
              <div className={styles.descriptionBlock}>
                <h1 className={styles.title}>{info.name}</h1>
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: projectsPage.description.desc1
                  }}
                />
                {projectsPage.description.desc2 &&
                  <>
                    <p
                      className={`${styles.description} ${!isParagraphOpen ? styles.descriptionHidden : ''}`}
                      dangerouslySetInnerHTML={{
                        __html: projectsPage.description.desc2
                      }}
                    />
                    <ReadMore
                      className={styles.readMore}
                      isOpen={isParagraphOpen}
                      onClick={paragraphReadMoreClickHandle}
                    />
                  </>}
              </div>
            </div>
            <div className={styles.headerIndicators}>
              <div className={styles.indicatorWrapper}>
                <span className={styles.value}
                  dangerouslySetInnerHTML={{
                    __html: commonInfo.apy ? `${commonInfo.apy}&nbsp;%` : '-&nbsp;%'
                  }}
                />
                <span className={styles.subtitle}>Nominal Reward APY</span>
              </div>
              <div className={styles.indicatorWrapper}>
                <span className={styles.value}
                  dangerouslySetInnerHTML={{
                    __html: projectsPage.stakingCommissionValue ? projectsPage.stakingCommissionValue : '-&nbsp;%'
                  }}
                />
                <span className={styles.subtitle}>Staking Commission</span>
              </div>
              <Button
                label="Stake Now"
                asLink
                onClick={commonInfo.explorerLink}
                className={styles.stakeButton}
              />
              <span className={styles.indicator}>
                  Our Total Stake: {projectsPage.totalStakeValue}
              </span>
              <span className={styles.indicator}>
                  Delegators: {projectsPage.delegatorsValue ? projectsPage.delegatorsValue : '-'}
              </span>
            </div>
            <div className={`${styles.infoWrapper}`}>
              {Object.entries(projectsPage.basicInfoList).map(infoItem =>
                <InfoCard
                  key={infoItem[0]}
                  title={infoItem[0]}
                  value={infoItem[1]}
                  isAddress={infoItem[0] === 'Validator Address'}
                />
              )}
            </div>
          </div>
          <div className={`${styles.projectSection} ${styles.articleSection}`}>
            <SectionTitles
              title={`${info.name} STAKING TUTORIAL`}
              subtitle={GET_STAKING_TUTORIAL_SUBTITLE(info.symbol)}
              classNameTitle="tutorial__title"
              classNameSubtitle="tutorial__subtitle"
            />
            <div className={styles.articleWrapper}>
              {projectsPage.articleLinks.map(article =>
                <ArticleCard
                  data={article}
                  key={`${info.symbol} ${article.sourceLink}`}
                  name={info.name}
                  symbol={info.symbol}
                />
              )}
            </div>
          </div>
          <div
            className={`${styles.projectSection} ${styles.mechanicsSection} ${isMechanicsOpen ? styles.mechanicsSectionOpen : ''}`}>
            <SectionTitles
              title={`${info.name} STAKING MECHANICS`}
            />
            <div className={styles.infoWrapper}>
              {mechanicsList && mechanicsList.map(([title, value]) =>
                <InfoCard
                  title={title}
                  value={value?.toFixed(2)}
                  key={title}
                  isMechanics
                />
              )}
            </div>
            {isMobileState &&
              <ReadMore
                isOpen={isMechanicsOpen}
                onClick={mechanicsReadMoreClickHandle}
                textOpen={'See All'}
                className={styles.readMoreMechanics}
              />
            }
          </div>
          {info.current_price && commonInfo.apy &&
            <div className={`${styles.projectSection}`}>
              <SectionTitles
                title={`${info.name} REWARDS CALCULATOR`}
                subtitle={GET_REWARD_CALCULATOR_SUBTITLE(info.name)}
              />
              <Calculator
                projectId={id}
                info={info}
                onButtonClick={commonInfo.explorerLink}
              />
            </div>}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = PROJECTS_DATA.map(project => {
    return {
      params: {id: project.id}
    };
  });
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const data = await getCoinInfo(id);

  return {
    props: {
      project: data
    }
  };
};

export default Project;