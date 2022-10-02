import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdminRoute } from './components/admin-route/AdminRoute.comp';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';
import { AdminDashboard } from './pages/dashboard/AdminDashboard.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Entry } from './pages/entry/Entry.page';
import Login from './pages/login/Login';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import Register from './pages/register/Register';
import { Registration } from './pages/registration/Registration.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { UserVerification } from './pages/user-verification/UserVerification.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* ------------------------------- */}
          <Route path="/admin-user">
            <Login />
          </Route>
          <AdminRoute exact path="/adminDashboard">
						<AdminDashboard />
					</AdminRoute>
          <Route path="/register">
            <Register />
          </Route>
          {/* ------------------------------- */}
          <Route exact path="/">
            <Entry />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/verification/:_id/:email">
            <UserVerification />
          </Route>

          <PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>

					<PrivateRoute exact path="/add-ticket">
						<AddTicket />
					</PrivateRoute>
					<PrivateRoute exact path="/ticket/:tId">
						<Ticket />
					</PrivateRoute>
					<PrivateRoute exact path="/tickets">
						<TicketLists />
					</PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
