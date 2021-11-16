import React from "react";

function List({ people }) {
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <p>{age} years</p>
          </article>
        );
      })}
    </>
  );
}

export default List;
