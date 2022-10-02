import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import { fetchAllTickets } from '../ticket-list/ticketsAction';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector(state => state.tickets);
  // const user = tickets[0].subject;

  useEffect(() => {
    if(!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const totalTickets = tickets.length;
  const user = tickets[3]?.closerOne;
  // const user = tickets[0]?.subject;

  console.log(user);

  return (
    <Container className="pr-0 pl-0">
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Col>
        <div className="mt-3 ml-3">
          <h3 className="freedom-clr">Good morning, {user}</h3>
        </div>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button style={{ fontSize: "2rem", padding : '10px 30px' }} className="freedom-grad-rd shado bold6">Add New Statement</Button>
          </Link>
        </Col>
      </Col>
      <Row>
        <Col className="text-center mt-4 mb-4 font3x bold6">
          <div>Showing Latest <span className="bold8 text-grad ">{totalTickets < 10 ? totalTickets : 10}</span> <br /> of <span className="bold8 text-grad">{totalTickets}</span> Commission Statements</div>


        </Col>
      </Row>
      <Row>
        <Col className="mt-3 bold6 font3x freedom-clr">Recent Statements: </Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
        <TicketTable tickets = {tickets} />

        </Col>

      </Row>

    </Container>
  )
}
