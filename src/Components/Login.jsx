import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginPage() {
  return (
    <div className="bg p-5 ">
      <div className ="bgt p-5 ">
      <div className="row">
        <div className="col">
          <div className="container text-center p-3 border rounded-5 bg-white mt-4">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
            <span className="border border-3 border-info rounded-5 p-2">
              <a className="" href="www.google.com">google</a>
            </span>
            <hr className="mt-4" />
            <Form className="p-4">
              <Form.Group className="mb-2" controlId="formBasi Email">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-black"> We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="ms-1 p-2 w-25" variant="primary" type="submit">Login
              </Button>
              <Button className="ms-5 p-2" variant="primary" type="submit">Forget Password
              </Button>
            </Form>
          </div>
        </div>
        <div className="col">
          <div className="container text-center mt-5 ">
            <h1 className="h1-txt" >CodeLawn</h1>
            <h1 className="h2-txt ">Create. Build. Deploy.</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
