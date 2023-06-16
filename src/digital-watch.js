import React, { useState, useEffect } from 'react';

export const DigitalWatch = () => {
  const [time, setTime] = useState();

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
      setTime(hours + ' : ' + minutes + ' : ' + seconds);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div style={{ fontFamily: 'Orbitron', fontSize: 40 }}>{time}</div>;
};
