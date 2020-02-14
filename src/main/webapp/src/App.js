import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Styles/Components/App.css';
import TeamsListPage from './Pages/TeamsListPage';
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Authentication from './Components/Authentication';
import TeamsPage from './Pages/TeamPage';

class App extends Component {

    constructor(props) {
        super(props);
    }


    render()
    {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={TeamsListPage} />
                        <Route path="/teams" component={TeamsListPage} />
                        <Route path="/team" component={TeamsPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/logout" render={() => <Authentication logout={true} />}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}

export default App;
