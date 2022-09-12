import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: hsl(210, 24%, 25%);
  padding: 10px 50px;
  margin: 0px 10px;
  border-style: solid;
  border-width: 5px;
  border-image-slice: 1;
  border-image-source:
    linear-gradient(#ff512f,
      #dd2476,
      #1C64FF);
  box-shadow: 0px 10px 33px 3px rgba(33, 25, 25, 0.56);
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 30px 10px;
`;

export const StyledSpan = styled.span`
  width: 100px;
  display: inline-block;
  margin-bottom: 5px;
  font-size: large;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  border-width: 5px;
  background-color: hsl(0, 0%, 100%);
  margin: 10px 0;
  box-shadow: 0px 10px 33px 3px rgba(33, 25, 25, 0.56);
  font-weight: bold;
  cursor: pointer;
  padding: 10px 55px;
  font-size: large;
  border-image-slice: 1;
  border-image-source:
    linear-gradient(#ff512f,
      #dd2476,
      #1C64FF);

      &:hover{
        background-color: hsl(0, 0%, 95%);
      }
`;

export const StyledParagraf = styled.p`
  font-size: x-small;
  line-height: 1.5;
`;