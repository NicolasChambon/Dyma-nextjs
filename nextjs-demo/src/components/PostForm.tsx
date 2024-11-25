'use client';

import { useRouter } from 'next/navigation';

import './PostForm.scss';

const PostForm = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');

    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title
      })
    }).then(() => router.refresh());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-text"
        type="text"
        name="title"
        placeholder="votre titre"
      />
      <input className="form-submit" type="submit" value="Ajouter" />
    </form>
  );
};

export default PostForm;
