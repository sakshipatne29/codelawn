import Button from "react-bootstrap/Button";
// import Image from 'react-bootstrap/Image';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import codelawn from "../../src/containers/codelawn.jpg";
// import pic1 from "../../src/containers/pic1.jpg";

function LoginPage() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container text-center mt-5 ">
            <h1 className="" style={{ color: "greenyellow" }}>
              CodeLawn
            </h1>
            <h1 className="border rounded-5 bg-white ">
              Create. Build. Deploy.
            </h1>
          </div>

          <div className="container text-center p-3 border rounded-5 bg-white mt-4">
            <span className="border border-3 border-info rounded-5 p-2">
              <a className="" href="www.google.com">
                google
              </a>
            </span>
            <hr className="mt-4" />
            <Form className="p-4">
              <Form.Group className="mb-3" controlId="formBasi Email">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-white">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="ms-1 p-2 w-25" variant="primary" type="submit">
                Login
              </Button>
              <Button className="ms-5 p-2" variant="primary" type="submit">
                Forget Password
              </Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div>
            <img src={codelawn} width="100%" height="100%" alt="Codelawn" />
            {/* <img src={pic1.jpg} className = ""  alt="pic1 " /> */}
          </div>
        </Col>
      </Row> 
    </Container>
  );
}

export default LoginPage;
