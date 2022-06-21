import styles from '../../styles/components/ProjectCard.module.scss';
import ImageContainer from '../ImageContainer';
import Link from 'next/link';
import Arrow from '../Arrow';

const ProjectCard = ({data: {img, coinName, percent, isSoon, id}}) => {
  const isHasApy = !!percent;

  return (
    <div className={styles.projectCard}>
      <ImageContainer
        src={img}
        className={styles.image}
        alt={coinName}
      />
      <p className={styles.label}>{coinName}</p>
      {!isSoon &&
        <p
          className={styles.percent}
          dangerouslySetInnerHTML={{
            __html: percent
          }}
        />}
      {!isSoon && <p className={styles.reward}>{`Nominal Reward ${isHasApy ? 'APY' : '(soon)'}`}</p>}
      {isSoon && <p className={styles.soon}>soon</p>}
      <Link href={`/projects/${id}`}>
        <a className={styles.link}>
          explore
          <Arrow className={styles.arrow}/>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;