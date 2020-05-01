import React from "react";
import Project from "./Project";

const projects = [
  {
    src: "https://github.com/Deniro5/Tetris",
    link: "https://deniro5.github.io/Tetris/",
    imgsrc: "imgs/tetris.png",
    title: "Tetris",
    Description: "Classic game of Tetris. Made with React.             ",
  },
  {
    src: "https://github.com/Deniro5/clothingStore",
    link: "https://deniro5.github.io/clothingStore/",
    imgsrc: "imgs/ecommerce.png",
    title: "Clothing Store Template",
    Description:
      "Mock clothing store. Search for items using the search bar or browse through the store using the header items. Can select different styles/sizes of each product.",
  },
  {
    src: "https://github.com/Deniro5/dungeoncrawler",
    link: "https://deniro5.github.io/dungeoncrawler/",
    imgsrc: "imgs/dungeoncrawler.png",
    title: "Dungeon Crawler",
    Description: "2D dungeon crawler game. Made with React.",
  },
  {
    src: "https://github.com/Deniro5/Clinic",
    link: "https://deniro5.github.io/Clinic/",
    imgsrc: "imgs/clinic.png",
    title: "Clinic Template",
    Description:
      "Clinic Website Template. View information about the clinic and it's doctors. Contact the clinic about any inquiries.",
  },
  {
    src: "https://github.com/Deniro5/Quiz",
    link: "https://deniro5.github.io/Quiz/",
    imgsrc: "imgs/quiz.png",
    title: "Quiz Website",
    Description:
      "Quiz Website with 6 different categories of quizzes to choose from. Made with the help of the Opentdb API.",
  },
  {
    src: "https://github.com/Deniro5/Gram",
    link: "https://rocky-lake-89848.herokuapp.com/",
    imgsrc: "imgs/gram.png",
    title: "Instagram Remake",
    Description:
      "Social media website. Sign in as a@a.com, b@b.com .... e@e.com. Password is first letter of username. Made using React, Node.js and Express",
  },
  {
    src: "https://github.com/Deniro5/MatchingGame",
    link: "https://deniro5.github.io/MatchingGame/",
    imgsrc: "imgs/matching.png",
    title: "Matching Game",
    Description:
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
    Description: "Play Blackjack against the automated dealer. Made with React.",
  },
  {
    src: "https://github.com/Deniro5/Wordsearch",
    link: "https://deniro5.github.io/Wordsearch/",
    imgsrc: "imgs/wordsearch.png",
    title: "Wordsearch",
    Description: "Randomly generated wordsearch game. Made using Canvas.",
  },
  {
    src: "https://github.com/Deniro5/Pokedex2",
    link: "https://deniro5.github.io/Pokedex2/",
    imgsrc: "imgs/pokedex.png",
    title: "Pokedex",
    Description:
      "Pokedex App made with Typescript and React.  Displays basic information about 800+ pokemon. Can search for specific pokemon using the search bar or navigate using the arrows. Made with the help of pokeapi API.",
  },
];

const Showcase = (props) => {
  return (
    <div className='showcaseContainer'>
      <h1> Projects </h1>
      <div className='showcaseDivider' />
      {projects.map((project, index) => (
        <Project
          link={project.link}
          src={project.src}
          imgsrc={project.imgsrc}
          title={project.title}
          description={project.Description}
        />
      ))}
      <p
        onClick={() => {
          window.scroll(0, 0);
        }}
        id='topBtn'>
        Back to Top
      </p>
    </div>
  );
};

export default Showcase;
