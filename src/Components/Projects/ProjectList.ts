import BudgetImg from "../../assets/Projects/budget.png";
import SpotifyImg from "../../assets/Projects/spotify.png";
import PokemonBattleImg from "../../assets/Projects/pokemon-battle.png";
import TetrisImg from "../../assets/Projects/tetris.png";

const ProjectList = [
  {
    name: "Personal Budget App",
    imgsrc: BudgetImg,
    description:
      "Developed a full-stack personal finance application with MongoDB, Express, Node.js on the backend and React, TypeScript, TanStack Query and Zustand on the frontend. Users can view their financial dashboard across different time periods, track accounts, investments, and transactions, and create recurring or preset transactions. The app also allows users to set budgets and monitor their current status in real time, providing a clear overview of their finances.",
    gitLink: "https://www.github.com/deniro5/budgetapp",
    video: { name: "Personal Budget App Demo", code: "1121382309" },
    stack: [
      "React",
      "Tanstack Query",
      "Typescript",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Styled Components",
    ],
  },
  {
    name: "Spotify App",
    imgsrc: SpotifyImg,
    description:
      "Built a full-featured Spotify client using React, TypeScript, Redux, and Styled Components, with a minimal Node/Express backend to handle authentication. The app integrates directly with the Spotify API to allow users to log in, play music, shuffle tracks, set sleep timers, find new music and manage playlists (create, update and delete)",
    gitLink: "https://www.github.com/deniro5/spotifyPlayer",
    video: { name: "Spotify App Demo", code: "1121384886" },
    stack: ["React", "Redux", "Styled Components", "Typescript", "Node.js"],
  },
  {
    name: "Online Pokemon Battle",
    imgsrc: PokemonBattleImg,
    description:
      "Developed a real-time multiplayer Pokémon battle application where users can register, select a team, and compete against other players. Implemented backend functionality using Node.js and Express, with WebSockets enabling live battle interactions. User statistics and battle outcomes are tracked to provide dynamic gameplay progression. The project leverages the PokeAPI to manage Pokémon data and move sets.",
    gitLink: "https://www.github.com/deniro5/pokemon-battle",
    video: { name: "Spotify App Demo", code: "1121369679" },
    stack: [
      "React",
      "Typescript",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Websockets",
      "Socket.io",
    ],
  },
  {
    name: "Tetris",
    imgsrc: TetrisImg,
    description:
      "Built a fully functional Tetris clone using React and TypeScript, featuring dynamic piece generation, rotation, and collision detection. Implemented game logic for scoring, line clearing, and level progression. Focused on modular component architecture and type safety to ensure maintainable and scalable code.",
    gitLink: "https://www.github.com/deniro5/tetris",
    demoLink: "https://deniro5.github.io/Tetris/",
    stack: ["React", "Typescript", "Zustand", "Styled Components"],
  },
];

export default ProjectList;
