import "./../Styles/Components/Posts.scss";
import posts from "../API/posts.json";
function Posts() {
  return (
    <div>
      <div className="Posts">
        {posts.map((item, index) => (
          <div className="post" key={index}>
            <img src={item.img} alt={item.titulo} />
            <div className="meta">
              <p style={{ color: "yellow" }}>Precio: {item.precio}</p>
              <p>Título: {item.titulo}</p>
              <p>Autor: {item.autor.nombre}</p>
              <p style={{ color: "skyblue" }}>
                Verificado: {item.autor.verificado ? "Sí" : "No"}
              </p>
              <p style={{ color: "pink" }}>Likes: {item.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
