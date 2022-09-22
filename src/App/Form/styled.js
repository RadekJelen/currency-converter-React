import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  background-color: hsl(210, 24%, 25%);
  padding: 10px 50px;
  margin: 0px 10px;
  border: 8px solid;
  box-shadow: 0px 10px 33px 3px rgba(33, 25, 25, 0.56);
  border-image: linear-gradient( #ff512f, #dd2476, #1C64FF) 1;
  animation: rotate 3.5s ease-in infinite;
  
  @keyframes rotate { 
    50% {
      border-image: linear-gradient( 360deg, #ff512f, #dd2476, #1C64FF) 1;
    }
  }
`;

export const StyledLoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLoaderSpan = styled.span`
  margin: 10px 0;
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;

  ${({ converted }) => converted && css`
    color: #ff8787;
  `}
`;

export const StyledLoader = styled.div`
  width: 72px;
  height: 72px;
  margin: 10px;
  align-self: center;
  border-radius: 50%;
  background: radial-gradient(farthest-side,#ffffff 94%,#0000) top/11.5px 11.5px no-repeat,
              conic-gradient(#0000 30%,#ffffff);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 11.5px),#000 0);
  animation: spinner 1s infinite linear;

  @keyframes spinner {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export const StyledErrorImage = styled.img`
  width: 80px;
  align-self: center;
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 30px 10px;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  width: 100px;
  margin-bottom: 5px;
  font-size: large;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 55px;
  font-weight: bold;
  font-size: large;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0px 10px 33px 3px rgba(33, 25, 25, 0.56);  
  border-width: 6px;
  border-image-slice: 1;
  border-image-source: linear-gradient(#ff512f, #dd2476, #1C64FF);

  &:hover {
    background-color: hsl(0, 0%, 95%);
  }
`;

export const StyledParagraf = styled.p`
  font-size: x-small;
  line-height: 1.5;
`;