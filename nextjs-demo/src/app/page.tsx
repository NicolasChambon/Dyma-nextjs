import { prisma } from '@/lib/prisma';
import styles from './page.module.scss';
import PostItem, { Post } from '@/components/PostItem';

export default async function Home() {
  const posts: Array<Post> = await prisma.post.findMany();
  console.log(posts);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Ma todo-list</h1>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
