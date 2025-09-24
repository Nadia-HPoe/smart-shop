import { forwardRef } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';

import styles from './header.module.scss';



// const languagesList = [
//   {text: "English", locale: "en"},
//   {text: "German", locale: "de"},
//   {text: 'Russian', locale: 'ru' },
//   {text: 'Ukrainian', locale: 'ua' },
//   {text: 'French', locale: 'fr' },
//   {text: 'Italian', locale: 'it' },
//   {text: 'Spanish', locale: 'es' },
// ]
type MenuItem = { text: string; code: string };

type Props = {
  menu: MenuItem[];
  onClick?: () => void;
}

const LanguageMenu = forwardRef<HTMLUListElement, Props>(function LanguageMenu(
  { menu },
  ref
) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: React.MouseEvent<HTMLLIElement>) => {
    const nextLocale = event.currentTarget.dataset.code as Locale;
    router.replace({ pathname }, { locale: nextLocale });
  };


  return (
    <ul ref={ref} className={styles.language_list_wrapper}>
      {menu.map(({ text, code }) => (
                <li key={code} data-code={code} className={styles.language_list} onClick={handleChange}>
          {text}
        </li>
      ))}
    </ul>
  );
});
//  <Link href={list.locale as any} className={styles.language_list} key={list.locale}>{list.text}</Link>
export default LanguageMenu
