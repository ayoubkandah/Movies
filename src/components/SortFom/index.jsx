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
  { label: 'Popularity Descending', value: 'popularity.desc', name: 'sort_by' },
  { label: 'Popularity Ascending', value: 'popularity.asc', name: 'sort_by' },
  { label: 'Rating Descending', value: 'vote_average.desc', name: 'sort_by' },
  { label: 'Rating Ascending', value: 'vote_average.asc', name: 'sort_by' },
  {
    label: 'Release Date Descending',
    value: 'release_date.desc',
    name: 'sort_by',
  },
  {
    label: 'Release Date Ascending',
    value: 'release_date.asc',
    name: 'sort_by',
  },
  { label: 'Title (A-Z)', value: 'original_title.asc', name: 'sort_by' },
  { label: 'Title (Z-A)', value: 'original_title.desc', name: 'sort_by' },
];

/**
 * Sorting form.
 *
 * @param {Function} props.handleSubmit Handling onSubmit for form.
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
            name: 'genres',
            value: element.id,
            label: element.name,
          };
          filteredData.push(obj);
        });

        setGenres(filteredData);
      }
    }
  };

  const handleButtons = ({ name, value }) => {
    if (name === 'genres' || name === 'with_watch_providers') {
      setInputs({
        ...inputs,
        [name]: inputs[name] ? [...inputs[name], value] : [value],
      });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const getCountries = async () => {
    if (!countries) {
      const regions = await Regions();
      const data = [];

      regions.forEach((region) => {
        const obj = {
          label: region.english_name,
          value: region.iso_3166_1,
          img: flag(region.iso_3166_1),
          name: 'watch_region',
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
          label: language.english_name,
          value: language.iso_639_1,
          name: 'with_original_language',
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
              options={sortOptions}
              handleChange={handleButtons}
              defaultValue={{
                label: 'Popularity Descending',
                value: 'PD',
                name: 'sort',
              }}
              search={false}
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
                  color="white"
                  Icon={Icon}
                  text="Login to filter items you've watched"
                  background="#032541"
                />
              </NameContainer>

              <Radio
                checked={values.everything}
                value="everything"
                handleChange={test}
                name="show"
              />
              <RadioLabel onClick={handleFiltering}> Everything</RadioLabel>
              <Radio
                name="show"
                checked={values.sec}
                value="sec"
                handleChange={test}
              />
              <RadioLabel>Movies I Haven`t Seen</RadioLabel>
              <Radio
                name="show"
                checked={values.sec}
                value="sec"
                handleChange={test}
              />
              <RadioLabel>Movies I Have Seen</RadioLabel>
            </LabelWrapper>

            <LabelWrapper>
              <LabelName>Availabilities</LabelName>
              <Checkbox
                inputValue="LL"
                selected
                handleChange={handleOnchange}
                name="available"
                disabled={false}
              />
              <CheckboxLabel>Search All Availabilities?</CheckboxLabel>

              <ReleasedDateWrapper>
                <Date>from</Date>
                <CalendarWrapper>
                  <BasicDatePicker
                    handleChange={handleCalendar}
                    label="primary_release_date.gte"
                  />
                </CalendarWrapper>
              </ReleasedDateWrapper>
              <ReleasedDateWrapper>
                <Date>To</Date>
                <CalendarWrapper>
                  <BasicDatePicker
                    handleChange={handleCalendar}
                    label="primary_release_date.lte"
                  />
                </CalendarWrapper>
              </ReleasedDateWrapper>
            </LabelWrapper>

            <LabelWrapper>
              <LabelName>Languages</LabelName>
              <DropdownButton onClick={getLanguages}>
                <Dropdown
                  options={languagesData || []}
                  handleChange={handleButtons}
                  defaultValue={{
                    label: 'English',
                    value: 'en',
                    name: 'language',
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
                      <Tags
                        key={data.id}
                        data={data}
                        handleChange={handleButtons}
                      />
                    </>
                  ))}
                </TagsWrapper>
              )}
            </LabelWrapper>

            <LabelWrapper>
              <LabelName>Keywords</LabelName>
              <Input
                data={{
                  name: 'with_keywords',
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
                  color="white"
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
                  options={countries || []}
                  handleChange={handleButtons}
                  defaultValue={{
                    label: 'Argentina',
                    value: 'AR',
                    img: 'https://www.countryflags.io/AR/flat/64.png',
                    name: 'country',
                  }}
                  search
                />
              </DropdownButton>
              {provider && (
                <ProviderWrapper>
                  {provider.map((providerData) => (
                    <MovieProvider
                      key={providerData.id}
                      provider={providerData || []}
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
