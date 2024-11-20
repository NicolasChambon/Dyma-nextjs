'use client';
import { useState } from 'react';
import TestComopnent from './TestComponent';

const Like = (): JSX.Element => {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <button onClick={() => setLikes((likes) => likes + 1)}>
        Liked {likes} times
      </button>
      <TestComopnent />
    </div>
  );
};

export default Like;
