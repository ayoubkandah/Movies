import styled from 'styled-components';
import colors from 'styles/colors';

const Input = styled.input`
  border-radius: 0.3rem;
  border: 0.01rem solid #aba5a57d;
  color: black;
  font-size: 0.8rem;
  margin-top: 0.8rem;
  opacity: 0.75;
  padding: 0.5rem 0 0.5rem 0.6rem;
  width: 90%;

  &&:focus {
    border: 0.01rem solid ${colors.lightBlue};
    outline: none;
    transition: all ease-in 0.45s;
  }
`;

export default Input;
