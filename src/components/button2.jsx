import React from 'react';
import styled from 'styled-components';

const Button2 = (props) => {
  return (
    <StyledWrapper>
      <div className="btn" id="bottone5" onClick={props.btnAction}>
      <i class="fa-solid fa-broom"></i>
      <p  >{props.name}</p>

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #bottone5 {
   align-items: center;
   background-color: #FFFFFF;
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius: .25rem;
   box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
   box-sizing: border-box;
   color: rgba(0, 0, 0, 0.85);
   cursor: pointer;
   display: inline-flex;
   font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
   font-size: 16px;
   font-weight: 600;
   gap: 10px;
   justify-content: center;
   line-height: 1.25;
   min-height: 3rem;
   padding: 0px 20px;
   text-decoration: none;
   transition: all 250ms;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   vertical-align: baseline;
   width: auto;
  }

  #bottone5:hover,
  #bottone5:focus {
   border-color: rgba(0, 0, 0, 0.15);
   box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
   color: rgba(0, 0, 0, 0.65);
  }

  #bottone5:hover {
   transform: translateY(-1px);
  }

  #bottone5:active {
   background-color: #F0F0F1;
   border-color: rgba(0, 0, 0, 0.15);
   box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
   color: rgba(0, 0, 0, 0.65);
   transform: translateY(0);
  }`;

export default Button2;
