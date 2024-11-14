import CommentList from '@/components/CommentList';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Composants serveurs / clients</h1>
        <CommentList />
      </div>
    </main>
  );
}
