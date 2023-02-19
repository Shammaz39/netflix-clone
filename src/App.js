
import './App.css';
import Content from './Component/Content/Content';

import MainContent from './Component/MainContent/MainContent';
import NavBar from './Component/NavBar/NavBar';

import {action,comedy,drama,trending,triller} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
      <Content title = "Drama" url={drama} />
      <Content title = "Trending" url={trending} />
      <Content title = "Action" url={action} />
      <Content title = "Triller" url={triller} />
      <Content title = "Comedy" url={comedy} />
      

    </div>
  );
}

export default App;
