import React from "react";
import "./Home.css";
import banner from "../assets/prime.jpg";
import Product from "./Product";
import ikigai from "../assets/ikigai.jpg";
import bat from "../assets/bat.jpg"
import ball from "../assets/football.jpg"
import watch from "../assets/watch.jpg"
import iphone from "../assets/iphone.jpg"
import bag from "../assets/bag.jpg"

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="banner" />
      <div className="home__row">
        <Product
          id="1234578"
          title="ikigai"
          price={150}
          rating={5}
          image={ikigai}
        />
        <Product
          id="1234987"
          title="adidas football"
          price={1650}
          rating={4}
          image={ball}
        />
      </div>
      <div className="home__row">
        <Product
          id="1234675"
          title="kokkaburra bat"
          price={5500}
          rating={5}
          image={bat}
        />
        <Product
          id="1234343"
          title="smart watch"
          price={1150}
          rating={4}
          image={watch}
        />
        <Product
          id="1234989"
          title="iphone"
          price={55000}
          rating={4}
          image={iphone}
        />
      </div>
      <div className="home__row">
        <Product
          id="1234578"
          title="skybags 45l vulcan backpack"
          price={2150}
          rating={4}
          image={bag}
        />
      </div>
    </div>
  );
}

export default Home;
