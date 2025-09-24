import Title from '../Title/Title';
import styles from './ourtariffs.module.scss';
import { tariffs } from '../../constants/GetTariffsData';
import Link from 'next/link';

export default function OurTariffs() {
  return (
    <section className={styles.tariffs_container} id='prices'>
      <Title title='OUR TARIFFS' />
      <div className={styles.ourTariffs}>
        <div className={styles.tableWrapper}>
          <p className={styles.price}>730e + VAT per month</p>

          <table className={styles.table}>
            <tbody>
              {tariffs.map((row) => (
                <tr key={row.id}>
                  <td>
                    <p className={styles.table_header}>
                      {row.left} <span>{row.left_star}</span>
                    </p>
                  </td>
                  <td>
                    <p className={styles.table_item}>
                      {row.right} <span>{row.right_star}</span>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>
            <span>*</span>Basic functionality is included in the price, additional and premium
            options may be paid
          </p>
        </div>
        <Link href='#contactus' className={styles.ourTariffsBtn}>
          Ask for discount
        </Link>
      </div>
    </section>
  );
}
