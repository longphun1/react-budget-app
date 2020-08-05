import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import  expenseDashboard  from '../components/dashboard';
import  expenseAdd  from '../components/addPage';
import  expenseEdit  from '../components/editPage';
import  expenseHelp  from '../components/helpPage';
import  NotFoundPage  from '../components/notFound';
import loginPage from '../components/loginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './privateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch>
                <Route path="/" component={loginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={expenseDashboard}/>
                <PrivateRoute path="/add" component={expenseAdd} />
                <PrivateRoute path="/edit/:id" component={expenseEdit} />
                <Route path="/help" component={expenseHelp} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
