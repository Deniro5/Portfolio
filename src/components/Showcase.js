import React from 'react';
import Project from './Project';

const projects = [
  {link: "https://deniro5.github.io/clothingStore/", imgsrc: "../img/ecommerce.png", title: "Clothing Store Template", Description: "Mock clothing store. Search for items using the search bar or browse through the store using the header items. Can select different styles/sizes of each product."},
  {link: "https://deniro5.github.io/Blackjack/", imgsrc: "../img/blackjack.png", title: "Blackjack", Description: "Play the classic game of Blackjack against the dealer."},
  {link: "https://deniro5.github.io/Quiz/", imgsrc: "../img/quiz.png", title: "Quiz Website", Description: "Quiz Website with 6 different categories of quizzes to choose from. Made with the help of the Opentdb API."},
  {link: "https://deniro5.github.io/MatchingGame/", imgsrc: "../img/matching.png", title: "Matching Game", Description: "Matching Pairs Game. Choose from either easy, medium or hard and try and find the matching pairs before time runs out."},
  {link: "https://deniro5.github.io/Clinic/", imgsrc: "../img/clinic.png", title: "Clinic Template", Description: "Clinic Website Template. View information about the clinic and it's doctors. Contact the clinic about any inquiries."},
  {link: "https://deniro5.github.io/Notes/", imgsrc: "../img/notes.png", title: "Notes", Description: "Notes App. Create, Edit and delete notes. Search for notes that you have created. Notes are stored in local storage."},
  {link: "https://deniro5.github.io/Countries/", imgsrc: "../img/countries.png", title: "Country Info Website", Description: "Country information site. Displays information such as population, size and currency about all countries around the world. Made with the help of the restcountries API."},
//  {imgsrc: "../img/pokedex.png", title: "Pokedex", Description: "Pokedex App. Displays basic information about 800+ pokemon. Can search for specific pokemon using the search bar or navigate using the arrows. Made with the help of pokeapi API."},
 // {imgsrc: "../img/gram.png", title: "Instagram Remake", Description: "Mock social media website (Instagram). Sign up, follow friends, Post pictures, Like and comment on posts etc... Made using React and Node.js"},
]

const Showcase = props => {

    return (
      <div className = "showcaseContainer">
        <h1> Projects </h1>
        <div className = "showcaseDivider"/>
        <p>All projects made using React.</p> 
        {projects.map((project, index) => (
          <a href = {project.link}>
            <Project imgsrc = {project.imgsrc} title = {project.title} description = {project.Description}/>  
          </a>
        ))}
      </div>
    );
  }


export default Showcase;
