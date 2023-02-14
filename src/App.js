
import './App.css';
import Content from './Component/Content/Content';

import MainContent from './Component/MainContent/MainContent';
import NavBar from './Component/NavBar/NavBar';

import {trending,action,triller} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
      <Content title = "Trending Movies" url={trending} />
      <Content title = "Action Movies" url={action} />
      <Content title = "Triller Movies" url={triller} />

    </div>
  );
}

export default App;
