import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageBreadcrumb } from '../components/breadcrumb/Breadcrumb.comp';
import { TicketTable } from '../components/ticket-table/TicketTable.comp';
import { fetchAllTickets } from '../pages/ticket-list/ticketsAction';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector(state => state.tickets);

  useEffect(() => {
    if(!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter(row => row.status !== "Closed");
  const totalTickets = tickets.length;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button variant="info" style={{ fontSize: "2rem", padding : '10px 30px' }}>Add New Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total Tickets : {totalTickets}</div>
          <div>Pending Tickets : {pendingTickets.length}</div>

        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Tickets: </Col>
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
