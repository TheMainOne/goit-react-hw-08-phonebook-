import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';

const Filter = ({ onSearchInput }) => {
  return (
    <TextField type='text' name='filter' label="Filter" variant="outlined" autoComplete='off' onChange={onSearchInput}/>
  );
};

Filter.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
};

export default Filter;