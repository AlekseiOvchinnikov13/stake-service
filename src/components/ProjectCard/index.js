import ImageContainer from '../ImageContainer';
import Link from 'next/link';
import Arrow from '../Arrow';
import {PROJECTS_DATA} from '../../data/projects';
import styles from '../../styles/components/ProjectCard.module.scss';

const ProjectCard = ({data : {image, name, id}}) => {
  const {commonInfo: {apy}} = PROJECTS_DATA.find(project => project.id === id);

  return (
    <div className={styles.projectCard}>
      <ImageContainer
        src={image}
        className={styles.image}
        alt={name}
      />
      <p className={styles.label}>{name}</p>
      <p className={`${apy ? styles.percent : styles.soon}`}>
        {apy ? `${apy} %` : 'soon'}
      </p>
      <p className={styles.reward}>Nominal Reward APY</p>
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