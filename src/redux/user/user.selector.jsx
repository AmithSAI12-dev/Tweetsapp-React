import { createSelector } from 'reselect';

const selectUserReducer = state => state.userReducer;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  user => user.currentUser
);


export const selectErrorMessage = createSelector(
    [selectUserReducer],
    user => user.errorMessage
);

export const selectSuccessMessage = createSelector(
    [selectUserReducer],
    user => user.successMessage
);