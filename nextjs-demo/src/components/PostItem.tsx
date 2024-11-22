import './PostItem.scss';

export interface Post {
  id: string;
  title: string;
  isDone: boolean;
}

const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className="post">
      <p>{post.title}</p>
    </div>
  );
};

export default PostItem;
