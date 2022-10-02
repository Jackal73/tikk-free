import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/search form/SearchForm.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import { fetchAllTickets } from './ticketsAction';

export const TicketLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Commission Statements" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Link to="/add-ticket">
            <Button className="freedom-grad shado bold6">Add New Statement</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <TicketTable />

        </Col>
      </Row>
    </Container>
  );
};
