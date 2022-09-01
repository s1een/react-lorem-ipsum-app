### About

- This application was created while learning React.js.
- This application is designed to generate text in the specified number of paragraphs.
- The application can be tested from the [link](https://s1een.github.io/react-lorem-ipsum-app/ "link").

# React Menu App

![](https://github.com/s1een/react-lorem-ipsum-app/blob/master/public/images/img.PNG?raw=true)

## Technologies used in the development:

- [![React][react.js]][react-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-lorem-ipsum-app`

## App Component

States:

```javascript
const [count, setCount] = useState(0);
const [text, setText] = useState([]);
```

Using API:

```javascript
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
```

Render:

```javascript
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
```

## Acknowledgments

Resources that helped me in development.

- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

## My Links

- [![linkedin][linkedin.com]][linkedin-url]
- [![telegram][telegram.com]][telegram-url]
- [![portfolio][portfolio.com]][portfolio-url]
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
  [product-screenshot]: images/main.png
  [react.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
  [react-url]: https://reactjs.org/
  [npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
  [npm-url]: https://www.npmjs.com/
  [linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
  [linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
  [telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
  [telegram-url]: https://t.me/r3ason_why
  [portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
  [portfolio-url]: https://s1een.github.io/my_cv_site/
