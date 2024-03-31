import "./../Styles/Pages/Explore.scss";
import images from "./../API/images.json";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
function Explore() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Cambia este valor al tiempo que desees que dure la animación en milisegundos
  };
  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Vuelve al principio del array
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1); // Vuelve al último elemento del array
    }
  };
  const handlePunto = (id) => {
    setIndex(id);
    console.log(id);
  };

  const handleImage = (idx) => {
    if (idx < 0) {
      return images[images.length - 1].src;
    } else if (idx >= images.length) {
      return images[0].src;
    } else {
      return images[idx].src;
    }
  };

  return (
    <section>
      <div>
        <div className="Slider">
          <div className="contenido">
            <button
              className=" btn btn-prev"
              onClick={() => {
                handlePrev();
                handleClick();
              }}
            >
              <FaArrowLeftLong></FaArrowLeftLong>
            </button>
            <div className="imagenes">
              <div className={`imagen ${isAnimating ? "previus" : ""}`}>
                <img src={handleImage(index - 1)} alt="" />
              </div>
              <div className={`imagen  mid ${isAnimating ? "current" : ""}`}>
                <img src={images[index].src} alt="" />
                <div className="meta">
                  <div className="img-titulo">{images[index].nombre}</div>
                  <div>{images[index].desc} </div>
                  <button>Live</button>
                </div>
              </div>
              <div className={`imagen ${isAnimating ? "next" : ""}`}>
                <img src={handleImage(index + 1)} alt="" />
              </div>
            </div>

            <button
              className=" btn btn-next"
              onClick={() => {
                handleNext();
                handleClick();
              }}
            >
              <FaArrowRightLong></FaArrowRightLong>
            </button>
          </div>

          <div className="puntos">
            {images.map((imagen, i) => (
              <div key={i}>
                <button
                  current={i == index ? "true" : "false"}
                  onClick={() => {
                    handlePunto(i);
                    handleClick();
                  }}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>STORE</div>
    </section>
  );
}

export default Explore;
