import styled from 'styled-components';
import { ReactComponent as tooltip } from 'assets/tooltip.svg';
import mq from 'config/mq';
import colors from 'styles/colors';

export const LabelWrapper = styled.div`
  border: 0.1rem solid ${colors.borderWhite};
  padding: 0.9rem 0 0.8rem 0.93rem;
  border-left: none;
  border-right: none;
  border-top: none;

  ${mq.dp`
    max-width: 16.125rem;
  `}
`;

export const FilterWrapper = styled.div`
  border: 0.1rem solid ${colors.borderWhite};
  border-bottom: none;
  border-top: none;
  border-radius: 0.3rem;
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
  fill: gray;
  height: 1.2rem;
  margin: 0.085rem 0 0 0;
  padding: 0;
`;

export const RadioLabel = styled.label`
  display: block;
  margin: 0 0 0.3rem 1.7rem;
`;

export const CheckboxLabel = styled.h3`
  display: inline-block;
  font-size: 1.03rem;
  font-weight: 400;
  margin: 0.4rem 0 0 0.2rem;
  white-space: normal;
`;

export const CalendarWrapper = styled.div`
  margin: 1rem 1rem 1rem 0;
  width: 10rem;
`;

export const Date = styled.h5`
  color: gray;
  font-size: 1rem;
  font-weight: 600;
  margin: 2rem 0 0 1rem;
`;

export const ReleasedDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  max-width: 15rem;
`;

export const CheckboxWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
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
  background-color: ${({ disabled }) => !disabled && colors.lightBlue};
  border-radius: 2rem;
  border: none;
  color: ${({ disabled }) => (disabled ? colors.darkBlue : '#fff')};
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1.16rem;
  font-weight: 600;
  margin: 1.2rem 0 1.3rem 1.1rem;
  padding: 0.8rem;
  width: 99%;

  &&:hover {
    background-color: ${colors.darkBlue};
    cursor: pointer;
  }

  &:disabled {
    background-color: #efefef;

    &&:hover {
      background-color: #efefef;
      cursor: not-allowed;
    }
  }
`;
