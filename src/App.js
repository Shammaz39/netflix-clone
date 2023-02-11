
import './App.css';
import Content from './Component/Content/Content';

import MainContent from './Component/MainContent/MainContent';
import NavBar from './Component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
      <Content/>
    </div>
  );
}

export default App;
