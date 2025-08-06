import Image from 'next/image';
import styles from './profit.module.scss';
import Title from '../Title/Title';

function Profit() {
  return (
    <section>
      <Title
        title={
          <>
            more profit <br />
            more sales <br />
            more repeat orders
          </>
        }
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image
            src='/images/profit/profit.png'
            alt='profit'
            width={276}
            height={268}
            className={styles.image}
          />
          <p className={styles.subtitle}>increase in profit</p>
        </div>
        <Image
          src='/images/profit/seekbar.png'
          alt='seekbar'
          width={628}
          height={125}
          className={styles.seekbar}
        />
        <Image
          src='/images/profit/seekbar_mobile.png'
          alt='seekbar'
          width={218}
          height={84}
          className={styles.seekbar_mobile}
        />
        <div className={styles.wrapper}>
          <Image
            src='/images/profit/trade_turnover.png'
            alt='trade'
            width={276}
            height={268}
            className={styles.image}
          />
          <p className={styles.subtitle}>increase in trade turnover</p>
        </div>
      </div>
    </section>
  );
}

export default Profit;
