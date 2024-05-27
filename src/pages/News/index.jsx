import useAxios from "../../hoocks/useAxios";
import { useState } from "react";
import BlogPost from "./BlogPost";

export default function News() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "title 1",
      body: "body 1",
    },
    {
      id: 2,
      title: "title 2",
      body: "body 2",
    },
    {
      id: 3,
      title: "title 3",
      body: "body 3",
    },
  ]);

  const axios = useAxios();
  axios.get("/blog").then((d) => {
    console.log(d);
  });

  return (
    <>
      <h1>News page render form News/index.jsx</h1>

      <div>
        {news.map((post, key) => {
          return (
            <BlogPost
              key={key}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
      </div>
    </>
  );
}
