import "./../Styles/Components/Posts.scss";
import posts from "../API/posts.json";
import { FaEthereum } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";

const categorias = posts.map((post) => post.categoria);
const categoriasUnicas = [...new Set(categorias)];
console.log(categoriasUnicas);

function Posts() {
  const [more, setMore] = useState(9);
  const [clickedButton, setClickedButton] = useState("All categories");

  const handleClick = (categoria) => {
    setClickedButton(categoria);
  };

  const postsFiltrados =
    clickedButton === "All categories"
      ? posts
      : posts.filter((post) => post.categoria === clickedButton);

  return (
    <div className="post-page">
      <div className="filtros">
        <button className="categoria date">
          Long added <IoIosArrowDropdown></IoIosArrowDropdown>
        </button>
        <div className="categorias-conteiner">
          {categoriasUnicas.map((categoria, index) => {
            return (
              <button
                onClick={() => handleClick(categoria)}
                current={categoria === clickedButton ? "true" : "false"}
                key={index}
                className={`categoria `}
              >
                {categoria}
              </button>
            );
          })}
        </div>

        <button className="categoria filter">
          Filter <LuSettings2></LuSettings2>
        </button>
      </div>

      <div className="Posts">
        {postsFiltrados
          .slice(0, more)
          .filter((item) => item.img && item.img !== "") // Filtrar solo los items con imagen no nula o vacía
          .map((item, index) => (
            <div className="post" key={index}>
              <div className="post-img">
                <img src={item.img} alt={item.titulo} />
              </div>

              <div className="meta">
                <div>
                  <p>
                    {item.autor.nombre}{" "}
                    {item.autor.verificado ? <MdVerified></MdVerified> : ""}
                  </p>
                  <span>PRICE</span>
                </div>
                <div>
                  <p>{item.titulo}</p>
                  <p>
                    {" "}
                    <FaEthereum></FaEthereum>
                    {item.precio}
                  </p>
                </div>
                <div>
                  <FaEthereum></FaEthereum>
                  <p style={{ color: "pink" }}>
                    {" "}
                    <FaRegHeart></FaRegHeart>
                    {item.likes}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button
        className="more"
        onClick={() => {
          setMore((prevMore) => (prevMore === 17 ? 9 : 17));
        }}
      >
        {more === 17 ? "Show Less" : "Load More"}
      </button>
    </div>
  );
}

export default Posts;
