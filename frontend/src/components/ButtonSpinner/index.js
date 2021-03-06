import React from "react";
import {css} from "@emotion/core";
import styled from "styled-components";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
display: flex;
  margin: 0 auto;
  border-color: red;
  width: 1px;
  height: 1px;
  
`;
const CustomSpinner = styled(PuffLoader)`
  width: 80px;
  height: 80px;
  color: #d33449;
`
const ButtonSpinner = () => {
    return <CustomSpinner size={50} color={"#d33449"} loading/>;
};

export default ButtonSpinner;