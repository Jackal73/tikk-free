import { configureStore } from '@reduxjs/toolkit';
import newTicketReducer from './components/add-ticket-form/addTicketSlicer';
import loginReducer from './components/login/loginSlice';
import registrationReducer from './components/registration-form/userRegistrationSlice';
import userReducer from './pages/dashboard/userSlice';
import ticketsReducer from './pages/ticket-list/ticketsSlice';
import adminReducer from './pages/profile/adminUserSlice';

  const store = configureStore ({
    reducer: {
      tickets: ticketsReducer,
      login: loginReducer,
      user: userReducer,
      openTicket: newTicketReducer,
      registration: registrationReducer,
      admin: adminReducer,
    },

  });

export default store;