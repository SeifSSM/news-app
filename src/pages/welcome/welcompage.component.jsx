import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./welcomepage.styles.scss";

function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="welcomepage">
        <div className="image" />
        <div className="text">
          <h1 className="title">Welcome To The News App</h1>
          <div className="footer">
            <Link to="/country-and-category">
              <i className="arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Welcome;
