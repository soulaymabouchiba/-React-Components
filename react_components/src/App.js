import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Adresse from './Component/Profile/Address'
function App() {
  return (
    <div className="App">
        <ProfilePhoto />
         <FullName />
          <Adresse />     
         </div>
  );
}

export default App;
