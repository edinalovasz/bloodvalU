import { rem } from "polished";
import styled from "styled-components";

export const DarkBlueButton = styled.button`
  background: #121232;
  border-radius: 4px;
  border: 1px solid #121232;
  outline: none;
  width: ${rem("141px")};
  height: ${rem("48px")};
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #ffffff;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  :hover {
    color: #121232;
    background: #fff;
    border: 1px solid #121232;
  }
  :active {
    color: #121232;
    background: #fff;
    border: 1px solid #121232;
  }
`;

export const WhiteButton = styled.button`
  background: #ffffff;
  border: 1px solid #121232;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  width: ${rem("106px")};
  height: ${rem("48px")};
  cursor: pointer;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #121232;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  :hover {
    color: #fff;
    background: #121232;
    //border: 1px solid #FFF;
  }
  :active {
    color: #fff;
    background: #121232;
    //border: 1px solid #FFF;
  }
`;

export const ChooseRoleButton = styled.button`
  width: ${rem("352px")};
  height: ${rem("160px")};
  background: #ffffff;
  border: 1px solid #d3d4d8;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: ${rem("18px")};
  line-height: 24px;
  color: #121232;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  :hover {
    color: #fff;
    border: 2px solid #121232;
    background: #121232;
  }
  :active {
    color: #fff;
    border: 2px solid #121232;
    background: #121232;
  }
`;

export const SmallBlueButton = styled.button`
  width: ${rem("49px")};
  height: ${rem("21px")};
  background: #2196f3;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.16px;
  color: #ffffff;
  text-transform: uppercase;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  outline: none;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #2196f3;
    background: #fff;
    border: 1px solid #2196f3;
  }
  :active {
    color: #2196f3;
    background: #fff;
    border: 1px solid #2196f3;
  }
`;

export const BaseStatusButton = styled.button`
  border: none;
  width: 82px;
  height: 28px;
  border-radius: 87px;
  background-color: #2196f3;
  font-size: 12px;
  cursor: pointer;
  color: white;
`;
