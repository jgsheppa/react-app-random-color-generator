import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import randomColor from 'randomcolor';

function App() {
  const [textColor, setTextColor] = React.useState('#FFFFFF');
  const { register, handleSubmit } = useForm();
  const [boxWidth, setBoxWidth] = React.useState('100px');
  const [boxHeight, setBoxHeight] = React.useState('100px');

  const onSubmit = (data) => {
    console.log(data);
    setTextColor(
      randomColor({
        hue: data.hue,
        luminosity: data.luminosity,
      }),
    );
    console.log(setTextColor(randomColor(data)));
    setBoxWidth(data.width);
    console.log(setBoxWidth(data));
    setBoxHeight(data.height);
    console.log(setBoxHeight(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flexbox background-box">
            <div className="container">
              <label className="item">Enter a primary color</label>
              <input className="itemInput" ref={register} name="hue" />
            </div>
            <div className="container">
              <label className="item">Light or dark?</label>
              <input className="itemInput" ref={register} name="luminosity" />
            </div>
            <div className="container">
              <label className="item">Enter a width</label>
              <input className="itemInput" ref={register} name="width" />
            </div>
            <div className="container">
              <label className="item">Enter a height</label>
              <input className="itemInput" ref={register} name="height" />
            </div>
            <button className="button item">Submit Color</button>
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
          <p className="randomColorText">This is your random color</p>
        </div>
      </header>
    </div>
  );
}

export default App;
