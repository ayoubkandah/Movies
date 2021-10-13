import styled from 'styled-components';

const Input = styled.input`
  margin-top: 0.8rem;
  font-size: 0.8rem;
  color: black;
  padding: 0.5rem 0 0.5rem 0.6rem;
  border: 0.01rem solid #aba5a57d;
  border-radius: 0.3rem;
  width: 90%;
  opacity: 0.75;

  &&:focus {
    outline: none;
    border: 0.01rem solid rgba(1, 180, 228);
    transition: all ease-in 0.45s;
  }
`;
export default Input;
