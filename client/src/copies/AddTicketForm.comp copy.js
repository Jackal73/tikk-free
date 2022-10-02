// import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Jumbotron, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { shortText } from '../utils/validation';
import "./add-ticket-form.style.css";
import { openNewTicket } from '../components/add-ticket-form/addTicketAction';
import { resetSuccessMsg } from '../components/add-ticket-form/addTicketSlicer';


const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};

const initialFrmError = {
  subject: "false",
  issueDate: "false",
  message: "false",
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();
  const {
    user: {name},
  } = useSelector((state) => state.user);

  const {
    isLoading, error, successMsg
  } = useSelector((state) => state.openTicket);

  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {
    return () => {
      successMsg && dispatch(resetSuccessMsg());
    };
  }, [dispatch, frmData, frmDataError, successMsg]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData ({
      ...frmData,
      [name] : value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject : isSubjectValid,
    });

    dispatch(openNewTicket({...frmData, sender: name}));
  };

  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Subject
              </Form.Label>
              <Col sm={9}>
              <Form.Control
                name="subject"
                value={frmData.subject}
                // minLength="3"
                maxLength="100"
                onChange={handleOnChange}
                placeholder="Subject"
                required
              />
              <Form.Text className="text-danger">
                {!frmDataError.subject && "Subject is required"}
              </Form.Text>
              </Col>

            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Issue Found
              </Form.Label>
              <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={frmData.issueDate}
                onChange={handleOnChange}
                required
              />

              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>Details</Form.Label>
              {/* <Col sm={9}> */}
              <Form.Control
                as="textarea"
                name="message"
                rows="5"
                value={frmData.message}
                onChange={handleOnChange}
                required

              />
              {/* </Col> */}
            </Form.Group>

            <Button type="submit" variant="info" block>Open Ticket</Button>
          </Form>
    </Jumbotron>
  )
}

// AddTicketForm.propTypes = {
//   handleOnChange: PropTypes.func.isRequired,
//   handleOnSubmit: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
//   frmDataError: PropTypes.object.isRequired,
// };
