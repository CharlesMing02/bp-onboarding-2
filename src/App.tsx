import React from 'react';
import './App.css';
import { ButtonTextType, ButtonType}  from './Components/Button/Button';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button
          text='LOG IN'
          buttonType={ButtonType[2]} //'button-clear'
          textType={ButtonTextType[0]} //'button-text-white'
          onPress={() => console.log("I'm the first button.")}
        />
        <Button
          text='CONTINUE'
          buttonType={ButtonType[0]} //'button-green'
          textType={ButtonTextType[0]} //'button-text-white'
          onPress={() => console.log("I'm the second.")}
        />
        <Button
          text='SKIP'
          buttonType={ButtonType[1]} //'button-white'
          textType={ButtonTextType[2]} //'button-text-grey
          onPress={() => console.log("Third.")}
        />
        <Button
          text='ONCE A DAY'
          buttonType={ButtonType[3]} //'button-clearAlt'
          textType={ButtonTextType[1]} //'button-text-green'
          onPress={() => console.log("Hello! I'm the last button!")}
        />
      </header>
    </div>
  );
}

export default App;
