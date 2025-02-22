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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const sendEmail = (values) => {
    setIsLoaded(true);
    emailjs
      .send("service_lm76uz7", "template_fok7ssj", values, "cCCYgfLaagh_erek2")
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          setIsLoaded(false);
          setTimeout(() => {
            setIsSubmitted(false);
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
      sendEmail(values);
      resetForm();
    },
  });

  return (
    <Container id="contact">
      <FormBg>
        <HeroBgAnimation />
      </FormBg>
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>Question, thought, or just want to say hello?</Desc>
        <Card>
          <Form onSubmit={formik.handleSubmit}>
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
                <p style={{ color: "red", fontSize: "14px", marginLeft: "5px" }}>
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
                <p style={{ color: "red", fontSize: "14px", marginLeft: "5px" }}>
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
                <p style={{ color: "red", fontSize: "14px", marginLeft: "5px" }}>
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
                  <p
                    style={{
                      color: "green",
                      marginTop: "10px",
                      padding: "1px 10px",
                      border: "1px solid green", // Added border
                      borderRadius: "4px", // Optional: rounded corners
                      backgroundColor: "#30b03023", // Optional: light background
                    }}
                  >
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