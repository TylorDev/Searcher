import { useState } from "react";
import images from "../API/images.json";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./../Styles/Components/Slider.scss";
export function Slider() {
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
      return images[images.length - 1];
    } else if (idx >= images.length) {
      return images[0];
    } else {
      return images[idx];
    }
  };
  {
    return (
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
            <div className={`imagen prev ${isAnimating ? "previus" : ""}`}>
              <img src={handleImage(index - 1).src} alt="" />
              <div className="meta">
                <div className="img-titulo">
                  {handleImage(index - 1).nombre}
                </div>
                <div className="img-desc">{handleImage(index - 1).desc} </div>
                <button id="prev" className="btn-live">
                  Live
                </button>
              </div>
            </div>
            <div className={`imagen  mid ${isAnimating ? "current" : ""}`}>
              <img src={images[index].src} alt="" />
              <div className="meta">
                <div className="img-titulo">{images[index].nombre}</div>
                <div className="img-desc">{images[index].desc} </div>
                <button className="btn-live">Live</button>
              </div>
            </div>
            <div className={`imagen nxt ${isAnimating ? "next" : ""}`}>
              <img src={handleImage(index + 1).src} alt="" />
              <div className="meta">
                <div className="img-titulo">
                  {handleImage(index + 1).nombre}
                </div>
                <div className="img-desc">{handleImage(index + 1).desc} </div>
                <button id="nxt" className="btn-live">
                  Live
                </button>
              </div>
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
                // eslint-disable-next-line react/no-unknown-property
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
    );
  }
}
