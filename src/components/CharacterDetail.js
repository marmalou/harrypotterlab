import React from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return (
    <div>
    <h3>
    {props.character.name}
    </h3>
    <h3> {props.character.house}</h3>
    <h3> {props.character.ancestry}</h3>
    </div>
  )
}

export default CharacterDetail;
