let showcaseOne = {
  img: './images/icon1.png',
  h2: 'Declarative',
  p: 'React makes it painless to create interactive UIs.',
};

let showcaseTwo = {
  img: './images/icon2.png',
  h2: 'Compomnents',
  p: 'Build encapsulated components that manage their state.',
};

let showcaseThree = {
  img: './images/icon3.png',
  h2: 'Single-Way',
  p: "A set of immutable values are passed to the component's.",
};

let showcaseFour = {
  img: './images/icon4.png',
  h2: 'JSX',
  p: 'Statically-typed, designed to run on modern browsers.',
};

let Header = () => {
  return (
    <div>
      <img src="./images/ironhack-logo-xs.png" />
      <img src="./images/menu-top-xs.png" />
    </div>
  );
};

let Main = () => {
  return (
    <div>
      <h1> Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer
      </p>
      <button>Awesome!</button>
    </div>
  );
};

let Showcase = ({ img, h2, p }) => {
  return (
    <div>
      <img src={img} />
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  );
};

let App = (
  <div>
    <Header />
    <Main />
    <Showcase {...showcaseOne} />
    <Showcase {...showcaseTwo} />
    <Showcase {...showcaseThree} />
    <Showcase {...showcaseFour} />
  </div>
);

ReactDOM.render(App, document.querySelector('#app'));
