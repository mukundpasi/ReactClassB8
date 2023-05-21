import './App.css';
import Hello from './component/Hello';
import Header from './component/Header';
import Contactus from './component/Contacts';

function App() {
  const contactDetails = {
    name: "Mukund Pasi ",
    phone: "9998030410",
    email: "mukpas999@gmail.com"
  }
  return (
    <div>
      <Header></Header>
      <Hello></Hello>
      <Contactus contactDetails={contactDetails}></Contactus>
    </div>
  );
}

export default App;
