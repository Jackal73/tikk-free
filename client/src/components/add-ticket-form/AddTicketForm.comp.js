import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Form, Jumbotron, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { shortText } from '../../utils/validation';
import "./add-ticket-form.style.css";
import { openNewTicket } from './addTicketAction';
import { resetSuccessMsg } from './addTicketSlicer';


const initialFrmData = {
  // clientId: '',
  fileNo: "",
  closeDate: "",
  fundDate: "",
  closerOne: "",
  commishClOne: "",
  // closerTwo: "",
  // commishClTwo: "",
  // mobCloser: "",
  // mobFee: "",
  overage: "",
  processorOne: "",
  commishPrOne: "",
  // processorTwo: "",
  // commishPrTwo: "",
  clientRefOne: "",
  // clientRefTwo: "",
  realAgentOne: "",
  // realAgentTwo: "",
  lnOfficer: "",
  salesRepOne: "",
  salesTypeOne: "",
  // salesRepTwo: "",
  // salesTypeTwo: "",
  discount: "",
  // discountApproval: "",
  freedomCheck: "",
};

const initialFrmError = {
  // clientId: false,
  fileNo: "false",
  closerOne: "false",
  commishClOne: "false",
  overage: "false",
  processorOne: "false",
  commishPrOne: "false",
  clientRefOne: "false",
  realAgentOne: "false",
  lnOfficer: "false",
  salesRepOne: "false",
  salesTypeOne: "false",
  discount: "false",
  freedomCheck: "false",
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();
  // const {
  //   user: {name},
  // } = useSelector((state) => state.user);

  const {
    isLoading, error, successMsg
  } = useSelector((state) => state.openTicket);

  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmError, setFrmError] = useState(initialFrmError);

  useEffect(() => {
    return () => {
      successMsg && dispatch(resetSuccessMsg());
    };
  }, [dispatch, frmData, frmError, successMsg]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData ({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmError(initialFrmError);

    const isFileNoValid = await shortText(frmData.fileNo);
    const isDealTypeValid = await shortText(frmData.dealType);
    const isCloseDateValid = await shortText(frmData.closeDate);
    const isFundDateValid = await shortText(frmData.fundDate);
    const isCloserOneValid = await shortText(frmData.closerOne);
    const isCommishClOneValid = await shortText(frmData.commishClOne);
    const isOverageValid = await shortText(frmData.overage);
    const isProcessorOneValid = await shortText(frmData.processorOne);
    const isCommishPrOneValid = await shortText(frmData.commishPrOne);
    const isClientRefOneValid = await shortText(frmData.clientRefOne);
    const isRealAgentOneValid = await shortText(frmData.realAgentOne);
    const isLnOfficerValid = await shortText(frmData.lnOfficer);
    const isSalesRepOneValid = await shortText(frmData.salesRepOne);
    const isSalesTypeOneValid = await shortText(frmData.salesTypeOne);
    const isDiscountValid = await shortText(frmData.discount);
    const isFreedomCheckValid = await shortText(frmData.freedomCheck);

    setFrmError({
      ...initialFrmError,
      fileNo : !isFileNoValid,
      dealType : !isDealTypeValid,
      closeDate : !isCloseDateValid,
      fundDate : !isFundDateValid,
      closerOne : !isCloserOneValid,
      commishClOne : !isCommishClOneValid,
      overage : !isOverageValid,
      processorOne : !isProcessorOneValid,
      commishPrOne : !isCommishPrOneValid,
      clientRefOne : !isClientRefOneValid,
      realAgentOne : !isRealAgentOneValid,
      lnOfficer : !isLnOfficerValid,
      salesRepOne : !isSalesRepOneValid,
      salesTypeOne : !isSalesTypeOneValid,
      discount: !isDiscountValid,
      freedomCheck: !isFreedomCheckValid,
    });

    dispatch(openNewTicket({...frmData}));
  };

  return (
    <Jumbotron className="mt-3 add-new-ticket jumbotron">

      <h2 className="text-center shado text-shadow border freedom-clr mb-4 pt-2 pb-2">Commission Statement</h2>
      <hr className="" />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={4} className="freedom-clr mt-2">
            File Number
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              name="fileNo"
              value={frmData.fileNo}
              maxLength="20"
              onChange={handleOnChange}
              placeholder="File No."
              required
              className="shado mt-2"
            />
            <Form.Text className="text-danger">
              {!frmData.fileNo && "File Number is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2} className="freedom-clr">
            Closed
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              name="closeDate"
              value={frmData.closeDate}
              onChange={handleOnChange}
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
              {!frmData.closeDate && "Closing Date is required"}
            </Form.Text>
          </Col>

          <Form.Label column sm={2} className="freedom-clr">
            Funded
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              name="fundDate"
              value={frmData.fundDate}
              onChange={handleOnChange}
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
              {!frmData.fundDate && "Funding Date is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          {/* <Row className="ml-1"> */}
          <Col sm={12}>
            <Form.Label column sm={3} className="freedom-clr pl-0">
              Deal Type
            </Form.Label>
              <Form.Check
                inline
                type="radio"
                name="dealType"
                id="buyer"
                label="Buyer"
                value="buyer"
                onChange={handleOnChange}
                checked={frmData.dealType === "buyer"}
                className="flex-start shado pr-3 pl-1 border-radio freedom-clr"
                required
              />
              <Form.Check
                inline
                type="radio"
                name="dealType"
                id="seller"
                label="Seller"
                value="seller"
                onChange={handleOnChange}
                checked={frmData.dealType === "seller"}
                className="ml-2 shado pr-3 pl-1 border-radio freedom-clr"
                required
              />
              <Form.Check
                inline
                type="radio"
                name="dealType"
                id="buyerSeller"
                label="Buyer/Seller"
                value="buyerSeller"
                onChange={handleOnChange}
                checked={frmData.dealType === "buyerSeller"}
                className="ml-2 shado pr-3 pl-1 border-radio freedom-clr"
                required
              />
              <Form.Check
                inline
                type="radio"
                name="dealType"
                id="refi"
                label="Refi"
                value="refi"
                onChange={handleOnChange}
                checked={frmData.dealType === "refi"}
                className="ml-2 shado pr-3 pl-1 border-radio freedom-clr"
                required
              />
              <Form.Text className="text-danger center ml-5">
              {!frmData.dealType && "Deal Type is required"}
            </Form.Text>
              </Col>

          {/* </Row> */}
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr">
          <Form.Label column sm={6}>
            Closer
          </Form.Label>
          <Col sm={6}>

            <Form.Control
              name="closerOne"
              value={frmData.closerOne}
              minLength="2"
              onChange={handleOnChange}
              placeholder="Closer"
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
              {!frmData.closerOne && "Closer is required"}
            </Form.Text>

          </Col>
          <Form.Label column sm={6} className="mt-1">
            Commission
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="commishClOne"
              value={frmData.commishClOne}
              maxLength="12"
              onChange={handleOnChange}
              placeholder="Commission Amt"
              required
              className="shado border-2 mt-1"
            /><Form.Text className="text-danger center">
            {!frmData.commishClOne && "Commission is required"}
          </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr label-soft">
          <Form.Label column sm={6}>
            Closer#2
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="closerTwo"
              value={frmData.closerTwo}
              onChange={handleOnChange}
              placeholder="Closer #2"

              // className="shado"
            />
          </Col>
          <Form.Label column sm={6}>
            Commission#2
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="commishClTwo"
              maxLength="12"
              value={frmData.commishClTwo}
              onChange={handleOnChange}
              placeholder="Commission Amt #2"
              // className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr label-soft">
          <Form.Label column sm={6}>
            Mobile Closer
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="mobCloser"
              value={frmData.mobCloser}
              onChange={handleOnChange}
              placeholder="Mobile Closer"
              // className="shado"
            />
          </Col>

          <Form.Label column sm={6}>
            Fee Amount
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="mobFee"
              maxLength="12"
              value={frmData.mobFee}
              onChange={handleOnChange}
              placeholder="Amt of Fee"
              // className="shado"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr">
          <Form.Label column sm={6}>
            Overage
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="overage"
              value={frmData.overage}
              maxLength="12"
              onChange={handleOnChange}
              placeholder="Amt of Overage"
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
            {!frmData.overage && "Overage is required"}
            </Form.Text>
          </Col>

        </Form.Group>

        <Form.Group as={Row} className="freedom-clr">
            <Form.Label column sm={2}>
              Processor
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                name="processorOne"
                value={frmData.processorOne}
                minLength="2"
                onChange={handleOnChange}
                placeholder="Processor"
                required
                className="shado"
              />
              <Form.Text className="text-danger center">
                {!frmData.processorOne && "Processor is required"}
              </Form.Text>
            </Col>

            <Form.Label column sm={3}>
              Commission
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                name="commishPrOne"
                value={frmData.commishPrOne}
                minLength="2"
                maxLength="12"
                onChange={handleOnChange}
                placeholder="Commission Amt"
                required
                className="shado"
              />
              <Form.Text className="text-danger center">
                {!frmData.commishPrOne && "Commission is required"}
              </Form.Text>
            </Col>

          <Form.Label column sm={2} className="mt-1 label-soft">
            Processor#2
          </Form.Label>
          <Col sm={4}>
              <Form.Control
                name="processorTwo"
                value={frmData.processorTwo}
                maxLength="100"
                onChange={handleOnChange}
                placeholder="Processor #2"
                className="mt-1"
              />
            </Col>

            <Form.Label column sm={3} className="mt-1 label-soft">
              Commission#2
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                name="commishPrTwo"
                value={frmData.commishPrTwo}
                maxLength="12"
                onChange={handleOnChange}
                placeholder="Commission #2 Amt"
                className="mt-1"
              />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="freedom-clr">
          <Form.Label column sm={6}>
            Client Referral
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="clientRefOne"
              value={frmData.clientRefOne}
              minLength="2"
              onChange={handleOnChange}
              placeholder="Referral"
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
              {!frmData.clientRefOne && "Referral is required"}
            </Form.Text>
          </Col>

          <Form.Label column sm={6} className="mt-1 label-soft">
            Client Referral#2 - (Split Deals)
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="clientRefTwo"
              value={frmData.clientRefTwo}
              onChange={handleOnChange}
              placeholder="Referral #2"
              className="mt-1"
            />
          </Col>
        </Form.Group>

        <hr />

        <div className="mb-3">
          <h5 className="text-shadow freedom-clr capitalize font-md">Real Estate Agent Or Loan Officer (Refinance)</h5>
        </div>

        <Form.Group as={Row} className="freedom-clr">
          <Form.Label column sm={6}>
            Real Estate Agent
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="realAgentOne"
              value={frmData.realAgentOne}
              minLength="2"
              onChange={handleOnChange}
              placeholder="RE Agent"
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
                {!frmData.realAgentOne && "Real Estate Agent is required"}
              </Form.Text>

          </Col>

          <Form.Label column sm={6} className="mt-1 label-soft">
            Real Estate Agent#2 - (Split Deals)
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="realAgentTwo"
              value={frmData.realAgentTwo}
              onChange={handleOnChange}
              placeholder="RE Agent #2"
              // className="shado"
              className="mb-2 mt-1"
            />
          </Col>

          <Form.Label column sm={6}>
            Loan Officer - (Refinance)
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="lnOfficer"
              value={frmData.lnOfficer}
              minLength="2"
              onChange={handleOnChange}
              placeholder="Loan Officer"
              required
              className="shado mt-1"
            />
            <Form.Text className="text-danger center">
                {!frmData.lnOfficer && "Loan Officer is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} className="freedom-clr">
          <Form.Label column sm={6}>
            Freedom Sales Rep#1
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="salesRepOne"
              value={frmData.salesRepOne}
              minLength="2"
              onChange={handleOnChange}
              placeholder="Sales Rep"
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
                {!frmData.salesRepOne && "Sales Rep is required"}
            </Form.Text>
          </Col>
          <Col sm={12}>
          <Form.Label column sm={4} className="freedom-clr pl-0 mt-1">
            Sales Type
          </Form.Label>
            <Form.Check
              inline
              type="radio"
              name="salesTypeOne"
              id="buyer1"
              label="Buyer"
              value="buyer"
              onChange={handleOnChange}
              checked={frmData.salesTypeOne === "buyer"}
              className="shado pl-1 pr-3 mt-1 border-radio freedom-clr"
            />
            <Form.Check
              inline
              type="radio"
              name="salesTypeOne"
              id="seller1"
              label="Seller"
              value="seller"
              onChange={handleOnChange}
              checked={frmData.salesTypeOne === "seller"}
              className="shado pl-1 pr-3 mt-1 border-radio freedom-clr"
            />
            <Form.Check
              inline
              type="radio"
              name="salesTypeOne"
              id="buyerSeller1"
              label="Buyer/Seller"
              value="buyerSeller"
              onChange={handleOnChange}
              checked={frmData.salesTypeOne === "buyerSeller"}
              className="shado pl-1 pr-3 mt-1 border-radio freedom-clr center"
            />
            <Form.Text className="text-danger center ml-5">
              {!frmData.salesTypeOne && "Sales Type is required"}
            </Form.Text>
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="freedom-clr label-soft">
          {/* <Row className="ml-1"> */}
            <Form.Label column sm={6}>
              Freedom Sales Rep#2
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                name="salesRepTwo"
                value={frmData.salesRepTwo}
                minLength="2"
                onChange={handleOnChange}
                placeholder="Sales Rep #2"

                // className="shado"
              />
            </Col>
            <Col sm={12}>
            <Form.Label column sm={4} className=" pl-0">
              Sales Type#2
            </Form.Label>
              <Form.Check
                inline
                type="radio"
                name="salesTypeTwo"
                id="buyer2"
                label="Buyer"
                value="buyer"
                onChange={handleOnChange}
                checked={frmData.salesTypeTwo === "buyer"}
                className="shado pl-1 pr-3 border-no-req freedom-clr soft"
              />
              <Form.Check
                inline
                type="radio"
                name="salesTypeTwo"
                id="seller2"
                label="Seller"
                value="seller"
                onChange={handleOnChange}
                checked={frmData.salesTypeTwo === "seller"}
                className="shado pl-1 pr-3 border-no-req freedom-clr soft"
              />
              <Form.Check
                inline
                type="radio"
                name="salesTypeTwo"
                id="buyerSeller2"
                label="Buyer/Seller"
                value="buyerSeller"
                onChange={handleOnChange}
                checked={frmData.salesTypeTwo === "buyerSeller"}
                className="shado pl-1 pr-3 border-no-req freedom-clr soft"
              />

              </Col>

        </Form.Group>

          <hr />

        <div>
          <Row className="mt-2 ml-1">
            <h5 className="text-shadow mb-3 freedom-clr font-md capitalize">
              Were there any discounts approved?
            </h5>
            <Form.Check
              inline
              type="radio"
              name="discount"
              id="yes"
              label="Yes"
              value="yes"
              onChange={handleOnChange}
              checked={frmData.discount === "yes"}
              className="ml-3 mb-3 shado pl-1 pr-3 freedom-clr border-radio"
            />

            <Form.Text className="text-danger">
              {!frmData.discount && "Required"}
            </Form.Text>

            <Form.Check
              inline
              type="radio"
              name="discount"
              id="no"
              label="No"
              value="no"
              onChange={handleOnChange}
              checked={frmData.discount === "no"}
              className="ml-3 mb-3 shado pl-1 pr-3 freedom-clr border-radio"
            />

            </Row>
            </div>

            <Form.Group as={Row} className="freedom-clr">

            <Form.Label column sm={6}>
              Discount Approval By
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                name="discountApproval"
                value={frmData.discountApproval}
                minLength="2"
                onChange={handleOnChange}
                placeholder="Discount Approval By"

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
              name="freedomCheck"
              value={frmData.freedomCheck}
              maxLength="12"
              onChange={handleOnChange}
              placeholder="Freedom Check Amt"
              required
              className="shado"
            />
            <Form.Text className="text-danger center">
              {!frmData.freedomCheck && "Freedom Check Amount is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={5} className="freedom-clr">Additional Notes</Form.Label>

          <Form.Control
            as="textarea"
            name="message"
            rows="2"
            value={frmData.message}
            onChange={handleOnChange}
            placeholder=" ..."
            className="shado"
          />

        </Form.Group>

        <div className="w50 center">
        <Button type="submit" className="freedom-grad-rd shado bold6 mt-4">Add Commission Statement</Button>
        </div>

      </Form>
      {/* </div> */}
    </Jumbotron>
  )
}





