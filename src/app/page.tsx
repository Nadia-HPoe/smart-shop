import FAQ from '@/components/FAQ/FAQ';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Story from '@/components/OurStory/Story';
import Advantages from '@/components/Advantages/Advantages';
<<<<<<< HEAD
import Banner2 from '@/components/Banner2/Banner2';
import Competitors from '@/components/Competitors/Competitors';
=======
>>>>>>> 10a146366377ac48b44d618c9046f0d27f93d28e

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <Competitors />
        <Banner2 />
        <FAQ />
        <Advantages />
        <Story />
      </div>
    </>
  );
}
