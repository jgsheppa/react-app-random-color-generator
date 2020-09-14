import React, { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import randomColor from 'randomcolor';

function App() {
  const [textColor, setTextColor] = React.useState('#FFFFFF');
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTextColor(randomColor(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flexbox">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="item">Enter a hue</label>
            <input className="item" ref={register} name="hue" />

            <label className="item">Enter a lightness</label>
            <input className="item" ref={register} name="luminosity" />
            <button className="button item">Submit Color</button>
          </form>
        </div>
        <p className="randomColorText" style={{ color: textColor }}>
          THIS IS YOUR RANDOM COLOR!!!!!
        </p>
      </header>
    </div>
  );
}

export default App;
