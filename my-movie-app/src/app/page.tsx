import Genres from '@/components/genres/Genres';
import styles from './page.module.scss';
import Popular from '@/components/Popular/Popular';

const Home = () => {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
};

export default Home;
