import Link from 'next/link';
import LogoSvg from './images/logo.svg';
import ImageContainer from '../../ImageContainer';

const Logo = ({className}) => (
  <Link href="/">
    <a>
      <ImageContainer
        className={className}
        src={LogoSvg}
        alt="logo"
      />
    </a>
  </Link>
);

export default Logo;