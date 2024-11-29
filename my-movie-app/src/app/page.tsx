import styles from './page.module.scss';
import Popular from '@/components/popular/Popular';

const Home = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  );
};

export default Home;
