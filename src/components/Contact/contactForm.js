import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import { createClientEmail } from "../../admin/apiAdmin";
import { RegisterFormStyles, Form } from "../styles/contactStyles.js";
// import RightImg from "../../assets/contact/cU7wLFRyWWw.png";
// import LeftImg from "../../assets/contact/Mohaka 1.svg";

const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    buttonText: "Send",
    loading: false,
    error: "",
    redirectToProfile: false,
  });

  const {
    name,
    email,
    message,
    buttonText,
    loading,
    error,
    redirectToProfile,
  } = data;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  let clientName = data.name;
  let clientEmail = data.email;
  let clientMessage = data.message;

  const clickSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      error: "",
      loading: true,
      buttonText: "Sending...",
    });

    const createEmailData = {
      name: clientName,
      email: clientEmail,
      message: clientMessage,
    };

    createClientEmail(createEmailData).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        setData({
          ...data,
          name: "",
          email: "",
          message: "",
          buttonText: "Sent",
          loading: false,
          createdClient: data.name,
        });
      }
    });
  };

  return (
    <RegisterFormStyles contact>
      <motion.div
        // initial={{ opacity: 0, y: -600 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 1.5,
        // }}
        // exit={{ opacity: 0, y: -600 }}
        className="left"
      >
        <Form
          onSubmit={clickSubmit}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
          }}
          exit={{ opacity: 0, y: -200 }}
        >
          <label>
            <motion.textarea
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
              }}
              exit={{ opacity: 0, x: -50 }}
              type="text"
              // className="input-error"
              defaultValue={data.message}
              placeholder="Message"
              onChange={handleChange("message")}
              rows="10"
            />
          </label>
          <label>
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
              }}
              exit={{ opacity: 0, x: -50 }}
              type="text"
              // className="input-error"
              defaultValue={data.name}
              placeholder="Name"
              onChange={handleChange("name")}
            />
          </label>
          <label>
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
              }}
              exit={{ opacity: 0, x: -50 }}
              type="email"
              // className="input-error"
              defaultValue={data.email}
              placeholder="Email"
              onChange={handleChange("email")}
            />
          </label>
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
            }}
            exit={{ opacity: 0, scale: 0.7 }}
          >
            {buttonText}
          </motion.button>
        </Form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        exit={{ opacity: 0, x: 600 }}
        className="right"
      ></motion.div>
    </RegisterFormStyles>
  );
};
export default RegisterForm;

// {
/* <ProgressiveImage src={img} placeholder={img}>
        {(src) => (
          <motion.img
            src={src}
            alt={img}
            animate={isOpen ? { height: "250px" } : { height: "450px" }}
            whileHover={!isOpen ? { scale: 1.1 } : { scale: 1 }}
            style={
              isOpen
                ? { borderRadius: "27px 27px 0 0" }
                : { borderRadius: "27px" }
            }
          />
        )}
      </ProgressiveImage> */
// }
