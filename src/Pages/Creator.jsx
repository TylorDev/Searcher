import { IoSparkles } from "react-icons/io5";
import "./../Styles/Components/Creator.scss";
export function Creator() {
  return (
    <div>
      <div className="section-tittle">
        <div>
          TO BE CREATOR <IoSparkles></IoSparkles>
        </div>
        <p>Create and Sell Your IMGs</p>
      </div>
      <div className="Tutorial">
        <div className="step">
          <span>01.</span> <div className="text-weird">Set up your wallet</div>
        </div>
        <div className="step" id="horizontal">
          <div>
            <span>02.</span>
            <div>
              <img src="gallery.svg" alt="" />
            </div>

            <span>Create your collection</span>
          </div>

          <p>
            Click <a href="#"> My Collections</a>
            and set up your collection, Add social links, a description, profile
            & banner images, and set a secondary sales fee.
          </p>
        </div>

        <div className="step">
          <span>03.</span> <div className="text-weird">Add your IMGs</div>
        </div>
        <div className="step">
          <span>04.</span> <div className="text-weird">List them for sale</div>
        </div>
      </div>
    </div>
  );
}
