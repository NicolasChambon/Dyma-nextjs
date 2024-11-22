import { prisma } from '@/lib/prisma';
import styles from './page.module.scss';
import PostItem, { Post } from '@/components/PostItem';
import PostForm from '@/components/PostForm';

export default async function Home() {
  const posts: Array<Post> = await prisma.post.findMany();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Ma todo-list</h1>
        <PostForm />
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
