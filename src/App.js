import React, { Component } from "react";
import { CardList } from "./Components/Card-list/card-list.component";
import { SearchBox } from "./Components/Search-Box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 20,
      animeCharacters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.fetchAnime();
  }

  fetchAnime() {
    fetch(`https://api.jikan.moe/v4/anime/${this.state.count}/characters`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        this.setState({ animeCharacters: data.data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      this.fetchAnime();
    }
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  handleAnime = (e) => this.setState({ count: e.target.value });

  render() {
    const { animeCharacters, searchField } = this.state;
    const filteredCharacters = animeCharacters.filter((character) =>
      character.character.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (!Array.isArray(animeCharacters)) {
      return <div>No characters found</div>;
    } else {
      return (
        <div className="my-5">
          <h1 class="text-6xl font-bold text-white my-2 mx-[50rem]">AnimeHub</h1>
          <div className="mx-80">
            <SearchBox
              placeholder={"Search Anime Character"}
              handleChange={this.handleChange}
            />
            <select
              id="animes"
              onChange={this.handleAnime}
              value={this.state.count}
              className="block w-full px-4 py-2 my-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="20">Naruto</option>
              <option value="5">Bleach</option>
              <option value="38000">Demon Slayer</option>
              <option value="41467">Bleach: Sennen Kessen-hen</option>
              <option value="51096">Classroom of the Elite</option>
              <option value="21">One Piece</option>
              <option value="16498">Attack on Titan</option>
              <option value="1535">Death Note</option>
              <option value="40748">Jujutsu Kaisen</option>
              <option value="34134">One Punch Man</option>
              <option value="37521">Vinland Saga</option>
              <option value="223">Dragon Ball</option>
              <option value="20583">Haikyu!!</option>
              <option value="19">Monster</option>
              <option value="2471">Doraemon</option>
              <option value="40351">Pokemon</option>
            </select>
          </div>
          <div className="mt-9">
            <CardList characters={filteredCharacters} />
          </div>
        </div>
      );
    }
  }
}

export default App;
