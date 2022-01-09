import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./repickpage.styles.scss";
function RePick() {
  return (
    <div className="repick">
      <h2 className="title">Please Re-Pick your Options</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to="/country-and-category">RePick </Link>
      </motion.div>
    </div>
  );
}

export default RePick;
