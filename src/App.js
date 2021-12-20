import NavBar from './Components/NavBar';
import CrudApp from './Components/CrudApp';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import NotFound from './Components/NotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path = "/" component={CrudApp}/>
          <Route exact path = "/all-user" component={AllUser}/>
          <Route exact path = "/add-user" component={AddUser}/>
          <Route exact path = "/edit/:id" component={EditUser}/>
          <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
} 

export default App;
