import Title from '../Title/Title';
import styles from './ourtariffs.module.scss';
import { tariffs } from '../../constants/GetTariffsData';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function OurTariffs() {
  const t = useTranslations('tariffs');
  return (
    <section className={styles.tariffs_container} id='prices'>
      <Title title={t('title')} />
      <div className={styles.ourTariffs}>
        <div className={styles.tableWrapper}>
          <p className={styles.price}>{t('subtitle')}</p>

          <table className={styles.table}>
            <tbody>
              {tariffs.map((row) => (
                <tr key={row.id}>
                  <td>
                    <p className={styles.table_header}>
                      {row.left ? t(row.left) : null} {row.left_star && <span>{row.left_star}</span>}
                    </p>
                  </td>
                  <td>
                    <p className={styles.table_item}>
                      {row.right ? t(row.right) : null} {row.right_star && <span>{row.right_star}</span>}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>
            <span>*</span>{t('text')}
          </p>
        </div>
        <Link href='#contactus' className={styles.ourTariffsBtn}>
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
