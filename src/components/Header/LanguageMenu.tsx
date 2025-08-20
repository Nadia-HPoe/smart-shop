'use client';
import styles from './header.module.scss';

const languagesList = [
  {text: "English", code: "en"},
  {text: "German", code: "de"},
  {text: 'Russian', code: 'ru' },
  {text: 'Ukrainian', code: 'ua' },
  {text: 'French', code: 'fr' },
  {text: 'Italian', code: 'it' },
  {text: 'Spanish', code: 'es' },
]

type languagesProps = {
  onClick?: () => void;
}

const LanguageMenu: React.FC<languagesProps> = ({onClick}) => {
  return (
    <ul className={styles.language_list_wrapper}>
      {languagesList.map((list) => (
        <li onClick={onClick} className={styles.language_list} key={list.code}>{list.text}</li>
      ))}
    </ul>
  )
}

export default LanguageMenu