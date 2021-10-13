import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import propTypes from 'prop-types';

const Calendar = ({ handleChange, defaultValue }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      disableFuture
      openTo="year"
      value={defaultValue}
      views={['year', 'month', 'day']}
      onChange={handleChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default Calendar;

Calendar.propTypes = {
  handleChange: propTypes.func.isRequired,
  defaultValue: propTypes.string.isRequired,
};
