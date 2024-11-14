import MediaCard from '@/components/media-card/MediaCard';
import styles from './page.module.scss';

const Home = () => {
  return (
    <div className={styles.main}>
      <MediaCard />
    </div>
  );
};

export default Home;
