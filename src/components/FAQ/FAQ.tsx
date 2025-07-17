import Title from '../Title/Title';
import styles from './faq.module.scss';
import { faqItems } from '@/constants/GetFAQItems';

function FAQ() {
  return (
    <section className={styles.faq} id='faq'>
      <Title title='FAQ' />
      <div className={styles.wrapper}>
        {faqItems.map(({ question, answer }, i) => {
          const number = i + 1;
          return (
            <div key={number} className={styles.question}>
              <div className={styles.text_and_button}>
                <p className={`${styles.text} ${styles.question_text}`}>{`${question}`}</p>
                <label htmlFor={`${number}check`} className={styles.button}>
                  <input type='checkbox' id={`${number}check`} />
                </label>
              </div>
              <p className={`${styles.text} ${styles.answer_text}`}>{answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
