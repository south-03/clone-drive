import './App.css';
import { useState } from 'react';

import Header from './components/header'
import Sidebar from './components/sidebar'


function App() {
  
  const [user, setUser] = useState({
    displayName: "David Rakosi",
    email: "david@cleverprogrammer.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-1/178830807_1616221572099604_1074872570203691627_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=LAQ7KeP8HQMAX9Pqv4c&_nc_ht=scontent.fsgn2-7.fna&oh=00_AT-_RBWFIUDumT2aiFSjV96qxIOFRLCV1kS5u30TsFImbQ&oe=637E06B9"
  })

  return (
    <div className="App">
      
      <Header userPhoto={user.photoURL}/>
      <Sidebar/>
    </div>
  );
}

export default App;
