import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import randomColor from 'randomcolor';

function App() {
  const [textColor, setTextColor] = React.useState('#ffffff');
  const { register, handleSubmit } = useForm();
  const [boxWidth, setBoxWidth] = React.useState('10');
  const [boxHeight, setBoxHeight] = React.useState('10');

  const onSubmit = (data) => {
    setTextColor(
      randomColor({
        hue: data.hue,
        luminosity: data.luminosity,
      }),
    );
    setBoxWidth(data.width);
    setBoxHeight(data.height);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flexbox background-box">
            <div className="container">
              <label className="item">Enter a color</label>
              <input className="itemInput" ref={register} name="hue" />
            </div>
            <div className="container">
              <label className="item">Light or dark?</label>
              <input className="itemInput" ref={register} name="luminosity" />
            </div>
            <div className="container">
              <label className="item">Enter a width (em)</label>
              <input className="itemInput" ref={register} name="width" />
            </div>
            <div className="container">
              <label className="item">Enter a height (em)</label>
              <input className="itemInput" ref={register} name="height" />
            </div>
            <button className="button item">
              <p>Submit</p>
            </button>
          </div>
        </form>

        <div
          className="colorBox"
          style={{
            backgroundColor: textColor,
            height: boxHeight + 'em',
            width: boxWidth + 'em',
          }}
        >
          <p>{textColor}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
