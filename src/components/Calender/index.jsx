import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import propTypes from 'prop-types';

const Calendar = ({ handleChange, defaultValue, type }) => {
  const [date, setDate] = useState(defaultValue);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture={type === 'primary_release_date.gte'}
        openTo="year"
        value={date}
        views={['year', 'month', 'day']}
        onChange={(value) => {
          handleChange(value, type);
          setDate(value);
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Calendar;

Calendar.propTypes = {
  handleChange: propTypes.func.isRequired,
  defaultValue: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
