import Image from 'next/image';
import styles from './header.module.scss';

const BurgerNav = ({ openModal }: { openModal: () => void }) => {
  return (
    <button onClick={openModal} className={styles.burgerNavButton}>
      <Image
        className={styles.burgerNav}
        src='/images/header/menu.svg'
        alt='Open navigation menu'
        width={40}
        height={40}
      />
    </button>
  );
};

export default BurgerNav;
