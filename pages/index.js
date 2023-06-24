import Seo from "@/components/Seo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const onClick = (listName) => {
    router.push(`/list/${listName}`);
  };
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
      ).json();
      setBooks(results);
    })();
  }, []);

  return (
    <div className="wrapper">
      <Seo title={"Home"} />
      <h1>The New York Times Best Seller Explorer</h1>
      <div>
        <div className="lists_container">
          {books.map((book, index) => (
            <div
              key={index}
              onClick={() => {
                onClick(book.list_name);
              }}
              className="list"
            >
              {book.display_name} &rarr;
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        h1 {
          padding-top: 20px;
          font-size: 60px;
          margin-left: 20px;
        }
        .wrapper {
          position: relative;
          top: -30px;
          width: 70%;
          margin-left: auto;
          margin-right: auto;

          box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.1),
            -10px 5px 10px rgba(0, 0, 0, 0.1);
        }
        .lists_container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .lists_container div {
          border: 4px solid #ffeaa7;
          margin-bottom: 20px;
          padding: 10px;
          text-align: center;
          border-radius: 30px;
        }
        .list {
          margin-right: 15px;
          margin-left: 15px;
          font-size: 20px;
          background-color: rgb(30, 200, 152);
          font-weight: 900;
          box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
        }
        .list:hover {
          cursor: pointer;
          scale: 1.1;
          transform: translateY(-7px);
        }
      `}</style>
    </div>
  );
}
