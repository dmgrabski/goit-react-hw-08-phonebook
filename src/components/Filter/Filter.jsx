import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/contacts/filterSlice.js";
import { selectFilter } from "../../redux/contacts/contactsSelectors.js";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Filter = () => {
  const value = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="text"
        id="filter"
        name="filter"
        placeholder="Search Contacts"
        value={value}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};