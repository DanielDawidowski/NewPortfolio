import React from "react";
import { ContactStyles } from "../components/styles/contactStyles";
import RegisterForm from "../components/Contact/contactForm.js";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <ContactStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        exit={{ opacity: 0 }}
      >
        <RegisterForm />
      </ContactStyles>
    </Layout>
  );
};

export default Home;
