import React, { useEffect, useState } from 'react';
import flag from 'utility/flag';
import propTypes from 'prop-types';
import Tags from 'components/Tags';
import Radio from 'components/Radio';
import Genres from 'services/genres';
import Filter from 'components/Filter';
import Tooltip from 'components/Tooltip';
import Input from 'components/TextInput';
import languages from 'services/language';
import Dropdown from 'components/Dropdown';
import Checkbox from 'components/Checkbox';
import BasicDatePicker from 'components/Calender';
import MovieProvider from 'components/MovieProvider';
import { RegionProvider, Regions } from 'services/region';
import {
  Icon,
  Date,
  Form,
  Search,
  LabelName,
  RadioLabel,
  TagsWrapper,
  LabelWrapper,
  FilterButton,
  NameContainer,
  FilterWrapper,
  CheckboxLabel,
  DropdownButton,
  CalendarWrapper,
  CheckboxWrapper,
  ProviderWrapper,
  ReleasedDateWrapper,
} from './sort-form.style';

const sortOptions = [
  { name: 'Popularity Descending', value: 'popularity.desc', type: 'sort_by' },
  { name: 'Popularity Ascending', value: 'popularity.asc', type: 'sort_by' },
  { name: 'Rating Descending', value: 'vote_average.desc', type: 'sort_by' },
  { name: 'Rating Ascending', value: 'vote_average.asc', type: 'sort_by' },
  {
    name: 'Release Date Descending',
    value: 'release_date.desc',
    type: 'sort_by',
  },
  {
    name: 'Release Date Ascending',
    value: 'release_date.asc',
    type: 'sort_by',
  },
  { name: 'Title (A-Z)', value: 'original_title.asc', type: 'sort_by' },
  { name: 'Title (Z-A)', value: 'original_title.desc', type: 'sort_by' },
];

/**
 * Shared component for sorting form.
 *
 * @param {Function} handleSubmit Handling onSubmit on the form.
 *
 * @return {JSX.Element}
 */
const SortForm = ({ handleSubmit }) => {
  const [genres, setGenres] = useState();
  const [inputs, setInputs] = useState({});
  const [provider, setProvider] = useState();
  const [countries, setCountries] = useState();
  const [languagesData, setLanguagesData] = useState();
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
    console.log(target.name);
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleCalendar = (date, type) => {
    const time = new window.Date(date);
    const value = time.getTime();

    setInputs({ ...inputs, [type]: value });
  };

  const handleFiltering = async (name) => {
    setFilter({ ...filter, [name]: !filter[name] });

    if (name === 'filters') {
      if (!genres) {
        const data = await Genres();
        const filteredData = [];
        data.forEach((element) => {
          const obj = {
            type: 'genres',
            value: element.id,
            name: element.name,
          };
          filteredData.push(obj);
        });

        setGenres(filteredData);
      }
    }
  };

  const handleButtons = ({ type, value }) => {
    if (type === 'genres' || type === 'with_watch_providers') {
      setInputs({
        ...inputs,
        [type]: inputs[type] ? [...inputs[type], value] : [value],
      });
    } else {
      setInputs({ ...inputs, [type]: value });
    }
  };

  const getCountries = async () => {
    if (!countries) {
      const regions = await Regions();
      const data = [];

      regions.forEach((region) => {
        const obj = {
          name: region.english_name,
          value: region.iso_3166_1,
          img: flag(region.iso_3166_1),
          type: 'watch_region',
        };

        data.push(obj);
      });

      setCountries(data);
    }
  };

  const getLanguages = async () => {
    if (!languagesData) {
      const languagesNotFiltered = await languages();
      const data = [];

      languagesNotFiltered.forEach((language) => {
        const obj = {
          name: language.english_name,
          value: language.iso_639_1,
          type: 'with_original_language',
        };

        data.push(obj);
      });

      setLanguagesData(data);
    }
  };

  useEffect(() => {
    if (inputs.watch_region) {
      const handleProvider = async () => {
        const data = await RegionProvider(inputs.watch_region);

        setProvider(data);
      };
      handleProvider();
    }
  }, [inputs]);

  return (
    <Form
      onSubmit={(event) => {
        handleSubmit(event, inputs);
        setInputs({});
      }}
    >
      <FilterWrapper>
        <FilterButton type="button" onClick={() => handleFiltering('sort')}>
          <Filter name="Sort" />
        </FilterButton>
        {filter.sort && (
          <LabelWrapper>
            <NameContainer>
              <LabelName>Sort Results By</LabelName>
            </NameContainer>
            <Dropdown
              label={sortOptions}
              handleChange={handleButtons}
              defaultValue={{
                name: 'Popularity Descending',
                value: 'PD',
                type: 'sort',
              }}
            />
          </LabelWrapper>
        )}
      </FilterWrapper>

      <FilterWrapper>
        <FilterButton onClick={() => handleFiltering('filters')}>
          <Filter name="Filters" />
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
                name="availble"
              />
              <CheckboxLabel>Search All Availabilities?</CheckboxLabel>

              <ReleasedDateWrapper>
                <Date>from</Date>
                <CalendarWrapper>
                  <BasicDatePicker
                    handleChange={handleCalendar}
                    type="primary_release_date.gte"
                  />
                </CalendarWrapper>
              </ReleasedDateWrapper>
              <ReleasedDateWrapper>
                <Date>To</Date>
                <CalendarWrapper>
                  <BasicDatePicker
                    handleChange={handleCalendar}
                    type="primary_release_date.lte"
                  />
                </CalendarWrapper>
              </ReleasedDateWrapper>
            </LabelWrapper>

            <LabelWrapper>
              <LabelName>Languages</LabelName>
              <DropdownButton onClick={getLanguages}>
                <Dropdown
                  label={languagesData}
                  handleChange={handleButtons}
                  defaultValue={{
                    name: 'English',
                    value: 'en',
                    type: 'language',
                  }}
                  search
                />
              </DropdownButton>
            </LabelWrapper>

            <LabelWrapper>
              <LabelName>Genres</LabelName>
              {genres && (
                <TagsWrapper>
                  {genres.map((data) => (
                    <>
                      <Tags data={data} handleChange={handleButtons} />
                    </>
                  ))}
                </TagsWrapper>
              )}
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
          <Filter name="Where To Watch" />
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
              <CheckboxWrapper>
                <Checkbox
                  inputValue="LL"
                  disabled
                  selected={false}
                  handleChange={handleOnchange}
                />
                <CheckboxLabel>
                  Restrict to my subscribed services?
                </CheckboxLabel>
              </CheckboxWrapper>
            </LabelWrapper>

            <LabelWrapper>
              <LabelName>Country</LabelName>
              <DropdownButton onClick={getCountries}>
                <Dropdown
                  label={countries}
                  handleChange={handleButtons}
                  defaultValue={{
                    name: 'Argentina',
                    value: 'AR',
                    img: 'https://www.countryflags.io/AR/flat/64.png',
                    type: 'country',
                  }}
                  search
                />
              </DropdownButton>
              {provider && (
                <ProviderWrapper>
                  {provider.map((providerData) => (
                    <MovieProvider
                      provider={providerData}
                      handleChange={handleButtons}
                    />
                  ))}
                </ProviderWrapper>
              )}
            </LabelWrapper>
          </>
        )}
      </FilterWrapper>
      <Search
        type="submit"
        value="Search"
        disabled={!Object.keys(inputs).length}
      />
    </Form>
  );
};

export default SortForm;

SortForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
