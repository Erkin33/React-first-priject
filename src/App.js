import './App.css';
import './index.css';
import { ways } from './data';
import Header from './components/header';
import { WayToEach } from './components/WayToEach';
import Button from './components/button';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <h1 className='hero'>
        Старт Реакта
      </h1>
      <ul>
        <WayToEach {...ways[0]}/>
        <WayToEach {...ways[1]}/>
        <WayToEach {...ways[2]}/>
        <WayToEach {...ways[3]}/>
        <WayToEach {...ways[4]}/>
        <WayToEach {...ways[5]}/>
        <WayToEach {...ways[6]}/>
        <WayToEach {...ways[7]}/>
        <WayToEach {...ways[8]}/>
        <WayToEach {...ways[9]}/>
        <Button type= {'zero'}>Потход</Button>
        <Button type= {'agro'}>Два</Button>
        <Button type= {'hero'}>ТРИ</Button>
      </ul>
    <h1>Чем мы отличаемся</h1>
    </div>
  );
}
export default App;