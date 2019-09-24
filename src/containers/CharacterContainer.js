import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };

    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters";
    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error);
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }

render(){
    return(
      <div>
      <h2>CharacterContainer</h2>
      <CharacterSelector characters={this.state.characters}
      onCharacterSelected = {this.handleCharacterSelected}/>
      <CharacterDetail character={this.state.currentCharacter}/>
      </div>
    );
  }
}

  export default CharacterContainer;
