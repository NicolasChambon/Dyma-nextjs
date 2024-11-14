import Like from './Like';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentList = async (): Promise<JSX.Element> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  let comments: Array<Comment> = await response.json();
  comments = comments.slice(0, 20);
  console.log(comments);
  return (
    <div>
      {comments.map((comment: any) => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <Like />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
