import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup'
import {gql, useMutation} from "@apollo/client";
import { useNavigate } from "react-router-dom";


const LOGIN_MUTATION = gql`
mutation login($emailOrUsername: String!, $password: String) {
  login(emailOrUsername: $emailOrUsername, password: $password) {
    status
  }
}
  
`


const Login = ({}) => {
  const navigate = useNavigate();
  const [login, {data, error, loading}] = useMutation(LOGIN_MUTATION);
  
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is Required!").min(8, "Password must be atleast 8 charaters long"),
  })

  return (

    <div>
      <h1>Login Page</h1>
      <Formik initialValues={{emailOrUsername: "", password: ""}} validationSchema={validationSchema}
        onSubmit={async (values, {setSubmitting}) => {
          console.log(values);
          // setSubmitting(true)
          // const response = await login({variables: values});
          // localStorage.setItem("token", response.data.signup.token)
          // setSubmitting(false)
          // navigate("/users")
          
        }}
      >
         <Form>
          <Field name="emailOrUsername" type="text" placeholder="Email Or Username" /> <br/>
          <ErrorMessage name="emailOrUsername" component={'div'} />
          <Field name="password" type="password" placeholder="Password" /> <br/>
          <ErrorMessage name="password" component={'div'} />
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login;