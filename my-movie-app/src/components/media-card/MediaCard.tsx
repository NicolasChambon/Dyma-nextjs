import Image from 'next/image';
import styles from './MediaCard.module.scss';
import Link from 'next/link';

const MediaCard = ({ mediaId }: { mediaId: number }): JSX.Element => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${mediaId}`}>
        <div className={styles.image}>
          <Image
            src="https://cinemadamgan.fr/wp-content/uploads/2023/03/CREED-III.jpg"
            alt="media title"
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>Creed III</h2>
          <p>Le 05/11/2024</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
