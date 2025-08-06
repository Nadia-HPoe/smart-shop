'use client';

import Image from 'next/image';
import styles from './header.module.scss';
import Navbar from './Navbar';
import ModalWindow from './ModalWindow';
import BurgerNav from './BurgerNav';
import { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isModal, setIsModal] = useState<boolean>(false);

  const openModal = () => {
    if (isModal === false) {
      setIsModal(true);
    }
  };

  const closeModal = () => {
    if (isModal === true) {
      setIsModal(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Image
          className={styles.headerLogo}
          src='/images/logo.png'
          alt='logo'
          width={135}
          height={62}
        />
        <Navbar />
      </div>
      <div className={styles.headerActions}>
        <Link href='#contactus' className={styles.headerBtn}>
          Ask for free month
        </Link>
        <BurgerNav openModal={openModal} />
      </div>
      <ModalWindow isModal={isModal} closeModal={closeModal} />
    </header>
  );
}

export default Header;
