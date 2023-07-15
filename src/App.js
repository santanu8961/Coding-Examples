import React from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = React.useState('');
  const [inp, setinp] = React.useState('');
  const delayConfigureFn = (cb, delay) => {
    let timer;
    clearTimeout(timer);
    return (...args) => {
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const debounceFn = delayConfigureFn((e) => {
    setValue(e.target.value);
  }, 500);

  return (
    <div>
      <p>Example of Event Debounce</p>
      <input
        type="value"
        // value={inp}
        onKeyUp={debounceFn}
      />
      <p>Debounce Text: {value}</p>
    </div>
  );
}
