import FAQ from '@/components/FAQ/FAQ';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Story from '@/components/OurStory/Story';
import Advantages from '@/components/Advantages/Advantages';
import Banner2 from '@/components/Banner2/Banner2';
import Competitors from '@/components/Competitors/Competitors';
import News from '@/components/News/News';

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
        <News />
      </div>
    </>
  );
}
