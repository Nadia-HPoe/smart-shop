import Image from 'next/image';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Image src='/images/logo.png' alt='logo' width={135} height={62} />
    </header>
  );
}

export default Header;
