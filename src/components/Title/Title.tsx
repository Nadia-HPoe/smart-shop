import styles from './title.module.scss';

type Props = {
  title: React.ReactNode;
};

function Title({ title }: Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default Title;
