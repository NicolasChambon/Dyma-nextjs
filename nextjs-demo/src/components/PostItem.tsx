import './PostItem.scss';
import PostAction from './PostAction';

export interface Post {
  id: string;
  title: string;
  isDone: boolean;
}

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div
      className="post"
      style={{ textDecoration: post.isDone ? 'line-through' : '' }}
    >
      <p>{post.title}</p>
      <PostAction post={post} />
    </div>
  );
};

export default PostItem;
