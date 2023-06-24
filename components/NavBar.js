import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div className="buttons">
        <Link href="/">
          <span className={router.pathname === "/" ? "active" : ""}>Home</span>
        </Link>
        <Link href="/about">
          <span className={router.pathname === "/about" ? "active" : ""}>
            About
          </span>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
          padding-top: 10px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          border-bottom: 5px dashed #ffeaa7;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          font-size: 20px;
          text-decoration: underline;
          font-weight: 900;
        }
        nav div {
          display: flex;
          justify-content: space-between;
          align-items: space-between;
          margin-left: 20px;
          margin-right: 20px;
        }
      `}</style>
    </nav>
  );
}
