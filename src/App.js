
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className="App">
     
    <Header />
   <div className="main">
      <Sidebar className = 'sidebar' />
      <Form className= 'form' />
   </div>
    
    </div>
  );
}

export default App;
