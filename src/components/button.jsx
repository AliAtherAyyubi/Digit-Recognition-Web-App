import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledWrapper>
      <button onClick={props.btnAction} className="comic-button">{props.name==null?'Button':props.name}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .comic-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #8e2de2;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #000;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .comic-button:hover {
    background-color: #fff;
    color: #8e2de2;
    border: 2px solid #8e2de2;
    box-shadow: 5px 5px 0px #8e2de2;
  }

  .comic-button:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }`;

export default Button;
