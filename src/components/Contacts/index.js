import {CONTACT_LINKS} from '../../data/home';
import ImageContainer from '../ImageContainer';

import styles from '../../styles/components/Contacts.module.scss';

const Contacts = () =>
  <div className={styles.contacts}>
    {CONTACT_LINKS.map(({href, img, label}) =>
      <a
        key={label}
        href={href}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        <ImageContainer
          src={img}
          alt={label}
          className={styles.img}
        />
        <span className={styles.text}>{label}</span>
      </a>
    )}
  </div>;
 
export default Contacts;