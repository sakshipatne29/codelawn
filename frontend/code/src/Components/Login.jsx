import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import Register from "./Register";

function LoginPage() {
  return (
    <div className="bg p-5 ">
      <div className="bgt p-5 ">
        <div className="row">
          <div className="col">
            <div className="container text-center p-3 border rounded-5 bg-white mt-4">
              <ul class="nav nav-tabs " id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Login
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Signup
                  </button>
                </li>
                
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <a  href="www.google.com">
                    <FcGoogle className="mt-3" size="50px" />{" "}
                  </a>
                  <hr className="mt-3" />
                  <Form className="p-4">
                    <Form.Group className="mb-2" controlId="formBasi Email">
                      <Form.Control type="email" placeholder="Enter email" />
                      {/* <Form.Text
                        className="text-black"
                        style={{ fontSize: "10px", textAlign: "right" }}
                      >
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                      <p class="text-start fw-light">We'll never share your email with anyone else.</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button
                      className="ms-1 p-2 w-25"
                      variant="primary"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Button
                      className="ms-5 p-2"
                      variant="primary"
                      type="submit"
                    >
                      Forget Password
                    </Button>
                  </Form>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <Register />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container text-center mt-5 ">
              <h1 className="h1-txt">CodeLawn</h1>
              <h1 className="h2-txt ">Develop. Build. Deploy.</h1>
              <p>Here </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
