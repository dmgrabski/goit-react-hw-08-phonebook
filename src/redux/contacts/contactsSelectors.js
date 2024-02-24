// Import createSelector function from '@reduxjs/toolkit' for creating memoized selectors
import { createSelector } from "@reduxjs/toolkit";

// Selector to get the contacts items from the state
export const selectContacts = (state) => state.contacts.items;

// Selector to get the loading state from the contacts slice of the state
export const selectIsLoading = (state) => state.contacts.isLoading;

// Selector to get the error state from the contacts slice of the state
export const selectError = (state) => state.contacts.error;

// Selector to get the filter state from the state
export const selectFilter = (state) => state.filter;

// Selector to filter visible contacts based on the filter state
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  }
);