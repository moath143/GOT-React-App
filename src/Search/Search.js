import React, { useState, useContext } from 'react'
import {Gotprovider} from '../Gotcontext/Gotcontext'



const Search = () => {

    const [charactername, setcharachtername] = useState('')
    const obj = useContext(Gotprovider);
    const dataArray = obj.characters.characters;

    
    const info = (e) => {
      e.preventDefault();
      var actor = {
        charactername: "",
        actorname: "",
        housename: "",
        photo: ""
      };
  
        dataArray.map((item) => {

            // console.log(item.characterName);
            if (item.characterName === charactername) {
                actor.charactername = item.characterName
                actor.actorname = item.actorName;
                actor.housename = item.houseName;
                actor.photo = item.characterImageFull;
            }
        })
      console.log(actor);
      obj.newActor(actor);
    } // for the function info

    return (
      <header>
        <div className="container">
          <h1>game of thrones</h1>
          <p>you can type the character name in the game of thrones</p>
          <p>
            for example : (Aeron Greyjoy, Robb Stark, Robert Baratheon, Robett Glover, Roose Bolton, Roslin Frey, Sansa Stark)
          </p>
          <form action="">
            <input
              type="text"
              placeholder="character name"
              value={charactername}
              onChange={(e) => {
                setcharachtername(e.target.value);
              }}
            />
            <button onClick={info}>Search</button>
          </form>
        </div>
      </header>
    );
}
 
export default Search;