import React from "react";
import { Card } from "../Card/card.component";

export const CardList = (props) => {
  return (
    <div className="grid grid-cols-3 container m-auto gap-5">
      {props.characters.map((obj) => (
        <div className="m-5" >
          <Card key={obj.character.mal_id} character={obj} />
        </div>
      ))}
    </div>
  );
};
