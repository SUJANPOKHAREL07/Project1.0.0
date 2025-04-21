import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegUser } from "react-icons/fa";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Login from "./loginpage";
import { useState } from "react";
import Modal from "../component/modal";
import { IoMdCloseCircleOutline } from "react-icons/io";

const signupschema = z.object({
  email: z.string().email("Invalid Email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      "Password must include at least one uppercase letter, one number, and one special character"
    ),
});
const Signup = () => {
  const [inSignup, setinSignup] = useState(false);
  const[islogin,setisLogin]=useState(true)
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={toFormikValidationSchema(signupschema)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Form className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="flex justify-center text-red-500">
              {" "}
              <FaRegUser className="  text-[6rem]" />
            </div>

            <div className="mb-4">
              <label className="block text-[#e26a72]">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#e26a72]">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full  text-[#F4FFC3] bg-red-500 py-2 rounded-md hover:bg-[#e26a72] hover:text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating an account" : "SignUp"}
            </button>
            <p>
              Already have an accout?{" "}
              <button
                className="text-blue-600 underline cursor-pointer"
                onClick={() => {
                  
                  setinSignup(true)
                  setisLogin(false)
                }}
                
              >
                Login
              </button>
            </p>
          </Form>
          
          
          {inSignup && (
            <Modal>
              <div className="bg-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-md p-4">
                <div className="flex justify-end">
                  <IoMdCloseCircleOutline
                    onClick={() => setinSignup(false)}
                    className="text-red-500 text-xl cursor-pointer hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <Login />
              </div>
            </Modal>
          )}
        </>
      )}
    </Formik>
  );
};
export default Signup;
