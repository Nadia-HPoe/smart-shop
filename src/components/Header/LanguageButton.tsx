'use client';

import { useEffect, useState, createRef, Ref } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import LanguageMenu from './LanguageMenu';
import { useMediaQuery } from 'react-responsive';
import { languagesList } from '@/constants/GetLanguageData';

type LanguageButtonProps = {
  className?: string;
  onClick: () => void;
  isOpenLanguage?: boolean;
};

const LanguageButton: React.FC<LanguageButtonProps> = ({
  isOpenLanguage,
  onClick,
  className,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 743 });

  // Only use media query result on client, otherwise false to avoid hydration mismatch
  const showMobile = isClient ? isMobile : false;

  const languageMenuRef: Ref<HTMLUListElement> = createRef();

  return (
    <div
      className={
        showMobile ? styles.button_wrapper_mobile : styles.button_wrapper
      }
    >
      <Image
        className={className}
        onClick={onClick}
        src="/images/header/languages.svg"
        alt="languages"
        width={44}
        height={44}
      />
      {isOpenLanguage && (
        <LanguageMenu ref={languageMenuRef} menu={languagesList} />
      )}
    </div>
  );
};

export default LanguageButton;
