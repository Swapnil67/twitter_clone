import React from "react";
import {Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup'
import {gql, useMutation} from "@apollo/client";
import {useNavigate} from 'react-router-dom'; //  react-router-dom v6 useHistory() is replaced by useNavigate()

const SIGNUP_MUTATION = gql`
  mutation signup($name: String, $email: String!, $password: String) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  } 
`

interface SignupSchema {
  email: string
  username: string
  password: string
  confirm_password: string
}


const SignUp = () => {
  const navigate = useNavigate();
  const [signup, {data}] = useMutation(SIGNUP_MUTATION);
  
  const initialValues: SignupSchema = {
    email: "",
    username: "",
    password: "",
    confirm_password: ""
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is Required!"),
    username: Yup.string().required("Username is Required!").min(3, "Username must have minimum 3 characters"),
    password: Yup.string().required("Password is Required!").min(8, "Password must be atleast 8 charaters long"),
    confirm_password: Yup.string().required("Confirm Password is Required!")
  })

  return (
    <div>
      <h1>SignUp</h1>
      <Formik initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
          
          // setSubmittng(true)
          // const response = await SignUp({variables: values});
          // localStorage.setItem("token", response.data.signup.token)
          // setSubmittng(false)
          // navigate("/users")
        }}
      >
        <Form>
          <Field name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email" component={'div'} />
          <Field name="username" type="text" placeholder="Username" />
          <ErrorMessage name="username" component={'div'} />
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component={'div'} />
          <Field name="confirm_password" type="password" placeholder="Confirm Password" />
          <ErrorMessage name="confirm_password" component={'div'} />
          <button type='submit'>Signup</button>
        </Form>
      </Formik>
    </div>
  )
};

export default SignUp;