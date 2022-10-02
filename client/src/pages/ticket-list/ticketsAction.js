import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed } from '../../api/ticketApi';
import {
  closeTicketFail, closeTicketLoading,
  closeTicketSuccess, fetchSingleTicketLoading,
  fetchSingleTicketsFail,
  fetchSingleTicketsSuccess,
  fetchTicketLoading,
  fetchTicketsFail,
  fetchTicketsSuccess,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess, searchTickets
} from './ticketsSlice';


export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    result.data.result.length &&
      dispatch(fetchTicketsSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketsFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

// Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    dispatch(
      fetchSingleTicketsSuccess(
      result.data.result.length && result.data.result[0]

      )

    );
    console.log(result.data)

  } catch (error) {
    dispatch(
      fetchSingleTicketsFail(error.message));

      console.log(error.message);
  }

};

// Actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result);
    if(result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(replyTicketFail(error.message));
  }
};

// Actions for replying on single ticket
export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    console.log(result);
    if(result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(closeTicketSuccess(result.message));
  } catch (error) {
    console.log(error.message);
    dispatch(closeTicketFail(error.message));
  }
};

