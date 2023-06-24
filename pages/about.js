import Seo from "@/components/Seo";

export default function Potato() {
  return (
    <div className="wrapper">
      <Seo title="about" />
      <h1>About Us</h1>
      <div className="aboutUs">
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
          height: 280px;
          box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.1),
            -10px 5px 15px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
