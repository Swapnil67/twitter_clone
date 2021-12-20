import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup'
import {gql, useMutation} from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import TwitterLogo from "../styles/assets/twitter-logo.png";
  // # https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/

const LOGIN_MUTATION = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
  
`


const Login = ({}) => {
  const navigate = useNavigate();
  const [login, {data, error, loading}] = useMutation(LOGIN_MUTATION);
  
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is Required!").min(5, "Password must be atleast 8 charaters long"),
  })

  return (

    <div>
      <img src={TwitterLogo} alt="logo" style={{ width: '50px' }} className="logo" />
      <h3>Login Page to Fake Twitter</h3>
      <Formik initialValues={{email: "", password: ""}} validationSchema={validationSchema}
        onSubmit={async (values, {setSubmitting}) => {
          console.log(values);
          setSubmitting(true)
          const response = await login({variables: {email: values.email, password: values.password}});
          localStorage.setItem("token", response.data.login.token)
          setSubmitting(false)
          navigate("/users")
        }}
      >
         <Form>
          <Field name="email" type="text" placeholder="Email Or Username" /> <br/>
          <ErrorMessage name="email" component={'div'} />
          <Field name="password" type="password" placeholder="Password" /> <br/>
          <ErrorMessage name="password" component={'div'} />
          <button className="login-button" type='submit'><span>Login</span></button>
        </Form>
      </Formik>
      <div className="register">
        <h4>Don't have an account?</h4>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login;