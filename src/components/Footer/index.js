import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} container`}>
      <h2>stake service &copy;&nbsp;2021-{currentYear}</h2>
    </footer>
  );
};

export default Footer;