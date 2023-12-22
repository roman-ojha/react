"use client";
import React, { useEffect, useState } from "react";

// Explanation: https://youtu.be/-yIsQPp31L0?t=2323
const PostBody = ({ id }: { id: number }) => {
  const [text, setText] = useState("");

  // According to id we will going to fetch the data
  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://dummyjson.com/posts/${id}`, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setText(data.body));

    return () => controller.abort();
  }, [id]);

  // NOTE: But these days we should try fetching data on server component
  // But if you want to fetch data into client component then you should use package like 'react-query' or 'swr' by vercel
  return <p>{text}</p>;
};

const HFetchingInUseEffect = (): React.JSX.Element => {
  const [id, setId] = useState(1);
  return (
    <div>
      <button onClick={() => setId(Math.floor(Math.random() * 100))}>
        Show me a different post
      </button>
      <PostBody id={id} />
    </div>
  );
};

export default HFetchingInUseEffect;
