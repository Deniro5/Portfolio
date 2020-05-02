import React from "react";
import Slideshow from "./Slideshow";

const projects = [
  {
    src: "https://github.com/Deniro5/Tetris",
    link: "https://deniro5.github.io/Tetris/",
    imgsrc: "imgs/tetris.png",
    title: "Tetris",
    description: "Classic game of Tetris. Made with React.             ",
  },
  {
    src: "https://github.com/Deniro5/clothingStore",
    link: "https://deniro5.github.io/clothingStore/",
    imgsrc: "imgs/ecommerce.png",
    title: "Clothing Store Template",
    description:
      "Mock clothing store. Search for items using the search bar or browse through the store using the header items. Can select different styles/sizes of each product.",
  },
  {
    src: "https://github.com/Deniro5/dungeoncrawler",
    link: "https://deniro5.github.io/dungeoncrawler/",
    imgsrc: "imgs/dungeoncrawler.png",
    title: "Dungeon Crawler",
    description: "2D dungeon crawler game. Made with React.",
  },
  {
    src: "https://github.com/Deniro5/Clinic",
    link: "https://deniro5.github.io/Clinic/",
    imgsrc: "imgs/clinic.png",
    title: "Clinic Template",
    description:
      "Clinic Website Template. View information about the clinic and it's doctors. Contact the clinic about any inquiries.",
  },
  {
    src: "https://github.com/Deniro5/Quiz",
    link: "https://deniro5.github.io/Quiz/",
    imgsrc: "imgs/quiz.png",
    title: "Quiz Website",
    description:
      "Quiz Website with 6 different categories of quizzes to choose from. Made with the help of the Opentdb API.",
  },
  {
    src: "https://github.com/Deniro5/Gram",
    link: "https://rocky-lake-89848.herokuapp.com/",
    imgsrc: "imgs/gram.png",
    title: "Instagram Remake",
    description:
      "Social media website. Sign in as a@a.com, b@b.com .... e@e.com. Password is first letter of username. Made using React, Node.js and Express",
  },
  {
    src: "https://github.com/Deniro5/MatchingGame",
    link: "https://deniro5.github.io/MatchingGame/",
    imgsrc: "imgs/matching.png",
    title: "Matching Game",
    description:
      "Matching Pairs Game. Choose from either easy, medium or hard and try and find the matching pairs before time runs out.",
  },
  /* {
    src: "https://github.com/Deniro5/Snake",
    link: "https://deniro5.github.io/Snake/",
    imgsrc: "imgs/snake.png",
    title: "Snake",
    Description: "Classic game of Snake. Made using React.             ",
  }, 
  {
    src: "https://github.com/Deniro5/Countries",
    link: "https://deniro5.github.io/Countries/",
    imgsrc: "imgs/countries.png",
    title: "Country Info Website",
    Description:
      "Country information site. Displays information such as population, size and currency about all countries around the world. Made with the help of the restcountries API.",
  }, */
  {
    src: "https://github.com/Deniro5/Blackjack",
    link: "https://deniro5.github.io/Blackjack/",
    imgsrc: "imgs/blackjack.png",
    title: "Blackjack",
    description: "Play Blackjack against the automated dealer. Made with React.",
  },
  {
    src: "https://github.com/Deniro5/Wordsearch",
    link: "https://deniro5.github.io/Wordsearch/",
    imgsrc: "imgs/wordsearch.png",
    title: "Wordsearch",
    description: "Randomly generated wordsearch game. Made using Canvas.",
  },
  {
    src: "https://github.com/Deniro5/Pokedex2",
    link: "https://deniro5.github.io/Pokedex2/",
    imgsrc: "imgs/pokedex.png",
    title: "Pokedex",
    description:
      "Pokedex App made with Typescript and React.  Displays basic information about 800+ pokemon. Can search for specific pokemon using the search bar or navigate using the arrows. Made with the help of pokeapi API.",
  },
];

//Pass in the above array to a slideshow container. slideshow should have a

const Showcase = (props) => {
  return (
    <div className='showcaseContainer'>
      <h1> Projects </h1>
      <div className='showcaseDivider' />
      <Slideshow projects={projects} />
    </div>
  );
};

export default Showcase;
