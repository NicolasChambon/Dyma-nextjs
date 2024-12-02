// Components
import Image from 'next/image'; // Specific next component for img
import Link from 'next/link';

// Types
import { Movie } from '@/interfaces/movies';

// Styles
import styles from './MediaCard.module.scss';

const MediaCard = ({ media }: { media: Movie }): JSX.Element => {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average.toFixed(1)}</p>
          <h3>{media.title}</h3>
          <p>Le {new Date(media.release_date).toLocaleDateString('fr-FR')}</p>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
