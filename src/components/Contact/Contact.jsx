import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import {
  Container,
  FormBg,
  Wrapper,
  Title,
  Desc,
  Card,
  InputTitle,
  Form,
  Input,
  TextArea,
  Button,
  Div,
} from "./ContactStyle";
import { signUpSchema } from "../../schemas";
import HeroBgAnimation from "../HeroBgAnimation";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [isLoaded, setIsLoaded] = useState(false);

  const sendEmail = (e) => {
    setIsLoaded(true);
    emailjs
      .sendForm("service_lm76uz7", "template_fok7ssj", form.current, {
        publicKey: "cCCYgfLaagh_erek2", // Updated public key
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true); // Set submitted to true on success
          setIsLoaded(false); // Reset loading state on success
          setTimeout(() => {
            setIsSubmitted(false); // Hide success message after 2 seconds
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoaded(false);
        }
      );
  };
  

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("onSubmit Value is -- ", values);
      sendEmail(); // Send the email after form validation
      resetForm();
    },
  });

  return (
    <Container id="contact">
      <FormBg>
        <HeroBgAnimation/>
      </FormBg>
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>CQuestion, thought, or just want to say hello?</Desc>
        <Card>
          <Form onSubmit={formik.handleSubmit} ref={form}>
            <Div>
              <InputTitle>Your Name</InputTitle>
              <Input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
                autoComplete="off"
              />
              {formik.errors.name && formik.touched.name ? (
                <p
                  style={{ color: "red", fontSize: "14px", marginLeft: "5px" }}
                >
                  {formik.errors.name}
                </p>
              ) : null}
            </Div>
            <Div>
              <InputTitle>Your Email</InputTitle>
              <Input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                autoComplete="off"
              />
              {formik.errors.email && formik.touched.email ? (
                <p
                  style={{ color: "red", fontSize: "14px", marginLeft: "5px" }}
                >
                  {formik.errors.email}
                </p>
              ) : null}
            </Div>
            <Div>
              <InputTitle>Your Message</InputTitle>
              <TextArea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your message"
                autoComplete="off"
              />
              {formik.errors.message && formik.touched.message ? (
                <p
                  style={{ color: "red", fontSize: "14px", marginLeft: "5px" }}
                >
                  {formik.errors.message}
                </p>
              ) : null}
            </Div>
            <Div
              style={{
                display: "flex",
                justifyContent: "column",
                alignItems: "center",
              }}
            >
              <div>
                {isSubmitted && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    Message sent successfully!
                  </p>
                )}
              </div>
              <Button type="submit">{isLoaded ? "sending.." : "submit"}</Button>
            </Div>
          </Form>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Contact;
