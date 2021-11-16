import React, { useState } from "react";
import data from "./data";
import "./LoremIpsum.css";

function LoremIpsumMain() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(typeof count);
    let amount = parseInt(count);
    //console.log(typeof amount);
    if (count <= 0) {
      amount = 0;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="sectionCenter">
      <h3>Want some Lorem Ipsum?</h3>
      <form className="loremForm" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button type="submit" className="btnSbmt">
          generate
        </button>
      </form>
      <article className="loremText">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default LoremIpsumMain;
