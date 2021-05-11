import { gql, useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $name: String!, $password: String!) {
    signUp(input: { email: $email, name: $name, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION);
  const history = useHistory();
  const signUpHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    signUp({ variables: { email, name, password } });
  };

  useEffect(() => {
    if (error) {
      console.log(error.message);
    }
    if (data) {
      const token = data.signUp.token;
      Cookies.set("Authorization", token, { expires: 7 });
      history.push("/create");
    }
    // eslint-disable-next-line
  }, [data, error]);

  return (
    <div id="signUp" className="container">
      <form className="card bg-primary text-center card-form">
        <div className="card-body">
          <h3>Sign Up</h3>
          <p>
            It takes 30 seconds and allows you to create your own lists and
            observe rankings among your friends
          </p>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Username"
              value={name}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email"
              value={email}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              value={password}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              data-bv-identical="true"
              data-bv-identical-field="confirmPassword"
              data-bv-identical-message="The password and its confirm are not the same"
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Confirm Password"
              data-bv-identical="true"
              data-bv-identical-field="password"
              data-bv-identical-message="The password and its confirm are not the same"
            />
          </div>

          <div className="d-grid gap-2">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-outline-light btn-lg"
              onClick={signUpHandler}
            />
          </div>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
