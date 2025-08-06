import Image from 'next/image';
import styles from './header.module.scss';
import { navigationItems } from '@/constants/GetNavigationItems';
import Link from 'next/link';

const ModalWindow = ({ isModal, closeModal }: { isModal: boolean; closeModal: () => void }) => {
  if (!isModal) {
    return null;
  }
  return (
    <div className={styles.modalWindow}>
      <button className={styles.closeModal} onClick={closeModal}>
        <Image src='/images/header/close.svg' alt='Close navigation menu' width={40} height={40} />
      </button>
      <ul className={styles.modalNav}>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalWindow;
