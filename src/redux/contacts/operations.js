import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setAuthHeader(token);
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add-contact",
  async ({ name, number }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.post("/contacts", { name, number });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete-contact",
  async (contactId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    try {
      setAuthHeader(token);
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/update-contact",
  async ({ name, number, contactId }, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);