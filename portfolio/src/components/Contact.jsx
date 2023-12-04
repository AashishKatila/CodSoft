import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters long"),
  });

  const handleSubmit = async (values) => {
    
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white" name="contact">
      <h1 className="text-4xl font-bold mb-10">Get in Touch</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, errors, handleChange, touched, handleBlur }) => (
          <Form className=" gap-4 flex flex-col justify-center max-w-[1000px] w-full   ">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className={`rounded-md px-4 py-2 text-gray-700 ${errors.name && touched.name ? "border-red-500" : "border-gray-300"}`}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="name" component="span" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`rounded-md px-4 py-2 text-gray-700 ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className={`rounded-md px-4 py-2 text-gray-700 h-32 ${errors.message && touched.message ? "border-red-500" : "border-gray-300"}`}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="message" component="span" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 font-bold hover:bg-blue-600 transition-all">
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
