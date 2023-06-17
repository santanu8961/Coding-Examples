import React, { useState, useEffect } from 'react';

export const DigitalWatch = () => {
  const [time, setTime] = useState();
  const [color, setcolor] = useState('red');
  useEffect(() => {
    let interval = setInterval(() => {
      let date = new Date();
      const hours =
        date.getHours().toString().length === 1
          ? `0${date.getHours()}`
          : date.getHours();
      const minutes =
        date.getMinutes().toString().length === 1
          ? `0${date.getMinutes()}`
          : date.getMinutes();
      const seconds =
        date.getSeconds().toString().length === 1
          ? `0${date.getSeconds()}`
          : date.getSeconds();

      setcolor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
      console.log(cl);
      setTime(hours + ' : ' + minutes + ' : ' + seconds);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: 'Orbitron',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: color,
      }}
    >
      <div
        style={{
          margin: '20px 0',
        }}
      >
        Digital Clock
      </div>
      <div
        style={{
          fontFamily: 'Orbitron',
          fontSize: 40,
          border: '5px solid',
          textAlign: 'center',
        }}
      >
        {time}
      </div>
    </div>
  );
};
