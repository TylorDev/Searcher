import "./../Styles/Pages/Home.scss";
export default function Homepage() {
  return (
    <>
      <section className="Home">
        <div className="tittle">
          <div className="overlay">
            <img src="overlay1.svg" alt="" />
          </div>
          <h2 className="subtittle">
            The images marketplace with everything for everyone
          </h2>
          <h2 className="line">
            Discover
            <img
              className="inline-img"
              src="https://i.pinimg.com/564x/f2/b8/7f/f2b87f0a2d2fe311b1fe488eb9462e6f.jpg"
            ></img>
            Collect
          </h2>
          <h2 className="line">
            and Sell
            <img
              className="inline-img2"
              src="https://i.pinimg.com/564x/53/1b/d7/531bd780537c026d516ce8099e022d0c.jpg"
            ></img>
          </h2>
          <h2 className="line">Remarkable IMGS.</h2>
        </div>

        <div className="cover-group">
          <div className="overlay">
            <img src="overlay2.svg" alt="" />
          </div>
          <p className="parrafo1" id="one">
            Find digital artwork by professionals and discover the true meaning
            of the artwork
          </p>

          <div className="cover">
            <div className="cover-img">
              <img
                src="https://cdna.artstation.com/p/assets/images/images/003/476/658/large/ilya-kuvshinov-white-gloves.jpg?1474109682"
                alt=""
              />
            </div>
            <div className="shadow"></div>
          </div>

          <p className="parrafo2" id="two">
            HAPEBEAST Genesis is the very first entry into digital fashion brand
            dedicated to online space the Metaverse world.
          </p>
        </div>
      </section>
    </>
  );
}
