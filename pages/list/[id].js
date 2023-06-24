import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Category() {
  const router = useRouter();
  const [detail, setDetail] = useState([]);
  const id = router.query.id || [];
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
      ).json();
      setDetail(results?.books);
    })();
  }, [id]);

  return (
    <div>
      <h1>{id}</h1>
      <div className="container">
        {!detail && <h4>Loading...</h4>}
        {detail?.map((book) => (
          <div key={book.rank}>
            <span className="rank">{`${book.rank}`}</span>
            <div className="card">
              <div className="imgOverlay"> </div>
              <img className="bookImg" src={`${book.book_image}`} />

              <h3>{`${book.title}`}</h3>
              <div className="details">
                <h5>{`${book.author}`}</h5>
                <Link className="link" href={`${book.amazon_product_url}`}>
                  <span className="buyLink">Buy Now &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .rank {
          font-weight: 900;
          margin-left: 25px;
        }
        .imgOverlay {
          position: absolute;
          width: 190px;
          height: 320px;
          background: linear-gradient(
            rgba(255, 255, 225, 0.1),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.7)
          );
        }
        .card {
          min-height: 450px;
          margin: 25px;
          width: 200px;
          padding-bottom: 0;
          background-color: rgb(30, 200, 152);
          border: 5px dashed #ffeaa7;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .bookImg {
          width: 190px;
          height: 300px;
        }
        .details {
          margin: 5px;
        }
        h3 {
          position: relative;
          top: -20px;
          color: black;
          background-color: white;
          width: 190px;
          min-height: 40px;
          text-align: center;
          margin: 0;
        }
        h5 {
          margin: 10px;
          margin-left: 0;
          width: 190px;
        }
        h1 {
          text-align: center;
        }
        .buyLink {
          margin-left: 0;
          height: 100px;
          background-color: rgb(30, 200, 152);
          font-weight: 900;
        }
        .buyLink:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
