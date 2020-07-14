import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import  Header  from '../components/header';
import  expenseDashboard  from '../components/dashboard';
import  expenseAdd  from '../components/addPage';
import  expenseEdit  from '../components/editPage';
import  expenseHelp  from '../components/helpPage';
import  NotFoundPage  from '../components/notFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={expenseDashboard} exact={true}/>
                <Route path="/add" component={expenseAdd} />
                <Route path="/edit/:id" component={expenseEdit} />
                <Route path="/help" component={expenseHelp} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
