import React, { Component } from "react";
import { CardList } from "./Components/Card-list/card-list.component";
import { SearchBox } from "./Components/Search-Box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animeCharacters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(`https://api.jikan.moe/v4/anime/40351/characters`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        this.setState({ animeCharacters: data.data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { animeCharacters, searchField } = this.state;
    const filteredCharacters = animeCharacters.filter(character => character.character.name.toLowerCase().includes(searchField.toLowerCase()))
    // console.log(filteredCharacters);
    if (!Array.isArray(animeCharacters)) {
      return <div>No characters found</div>;
    }

    return (
      <div className="my-5">
        <div className="mx-80">
          <SearchBox
            placeholder={"Search Anime Character"}
            handleChange={e => this.setState({searchField: e.target.value})}
          />
        </div>
        <div className="mt-9">
          <CardList characters={filteredCharacters} />
        </div>
      </div>
    );
  }
}

export default App;

// return (
//   <div className="mx-auto max-w-lg">
//     <div className="mt-9">
//       <input
//         className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         type="search"
//         placeholder="Search Anime Character"
//       />
//     </div>
//     <div className="mt-9">
//       <CardList characters={animeCharacters} />
//     </div>
//   </div>
