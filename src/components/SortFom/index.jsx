import React, { useState } from 'react';
import Filter from 'components/Filter';
import Tooltip from 'components/Tooltip';
import Radio from 'components/Radio';
import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';
import {
  LabelWrapper,
  LabelName,
  NameContainer,
  FilterWrapper,
  Icon,
  RadioLabel,
  CheckboxLabel,
  FilterButton,
} from './sort-form.style';

export default function SortForm() {
  const [values, setValues] = useState({ everything: true, sec: false });
  const [filter, setFilter] = useState({
    sort: false,
    filters: false,
    whereToWatch: false,
  });
  const test = ({ target }) => {
    setValues({ ...values, [target.value]: true });
  };

  const handleOnchange = ({ target }) => {
    console.log(target.value, 'onCHange');
  };

  const handleFiltering = (name) => {
    setFilter({ ...filter, [name]: !filter[name] });
  };
  return (
    <>
      <FilterWrapper>
        <FilterButton onClick={() => handleFiltering('sort')}>
          <Filter />
        </FilterButton>
        {filter.sort && (
          <LabelWrapper>
            <NameContainer>
              <LabelName>Sort Results By</LabelName>
            </NameContainer>
            <Dropdown
              label={[
                { name: 'Popularity Descending', value: 'PD' },
                { name: 'Popularity Ascending', value: 'PA' },
                { name: 'Rating Descending', value: 'RD' },
                { name: 'Rating Ascending', value: 'RA' },
                { name: 'Release Date Descending', value: 'RDD' },
                { name: 'Release Date Ascending', value: 'RDA' },
                { name: 'Title (A-Z)', value: 'AZ' },
                { name: 'Title (Z-A)', value: 'ZA' },
              ]}
              handleChange={handleOnchange}
              defaultValue={{ name: 'Popularity Descending', value: 'PD' }}
            />
          </LabelWrapper>
        )}
      </FilterWrapper>
      <FilterWrapper>
        <FilterButton onClick={() => handleFiltering('filters')}>
          <Filter />
        </FilterButton>
        {filter.filters && (
          <>
            <LabelWrapper>
              <NameContainer>
                <LabelName>Show Me</LabelName>
                <Tooltip
                  Icon={Icon}
                  text="Login to filter items you've watched"
                />
              </NameContainer>

              <Radio
                checked={values.everything}
                value="everything"
                handleChange={test}
              />
              <RadioLabel onClick={handleFiltering}> Everything</RadioLabel>
              <Radio checked={values.sec} value="sec" handleChange={test} />

              <RadioLabel>Movies I Haven`t Seen</RadioLabel>
              <Radio checked={values.sec} value="sec" handleChange={test} />
              <RadioLabel>Movies I Have Seen</RadioLabel>
            </LabelWrapper>
            <LabelWrapper>
              <LabelName>Availabilities</LabelName>
              <Checkbox
                Inputvalue="LL"
                selected
                handleChange={handleOnchange}
              />
              <CheckboxLabel>Search All Availabilities?</CheckboxLabel>
            </LabelWrapper>
          </>
        )}
      </FilterWrapper>
    </>
  );
}
