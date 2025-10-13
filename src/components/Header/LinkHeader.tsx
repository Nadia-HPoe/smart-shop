'use client';

import { useEffect, useState } from 'react';
import { navigationItems } from '@/constants/GetNavigationItems';
import Link from 'next/link';
import LanguageButton from './LanguageButton';
import styles from './header.module.scss';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useTranslations } from 'next-intl';

type LinkHeaderProps = {
  className?: string;
  isOpenBurger: boolean;
  isOpenLanguage?: boolean;
  onClickBurger?: () => void;
  onClick?: () => void | undefined;
};

const LinkHeader: React.FC<LinkHeaderProps> = ({
  className,
  isOpenBurger,
  onClick,
  onClickBurger,
  isOpenLanguage,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isDesktop = useMediaQuery({ minWidth: 1100 });
  const isMobile = useMediaQuery({ maxWidth: 743 });

  const t = useTranslations('header');

  if (!isClient) {
    return (
      <ul className={className}>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{t(item.text)}</Link>
          </li>
        ))}
      </ul>
    );
  }

  if (isDesktop) {
    return (
      <ul className={className}>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{t(item.text)}</Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <>
        <div
          data-active={isOpenBurger}
          className={styles.overlay}
          onClick={onClickBurger}
        />
        <div data-active={isOpenBurger} className={styles.links_mobile}>
          <button onClick={onClickBurger} className={styles.links_close}>
            <Image
              src="/images/header/close.svg"
              alt="Close navigation menu"
              width={40}
              height={40}
            />
          </button>
          {isMobile && (
            <LanguageButton
              isOpenLanguage={isOpenLanguage}
              onClick={onClick as () => void | undefined}
            />
          )}
          <ul className={styles.links_mobile_list}>
            {navigationItems.map((item) => (
              <li onClick={onClickBurger} key={item.id}>
                <Link href={item.href}>{t(item.text)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
};

export default LinkHeader;
