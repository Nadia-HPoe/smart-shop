import { navigationItems } from '@/constants/GetNavigationItems';
import Link from 'next/link';
import styles from './header.module.scss';

const Navbar = () => {
  return (
    <ul className={styles.headerNav}>
      {navigationItems.map((item) => (
        <li key={item.id}>
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
