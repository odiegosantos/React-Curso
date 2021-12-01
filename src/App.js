import './App.css';
import React from 'react';
import Card from './components/layout/Card';
import ArrayList from './components/Basics/ArrayList';
import ConditionalIf from './components/Basics/ConditionalIf';
import FirstComponent from './components/Basics/FirstComponent';
import Parameter from './components/Basics/Parameter';
import WithChildren from './components/Basics/WithChildren';
import Conditional from './components/Basics/Conditional';
import Father from './components/Communication/Direct/Father';
import Dad from './components/Communication/Indirect/Dad';
import InputId from './components/Form/Input';
import Counter from './components/Counter/Counter';
import Mega from './components/Mega/Mega';

  const App = () => {

    return (
      <div className="App">
        <h1>React Basic</h1>
        <div className="Cards">

          <Card titulo="#1 - First Component" color="#E60099">
            <FirstComponent />
          </Card>

          <Card titulo="#2 - Component with Parmeter" color="#FF00AA">
            <Parameter titulo="Title"></Parameter>
          </Card>

          <Card titulo="#3 - Component with Children" color="#FF1AB3">
            <WithChildren>
              <ul>
                <li>Marla Singer</li>
                <li>Sebastian</li>
                <li>Tyler Durden</li>
                <li>David Fincher</li>
              </ul>
            </WithChildren> 
          </Card>

          <Card titulo="#4 - Array List" color="#FF80D5">
            <ArrayList />
          </Card>

          <Card titulo="#5 - Conditional Version 1" color="#FF66CC">
            <Conditional numero={1}></Conditional>
          </Card>

          <Card titulo="#6 - Conditional If Version 2" color="#FF4DC4">
            <ConditionalIf numero={10}></ConditionalIf>
          </Card>

          <Card titulo="#7 - Communication direct" color="#FF33BB">
            <Father />
          </Card>

          <Card titulo="#8 - Communication indirect" color="#FF1AB3">
            <Dad />
          </Card>

          <Card titulo="#9 - Input" color="#FF00AA">
            <InputId />
          </Card>

          <Card titulo="#10 - Counter" color="#E60099">
            <Counter />
          </Card>

          <Card titulo="#11 - Mega" color="#CC0088">
            <Mega amountNumber={6}></Mega>
          </Card>
          
        </div>
      </div>

    );
  };

export default App;
