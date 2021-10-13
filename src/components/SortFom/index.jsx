import React, { useState } from 'react';
import Filter from 'components/Filter';
import Tooltip from 'components/Tooltip';
import Radio from 'components/Radio';
import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';
import BasicDatePicker from 'components/Calender';
// import Slider from 'components/Slider';
import Tags from 'components/Tags';
import Input from 'components/TextInput';

import {
  LabelWrapper,
  LabelName,
  NameContainer,
  FilterWrapper,
  Icon,
  RadioLabel,
  CheckboxLabel,
  FilterButton,
  CalendarWrapper,
  Date,
  ReleasedDateWrapper,
  TagsWrapper,
} from './sort-form.style';

const tagsData = [
  { name: 'Action', value: 'action' },
  { name: 'Adventure', value: 'adv' },
  { name: 'Animation', value: 'anmi' },
  { name: 'Comedy', value: 'com' },
  { name: 'Crime', value: 'cr' },
  { name: 'Documentary', value: 'doc' },
  { name: 'Drama', value: 'dr' },
  { name: 'Family', value: 'fam' },
  { name: 'Fantasy', value: 'fan' },
  { name: 'History', value: 'his' },
  { name: 'Horror', value: 'hor' },
  { name: 'Music', value: 'mus' },
  { name: 'Mystery', value: 'mys' },
  { name: 'Romance', value: 'rom' },
  { name: 'Science Fiction', value: 'sciFic' },
  { name: 'TV Movie', value: 'tv' },
  { name: 'Thriller', value: 'thr' },
  { name: 'War', value: 'wr' },
  { name: 'Western', value: 'wes' },
];

const SortForm = () => {
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

  const handleCalendar = (date) => {
    console.log(date);
  };
  const handleFiltering = (name) => {
    setFilter({ ...filter, [name]: !filter[name] });
  };
  const handleTags = (value) => {
    console.log(value);
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
                  background="#032541"
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
                inputValue="LL"
                selected
                handleChange={handleOnchange}
              />
              <CheckboxLabel>Search All Availabilities?</CheckboxLabel>

              <ReleasedDateWrapper>
                <Date>from</Date>
                <CalendarWrapper>
                  <BasicDatePicker handleChange={handleCalendar} />
                </CalendarWrapper>
              </ReleasedDateWrapper>
              <ReleasedDateWrapper>
                <Date>To</Date>
                <CalendarWrapper>
                  <BasicDatePicker handleChange={handleCalendar} />
                </CalendarWrapper>
              </ReleasedDateWrapper>
            </LabelWrapper>
            <LabelWrapper>
              <LabelName>Genres</LabelName>

              <TagsWrapper>
                {tagsData.map((data) => (
                  <>
                    <Tags data={data} handleChange={handleTags} />
                  </>
                ))}
              </TagsWrapper>
            </LabelWrapper>
            <LabelWrapper>
              <LabelName>Keywords</LabelName>
              <Input
                data={{
                  name: 'keyword',
                  placeholder: 'Filter by keywords...',
                  value: 'keyword',
                }}
                handleChange={handleOnchange}
              />
            </LabelWrapper>
          </>
        )}
      </FilterWrapper>
      <FilterWrapper>
        <FilterButton onClick={() => handleFiltering('whereToWatch')}>
          <Filter />
        </FilterButton>
        {filter.whereToWatch && (
          <>
            <LabelWrapper>
              <NameContainer>
                <LabelName>My Services</LabelName>
                <Tooltip
                  Icon={Icon}
                  text="Login to filter items you've watched"
                  background="#032541"
                />
              </NameContainer>
              <Checkbox
                inputValue="LL"
                disabled
                selected={false}
                handleChange={handleOnchange}
              />
              <CheckboxLabel>Restrict to my subscribed services?</CheckboxLabel>
            </LabelWrapper>
          </>
        )}
      </FilterWrapper>
    </>
  );
};

export default SortForm;
