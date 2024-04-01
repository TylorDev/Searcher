/* eslint-disable react/prop-types */
import "./../Styles/Pages/Explore.scss";
import { Slider } from "./../Components/Slider.jsx";

import { IoSparkles } from "react-icons/io5";
import Posts from "./../Components/Posts";
function Explore() {
  return (
    <section className="Explore">
      <div className="section-tittle">
        <div>
          HOT STUFF <IoSparkles></IoSparkles>
        </div>
        <p>Foremost Item Collections</p>
      </div>

      <div>
        <Slider />
      </div>

      <div className="section-tittle">
        <div>
          Discover <IoSparkles></IoSparkles>
        </div>
        <p>Discover Items</p>
      </div>
      <div>
        <Posts></Posts>
      </div>
    </section>
  );
}

export default Explore;
