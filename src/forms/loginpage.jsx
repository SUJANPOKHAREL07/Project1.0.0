
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { FaRegUser } from "react-icons/fa";

const loginSchema = z.object({
 
  email: z.string().email("Invalid email format"),
  password: z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
    "Password must include at least one uppercase letter, one number, and one special character"
  ),});

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={toFormikValidationSchema(loginSchema)}
      onSubmit={(values) => {
        console.log("signup Success", values);
        
      }}
      
    >
      {({ isSubmitting }) => (
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
            {isSubmitting ? "loging in" : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
