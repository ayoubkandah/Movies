import styled from 'styled-components';
import { ReactComponent as tooltip } from 'assets/tooltip.svg';

export const Wrapper = styled.div`
  border: 0.1rem solid #e7e6e6;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 0.9rem 0 0.8rem 0.93rem;
`;

export const LabelName = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 1rem 0 0;
  padding: 0;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Icon = styled(tooltip)`
  height: 2.5rem;
  margin: 0;
  padding: 0;
`;
