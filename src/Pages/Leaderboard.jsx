import { FaEthereum } from "react-icons/fa";
import top from "../API/top.json";
import "./../Styles/Components/Leaderboard.scss";
import { useState } from "react";
import { IoSparkles } from "react-icons/io5";

export function Leaderboard() {
  const [more, setMore] = useState(12);

  return (
    <div className="Leaderboard">
      <div className="section-tittle">
        <div>
          IMG COLLECTOR <IoSparkles></IoSparkles>
        </div>
        <p>Top Collections</p>
        <div className="select-container">
          <label htmlFor="option">In a </label>
          <select id="option1" name="option1">
            <option value="opcion1_valor1">week</option>
            <option value="opcion1_valor2">month</option>
            <option value="opcion1_valor3">year</option>
          </select>
        </div>
      </div>
      <div className="Top">
        {top.slice(0, more).map((item, index) => (
          <div className="position" key={index}>
            <div>{index + 1}</div>
            <div className="pfp">
              <img src={item.userpfp} alt={`Profile of ${item.user}`} />
            </div>

            <div className="item-meta">
              <p> {item.user} </p>
              <p
                style={{
                  color: parseFloat(item.ganancia) >= 0 ? "#59ff00" : "red",
                }}
              >
                {item.ganancia}
              </p>

              <p>
                Floor Price: <FaEthereum></FaEthereum> {item.floor_price}
              </p>
              <p style={{ color: "#FC9F53" }}>
                {" "}
                <FaEthereum color="white"></FaEthereum>
                {item.actual_price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="more"
        onClick={() => {
          setMore((prevMore) => (prevMore === 20 ? 12 : 20));
        }}
      >
        {more === 20 ? "Show Less" : "Load More"}
      </button>
    </div>
  );
}
