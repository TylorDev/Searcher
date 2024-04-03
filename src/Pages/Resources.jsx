import { IoSparkles } from "react-icons/io5";
import { BiJoystick } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { CiCircleChevRight } from "react-icons/ci";
import "./../Styles/Components/Resources.scss";

export function Resources() {
  return (
    <div className="Resources">
      <div className="section-tittle">
        <div>
          RESOURCES <IoSparkles></IoSparkles>
        </div>
        <p style={{ color: "white" }}>Getting Started</p>
      </div>

      <div>
        <span>ARTICLE</span>
        <span>INTRODUCTION</span>
      </div>

      <div className="resources-conteiner">
        <div className="article">
          <div className="art-step">
            {" "}
            <BiJoystick></BiJoystick>SETUP
          </div>
          <div className="art-tittle">Setup a MetaMask Wallet.</div>
          <div className="art-para">
            <p>
              Looking to kick off your NFT collection, but not sure where to
              begin? The first thing youll need is a crypto wallet, which will
              store your method of payment and allow you to access your new NFT.
            </p>
          </div>
          <div className="art-btn">
            <button>
              <CiCircleChevRight></CiCircleChevRight>
            </button>
          </div>
        </div>
        <div className="article">
          <div className="art-step">
            {" "}
            <FaWallet></FaWallet>FOUND ETH
          </div>
          <div className="art-tittle">MetaMask with ETH</div>
          <div className="art-para">
            <p>
              Ether is the native currency of the Ethereum network and its
              commonly abbreviated to ETH, which is its most common signifier.
              You need ETH to pay for some of your interactions with the
              blockchain, and to pay for the items you buy.
            </p>
          </div>
          <div className="art-btn">
            <button>
              <CiCircleChevRight></CiCircleChevRight>
            </button>
          </div>
        </div>
        <div className="article">
          <div className="art-step">
            <GrGallery></GrGallery>FIND IMG
          </div>
          <div className="art-tittle">Find IMG</div>
          <div className="art-para">
            <p>
              With so many projects out there, we know it can seem hard to find
              an IMG you love. Here are a few things you may want to keep in
              mind to simplify the process.
            </p>
          </div>
          <div className="art-btn">
            {" "}
            <button>
              <CiCircleChevRight></CiCircleChevRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
