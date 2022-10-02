import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





export const TicketTable1 = ({tickets}) => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  // const fetchAllTickets = () => async (dispatch) => {
  //   dispatch(fetchTicketLoading());
  //   try {
  //     const result = await getAllTickets();
  //     result.data.result.length &&
  //       dispatch(fetchTicketsSuccess(result.data.result));
  //   } catch (error) {
  //     dispatch(fetchTicketsFail(error.message));
  //   }


//  fix javascript date issue
// let dateC = new Date(fetchAllTickets().data.closeDate);
// dateC = new Date(dateC.getTime() + dateC.getTimezoneOffset() * 60000)

// let dateF = new Date(fetchAllTickets.data.fundDate)
// dateF = new Date(dateF.getTime() + dateF.getTimezoneOffset() * 60000)

// let cDate = dateC.toLocaleDateString().substring(0,10);
// let fDate = dateF.toLocaleDateString().substring(0,10);

  return (
  <Table striped hover>
    <thead>
      <tr className="hard-back text-white">
        <th>File #</th>
        <th>Closer</th>
        <th>Funded On</th>
        <th>Commission</th>
      </tr>
    </thead>
    <tbody>
      {searchTicketList.length ? (
        searchTicketList.slice(0, 1000).reverse().map((row) => (

          <tr key={row._id}>
            <td>
              <Link to={`/ticket/${row._id}`} className="link-grad">{row.fileNo}</Link>
            </td>
            <td>{row.closerOne}</td>

            {/* <td>{row.fundDate && new Date(row.fundDate).toLocaleDateString('en-US')}</td> */}

            <td>{row.fundDate}</td>


            <td>{row.commishClOne}</td>


          </tr>

        ))
        ) : (
        <tr>
          <td colSpan="4" className="text-center">
            No tickets to show{""}
          </td>
        </tr>
      )}
    </tbody>
  </Table>
  );
};


