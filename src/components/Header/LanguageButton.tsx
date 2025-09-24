'use client';
import { createRef, Ref  } from 'react';
import Image from 'next/image'
import styles from './header.module.scss';
import LanguageMenu  from './LanguageMenu';
import { useMediaQuery } from 'react-responsive';
import { languagesList } from '@/constants/GetLanguageData';

type LanguageButtonProps = {
  className?: string
  onClick: () => void;
  isOpenLanguage?: boolean;
};

const LanguageButton: React.FC<LanguageButtonProps> = ({isOpenLanguage, onClick, className}) => {
const isMobile = useMediaQuery({maxWidth:743})
const languageMenuRef: Ref<HTMLUListElement> = createRef();


  return (
    <div className={`${isMobile ? styles.button_wrapper_mobile : styles.button_wrapper}`}>
        <Image
            className={className}
            onClick={onClick}
            src='/images/header/languages.svg'
            alt='languages'
            width={44}
            height={44}
      />
      {isOpenLanguage && <LanguageMenu ref={languageMenuRef}
              menu={languagesList} /> }
    </div>

  )
}

export default LanguageButton
