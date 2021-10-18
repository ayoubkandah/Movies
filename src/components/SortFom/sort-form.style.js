import styled from 'styled-components';
import { ReactComponent as tooltip } from 'assets/tooltip.svg';
import mq from 'config/mq';

export const LabelWrapper = styled.div`
  border: 0.1rem solid #e7e6e6;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 0.9rem 0 0.8rem 0.93rem;
  ${mq.dp`
    max-width: 16.125rem;
  `}
`;

export const FilterWrapper = styled.div`
  border-radius: 0.3rem;
  border: 0.1rem solid #e7e6e6;
  border-bottom: none;
  border-top: none;
  box-shadow: 0 0.1rem 0.5rem #d9d9d9cc;
  display: inline-block;
  margin: 0.6rem 0 0 1.1rem;
  padding: 0;
`;
export const FilterButton = styled.div``;

export const LabelName = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 1.2rem 0 0;
  padding: 0;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Icon = styled(tooltip)`
  height: 1.2rem;
  fill: gray;
  margin: 0.085rem 0 0 0;
  padding: 0;
`;

export const RadioLabel = styled.label`
  margin: 0 0 0.3rem 1.7rem;
  display: block;
`;

export const CheckboxLabel = styled.h3`
  display: inline-block;
  margin: 0.4rem 0 0 0.2rem;
  font-size: 1.03rem;
  font-weight: 400;
  white-space: normal;
`;

export const CalendarWrapper = styled.div`
  width: 10rem;
  margin: 1rem 1rem 1rem 0;
`;

export const Date = styled.h5`
  margin: 2rem 0 0 1rem;
  font-weight: 600;
  color: gray;
  font-size: 1rem;
`;

export const ReleasedDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 15rem;
  margin-top: 0.5rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const ProviderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1.3em 0rem 0 0;
  width: 15rem;
`;

export const DropdownButton = styled.div``;

export const Form = styled.form`
  margin-right: 2rem;
  ${mq.dp`
    max-width: 16.125rem;
  `}
`;

export const Search = styled.input`
  border-radius: 2rem;
  border: none;
  margin: 1.2rem 0 1.3rem 1.1rem;
  padding: 0.8rem;
  width: 99%;
  font-size: 1.16rem;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-weight: 600;
  color: ${({ disabled }) => (disabled ? ' rgba(0, 0, 0, 0.5)' : '#fff')};
  background-color: ${({ disabled }) => !disabled && 'rgba(1, 180, 228)'};
  &&:hover {
    cursor: pointer;
    background-color: rgba(3, 37, 65);
  }
  &:disabled {
    background-color: #efefef;
    &&:hover {
      cursor: not-allowed;

      background-color: #efefef;
    }
  }
`;
