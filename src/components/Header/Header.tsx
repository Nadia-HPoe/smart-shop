'use client';

import Image from 'next/image';
import styles from './header.module.scss';
import LanguageButton from './LanguageButton';
import LinkHeader from './LinkHeader';
import ButtonHeader from './ButtonHeader';
import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useTranslations } from 'next-intl';
// import { languagesList } from '@/constants/GetLanguageData';

function Header() {
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState<boolean>(false);
  const isDesktop = useMediaQuery({minWidth:1099})
  const isTablet = useMediaQuery({minWidth:743, maxWidth:1099})

  const handleToggleBurger = () => setIsOpenBurger((prev:boolean) => !prev)
  const handleToggleLanguage = () => setIsOpenLanguage((prev:boolean) => !prev)
  const t = useTranslations("header")

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
      </div>
      <LinkHeader
        onClick={handleToggleLanguage}
        onClickBurger={handleToggleBurger}
        isOpenLanguage={isOpenLanguage}
        isOpenBurger={isOpenBurger}
        className={styles.links_desktop}
      />
      <div className={styles.headerActions}>
        <div  className={styles.dropdown}>
          {isDesktop && <LanguageButton isOpenLanguage={isOpenLanguage} className={styles.languages_icon_desktop} onClick={handleToggleLanguage}/>}
        </div>
        <Link href='#contactus' className={styles.headerBtn}>
          {t('button')}
        </Link>
      {isTablet && <LanguageButton isOpenLanguage={isOpenLanguage} className={styles.languages_icon_mobile}  onClick={handleToggleLanguage}/>}
      <ButtonHeader className={styles.burger_mobile} onClick={handleToggleBurger} />
      </div>
    </header>
  );
}

export default Header;
