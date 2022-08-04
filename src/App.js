import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    fetchText();
  }
  async function fetchText() {
    let tmp = count;
    if (tmp <= 0) {
      tmp = 1;
    }
    const response = await fetch(
      `https://hipsum.co/api/?type=hipster-centric&paras=${tmp}`
    );
    const data = await response.json();
    setText(data);
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
