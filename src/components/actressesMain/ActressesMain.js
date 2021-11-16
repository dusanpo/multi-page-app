import React, { useState } from "react";
import List from "./List";
import { users } from "./data";
import "./ActressesMain.css";

function ActressesMain() {
  const [people, setPeople] = useState(users);
  return (
    <main>
      <section className="content">
        <h3>{people.length} favorite actresses</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default ActressesMain;
