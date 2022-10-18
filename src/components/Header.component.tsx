import React                                           from "react";
import {Container, Form, InputGroup, Col, Button, Row} from "react-bootstrap";
import {Link, useNavigate}                             from "react-router-dom";
import {ROUTES}                                        from "../routes.constants";
import {getBlockUrl}                                   from "../routes.utils";

export const Header: React.FC = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [blockNumberSearch, setBlockNumberSearch] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!blockNumberSearch || isNaN(Number(blockNumberSearch))) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    setBlockNumberSearch("");
    navigate(getBlockUrl(Number(blockNumberSearch)));
  }, [blockNumberSearch, navigate]);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setBlockNumberSearch(event.target.value);
  }, [])

  return (
    <div className={"bg-white py-3 border-bottom shadow-sm"}>
      <Container>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className={"align-items-center"}>
            <Form.Group as={Col} md="6">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search by block number"
                  aria-describedby="inputGroupPrepend"
                  isInvalid={isInvalid}
                  onChange={handleChange}
                  value={blockNumberSearch}
                />
                <Button id="button-search" type={"submit"}>
                  Search
                </Button>
                <Form.Control.Feedback type="invalid" tooltip>
                  Please enter a valid number
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Link to={ROUTES.latest}>
                <Button>
                  Go to latest block
                </Button>
              </Link>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </div>
  )
}
