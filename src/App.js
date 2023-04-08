import './App.css';
import Split from "react-split"
import {nanoid} from "nanoid"
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main>
      <Split 
          sizes = {[30,70]}
          direction= "horizontal"
          className= "split"
      >
          <Sidebar />
          <Editor />

      </Split>
    </main>
  );
}

export default App;
