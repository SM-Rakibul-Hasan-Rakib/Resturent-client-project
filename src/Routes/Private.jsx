// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  return <div></div>;
};

export default Private;
