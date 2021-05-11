import { gql, useMutation } from "@apollo/client";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      token
      user {
        id
      }
    }
  }
`;
const SignInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signIn, { data, error, loading }] = useMutation(SIGN_IN_MUTATION);
  const history = useHistory();
  const signInHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    signIn({ variables: { email, password } });
  };

  useEffect(() => {
    console.log("here");
    if (error) {
      console.log(error.message);
    }
    if (data) {
      const token = data.signIn.token;
      Cookies.set("Authorization", token, { expires: 7 });
      history.push("/create");
    }
    // eslint-disable-next-line
  }, [data, error]);

  return (
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div className="col-6 mx-auto">
          <form className="card bg-primary text-center card-form" action="#">
            <div className="card-body">
              <h3>Log In</h3>
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
                />
              </div>

              <div className="d-grid gap-2">
                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-outline-light btn-lg"
                  onClick={signInHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
