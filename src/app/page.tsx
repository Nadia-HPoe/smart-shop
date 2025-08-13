import FAQ from '@/components/FAQ/FAQ';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Story from '@/components/OurStory/Story';
import Advantages from '@/components/Advantages/Advantages';
import Banner2 from '@/components/Banner2/Banner2';
import Competitors from '@/components/Competitors/Competitors';
import News from '@/components/News/News';
import ToolsSlide from '@/components/ToolsSlide/ToolsSlide';
import Banner from '@/components/Banner/Banner';

import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import OurTariffs from '@/components/OurTariffs/OurTariffs';
import Profit from '@/components/Profit/Profit';
import Products from '@/components/Products/Products';

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <Banner />
        <ToolsSlide />
        <Profit />
        <OurTariffs />
        <Competitors />
        <Banner2 />
        <FAQ />
        <Advantages />
        <Story />
        <News />
        <Products />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
