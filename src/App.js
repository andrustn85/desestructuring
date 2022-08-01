import './App.css';

import cars from './practice'

const [honda, tesla] = cars

const {speedStats: {topSpeed: teslaTopSpeed}} = tesla

const {speedStats: {topSpeed: hondaTopSpeed}} = honda

const {coloursByPopularity: [teslaTopColour]} = tesla

const {coloursByPopularity: [hondaTopColour]} = honda
  
  function App() {
  return (
    <div className="App">
      <header className="App-header">
   <table>
     <tr>
       <th> Brand </th>
       <th> Top Speed </th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>,
      </header>
    </div>
  );
}

export default App;
