import styled from 'styled-components';

export const TooltipText = styled.p`
  background-color: black;
  border-radius: 0.3rem;
  color: #fff;
  height: 1.5rem;
  padding: 0 0.8rem 0 0.8rem;
  position: absolute;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  text-overflow: inherit;
  transform: translate(${({ x }) => `${x}%`}, ${({ y }) => `${y}%`});
  white-space: nowrap;
  width: 13rem;
  width: fit-content;

  &&::after {
    border-color: black;
    border-style: solid;
    border-width: 0.3125rem;
    content: '';
    left: 50%;
    margin-left: -0.3125rem;
    position: absolute;
    top: ${({ pos }) => (pos === 'up' ? '80%' : '-15%')};
    transform: rotate(45deg);
  }
`;

export const TooltipContainer = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  position: relative;
`;
