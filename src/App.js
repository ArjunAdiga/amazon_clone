
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header  from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import  Login  from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import React,{ useEffect } from 'react';
import { auth } from './Components/firebase';

function App() {
   const[{user},dispatch]=useStateValue()

   useEffect ( () => {
     const unsubscribe= auth.onAuthStateChanged( (authUser) => {
         if(authUser) {

            dispatch ( {
               type:"SET_USER",
               user:authUser,
            });

         } else {
            dispatch ( {
               type:"SET_USER",
               user:null,
            });
         }
      });
      return () => {
         unsubscribe();
      };
   },[])
   console.log("user is",user)

  return (
    <div className="App"> 
       <Router>
          <Routes>           
             <Route path='/checkout'
                element=  {
                  <>
                     <Header/>
                     <Checkout/>
                  </>
                 } >      
             </Route>
             <Route path='/login'
                 element={<Login/>}>
             </Route>
             <Route path='/' element=  {<>
               <Header />
               <Home />            
              </> } > 
             </Route>       
          </Routes>
       </Router>
    </div>
  );
}

export default App;
