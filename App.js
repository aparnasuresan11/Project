import './App.css';
import {cookies} from './cookies';

import TableApp from './components/Table'
function App() {
  return (
    <div className="App">
      {console.log(cookies)}
      <TableApp cookies={cookies}/>
    </div>
  );
}

export default App;
