
import './App.css';

import PredictForm from './PredictForm';
import ProjectIntroCard from './ProjectIntroCard';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      
      <ProjectIntroCard/>

      <PredictForm/>
      <footer className="mt-11">
      <Footer/>
      </footer>
    
     
    </div>
  );
}

export default App;
