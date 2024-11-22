'use client';

import './PostForm.scss';

const PostForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');

    console.dir(title);
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
