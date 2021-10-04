import React, { useState } from 'react';
import Filter from 'components/Filter';
import Tooltip from 'components/Tooltip';
import Radio from 'components/Radio';
import Dropdown from 'components/Dropdown';
import {
  LabelWrapper,
  LabelName,
  NameContainer,
  FilterWrapper,
  Icon,
  RadioLabel,
} from './sort-form.style';

export default function SortForm() {
  const [values, setValues] = useState({ everything: true, sec: false });
  const test = ({ target }) => {
    setValues({ ...values, [target.value]: true });
  };

  const handleOnchange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <>
      <FilterWrapper>
        <Filter />
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
      </FilterWrapper>
      <FilterWrapper>
        <Filter />
        <LabelWrapper>
          <NameContainer>
            <LabelName>Show Me</LabelName>
            <Tooltip Icon={Icon} text="Login to filter items you've watched" />
          </NameContainer>

          <Radio
            checked={values.everything}
            value="everything"
            handleChange={test}
          />
          <RadioLabel htmlFor> Everything</RadioLabel>
          <Radio checked={values.sec} value="sec" handleChange={test} />

          <RadioLabel htmlFor>Movies I Haven`t Seen</RadioLabel>
          <Radio checked={values.sec} value="sec" handleChange={test} />
          <RadioLabel htmlFor>Movies I Have Seen</RadioLabel>
        </LabelWrapper>
      </FilterWrapper>
    </>
  );
}
