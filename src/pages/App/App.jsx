import './App.css';
import {useState} from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import AuthPage from '../AuthPage/AuthPage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar/Navbar';

export default function App() {
  // eslint-disable-next-line
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
        {user ? (
        <>
            <Navbar user={ user } setUser={ setUser }/>
            <Switch>
                <Route path="/orders/new">
                      <NewPuppyPage />
                </Route>
                <Route path="/orders">
                      <OrderHistoryPage />
                </Route>
                <Redirect to="/orders"/>
                
            </Switch>  
        </>
        ) : (

            <AuthPage />
          
        )
        } 
   
    </main>
  );
}


