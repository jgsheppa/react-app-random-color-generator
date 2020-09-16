import React from 'react';

function Screensaver() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [xSpeed, setXSpeed] = React.useState(10);
  const [ySpeed, setYSpeed] = React.useState(10);

  return (
    <div className="containerBox">
      <div></div>
    </div>
  );
}

export default Screensaver;
