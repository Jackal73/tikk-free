import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { fetchSingleTicket } from '../ticket-list/ticketsAction';
import { resetResponseMsg } from '../ticket-list/ticketsSlice';

import { Alert, Col, Container, Form, Jumbotron, Row, Spinner } from 'react-bootstrap';

// import "../../components/add-ticket-form.style.css";


export const Ticket = () => {
  const {tId} = useParams();
  const dispatch = useDispatch();
  const {
    isLoading,
    error,
    selectedTicket,
    replyMsg,
    replyTicketError
  } = useSelector(state => state.tickets);

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));

    return () => {
      (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
    }
}, [tId, dispatch, replyMsg, replyTicketError]);


// fix javascript date issue
let dateC = new Date(selectedTicket.closeDate);
dateC = new Date(dateC.getTime() + dateC.getTimezoneOffset() * 60000)

let dateF = new Date(selectedTicket.fundDate);
dateF = new Date(dateF.getTime() + dateF.getTimezoneOffset() * 60000)

let closeDate = dateC.toLocaleDateString().substring(0,10);
let fundDate = dateF.toLocaleDateString().substring(0,10);





  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Commission Statement" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant='primary' animation="border" />}
          {error && <Alert variant='danger'>{error}</Alert>}
          {replyTicketError && <Alert variant='danger'>{replyTicketError}</Alert>}
          {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
        </Col>
      </Row>
      <Row>
        <Jumbotron className="mt-3 add-new-ticket jumbotron" >
          <div className="text-center font-lg bold7 shado text-shadow border freedom-clr">Commission Statement</div>
          <hr className="" />

          <Form autoComplete="off">
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                File Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  value={selectedTicket.fileNo}
                  className="shado mb-3"

                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Date Closed
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              value={closeDate}
              // eslint-disable-next-line no-extend-native
              // value={new Date.prototype.addHours(selectedTicket.closedAt)}
              className="shado"
            />
          </Col>

          <Form.Label column sm={2}>
            Date Fund
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              // value={(new Date(selectedTicket.fundDate).toLocalDateString('CDT'))}
              // value={selectedTicket.fundDate}
              value={fundDate}

              className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Deal Type
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              value={selectedTicket.dealType}
              className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={6}>
            Closer
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.closerOne}
              className="shado mb-1"
            />
          </Col>

          <Form.Label column sm={6}>
            Commission
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.commishClOne}
              className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={6}>
            Closer#2
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.closerTwo}
              // className="shado"
            />
          </Col>
          <Form.Label column sm={6}>
            Commission#2
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.commishClTwo}
              // className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={6}>
            Mobile Closer
          </Form.Label>
          <Col sm={6}>
            <Form.Control

              value={selectedTicket.mobCloser}

              // className="shado"
            />
          </Col>

          <Form.Label column sm={6}>
            Fee Amount
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.mobFee}
              // className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={6}>
            Overage
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.overage}
              minLength="2"
              className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Processor
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                value={selectedTicket.processorOne}
                minLength="2"
                className="shado"
              />
            </Col>

            <Form.Label column sm={3}>
              Commission
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                value={selectedTicket.commishPrOne}
                minLength="2"
                className="shado mb-1"
              />
            </Col>

          <Form.Label column sm={2}>
            Processor#2
          </Form.Label>
          <Col sm={4}>
              <Form.Control
                value={selectedTicket.processorTwo}
                // className="shado"
              />
            </Col>

            <Form.Label column sm={3}>
              Commission#2
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                value={selectedTicket.commishPrTwo}
                // className="shado mb-1"
              />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={6}>
            Client Referral
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.clientRefOne}

              // required
              className="shado mb-1"
            />
          </Col>

          <Form.Label column sm={6}>
            Client Referral#2 - (Split Deals)
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.clientRefTwo}
              // className="shado"
            />
          </Col>
        </Form.Group>

        <hr />

        <div className="mb-3">
          <h5 className="text-shadow capitalize">Real Estate Agent Or Loan Officer (Refinance)</h5>
        </div>

        <Form.Group as={Row}>
          <Form.Label column sm={6}>
            Real Estate Agent
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.realAgentOne}
              minLength="2"
              className="shado"

            />
          </Col>

          <Form.Label column sm={6}>
            Real Estate Agent#2 - (Split Deals)
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.realAgentTwo}
              // className="shado"
            />
          </Col>

          <Form.Label column sm={6}>
            Loan Officer - (Refinance)
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              value={selectedTicket.lnOfficer}
              minLength="2"
              // required
              className="shado"
            />
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row}>
          {/* <Row className="ml-1"> */}
            <Form.Label column sm={6}>
              Freedom Sales Rep
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                value={selectedTicket.salesRepOne}
                // className="shado"
              />
            </Col>




            <Form.Label column sm={3}>
              Sales Type
            </Form.Label>
            <Col sm={3}>

              <Form.Control
            value={selectedTicket.salesTypeOne}
            className="shado"
            />


              </Col>
        </Form.Group>


        <Form.Group as={Row}>
          {/* <Row className="ml-1"> */}
            <Form.Label column sm={6}>
              Freedom Sales Rep#2
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                value={selectedTicket.salesRepTwo}
                // className="shado"
              />
            </Col>




            <Form.Label column sm={3}>
              Sales Type#2
            </Form.Label>
            <Col sm={3}>

              <Form.Control
            value={selectedTicket.salesTypeTwo}
            className="shado"
            />


              </Col>
        </Form.Group>



          <hr />

        <div>
          <Row className="mt-2 ml-1">
            <h5 className="text-shadow mb-4 font-md capitalize">
              Were there any discounts approved?
            </h5>

            <Col sm={2} className="ml-4">

              <Form.Control
            value={selectedTicket.discount}
            className="shado ml-3 mb-2"
            />
            </Col>
          </Row>
        </div>

            <Form.Group as={Row} className="">

            <Form.Label column sm={6}>
              Discount Approval By
            </Form.Label>
            <Col sm={6}>
              <Form.Control

                value={selectedTicket.discountApproval}


                // className="shado"
              />
            </Col>
          </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={6} className="bold8 font3x text-grad">
            *Freedom Check Amount
          </Form.Label>
          <Col sm={6}>
            <Form.Control

              value={selectedTicket.freedomCheck}

              className="shado"
            />

          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={5} className="freedom-clr">Additional Notes</Form.Label>

          <Form.Control

            value={selectedTicket.message}

            className="shado"
          />

        </Form.Group>

          </Form>
        </Jumbotron>
      </Row>

      <hr />

    </Container>
  )
}
