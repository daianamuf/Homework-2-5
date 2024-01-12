import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import classNames from "classnames";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";

const bears = [
  {
    key: "1",
    name: "North American Black Bear",
    image: "assets/american-black.jpg",
    text: "The North American Black Bear is the most common bear in North America ranging from the State of Florida north, into Canada and north to Alaska. Their diet is mostly vegetable matter.",
  },
  {
    key: "2",
    name: "Brown Bear",
    image: "assets/brown.jpg",
    text: "The largest bears, the “Big Browns” exist along the coast of Alaska and Russia growing to very large sizes rivaling that of the Polar Bear.",
  },
  {
    key: "3",
    name: "Polar Bear",
    image: "assets/polar.jpg",
    text: "Polar bears are among the largest bears in the world. Adult males may reach 800 kilograms (kg).",
  },
  {
    key: "4",
    name: "Asiatic Black Bear",
    image: "assets/asiatic-black.jpg",
    text: "Asiatic black bears have long black fur with a distinct white patch on the chest that is often crescent-shaped. Asiatic black bears are more carnivorous than their American counterparts, although only a small part of their diet is made up of meat.",
  },
  {
    key: "5",
    name: "Andean Bear",
    image: "assets/andean.jpg",
    text: "Most scientists refer to spectacled bears as Andean bears (they are found only in the Andes mountains in South America). The bears are an endangered species, listed as Vulnerable, and it is illegal to kill them.",
  },
  {
    key: "6",
    name: "Panda Bear",
    image: "assets/panda.jpg",
    text: "The extra digit on the panda’s hand helps them to tear the bamboo and their gut is covered with a thick layer of mucus to protect against splinters.",
  },
  {
    key: "7",
    name: "Sloth Bear",
    image: "assets/sloth.jpg",
    text: "Sloth bears live in Sri Lanka, India, Bhutan, Nepal and Bangladesh. Sloth bears are nocturnal and occupy home ranges that they seem happy to share with other sloth bears.",
  },
  {
    key: "8",
    name: "Sun Bear",
    image: "assets/sun.jpg",
    text: "They are the smallest species of bear. Canine teeth are specialised for tearing meat, but sun bears are not particularly carnivorous. They may use their sharp canines as weapons or as tools for tearing at trees to get at insects.",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = bears.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === maxSlide - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? maxSlide - 1 : currentSlide - 1);
  };

  return (
    <div>
      <h1 className="heading">
        <PawPrint className="paw-icon" />
        <span>Bear Species of the World</span>
        <PawPrint className="paw-icon" />
      </h1>
      <div className="bear-slider">
        {bears.map((bear, index) => {
          const slideClassname = classNames("slide", `slide-${index + 1}`);
          return (
            <div
              className={slideClassname}
              key={bear.key}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
              <img src={bear.image} className="slide_img" />
              <h3 className="slide_heading">
                <span>{bear.key}.</span>
                <span> {bear.name}</span>
              </h3>
              <p className="slide_text">{bear.text}</p>
            </div>
          );
        })}
        <button className="btn btn_left" onClick={prevSlide}>
          <ArrowLeft />
        </button>
        <button className="btn btn_right" onClick={nextSlide}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default App;
