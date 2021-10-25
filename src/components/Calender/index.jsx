import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import propTypes from 'prop-types';

/**
 * Calendar.
 *
 * @param {Function} props.handleChange Handle onChange.
 * @param {String}   props.defaultValue Default value of calendar.
 * @param {String}   props.name         Name of input.
 *
 * @return {JSX.Element}
 */
const Calendar = ({ handleChange, label }) => {
  const [date, setDate] = useState();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture={label === 'primary_release_date.gte'}
        openTo="year"
        value={date}
        views={['year', 'month', 'day']}
        onChange={(value) => {
          setDate(value);
          handleChange(value, label);
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Calendar.propTypes = {
  handleChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

export default Calendar;
