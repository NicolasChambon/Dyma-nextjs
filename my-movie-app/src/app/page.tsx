import MediaCard from '@/components/media-card/MediaCard';
import styles from './page.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <MediaCard mediaId={10} />
    </div>
  );
};

export default Home;
