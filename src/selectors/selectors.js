import { createSelector } from 'reselect';
import {
  path,
  propOr,
  prop,
} from 'ramda';

const localState = prop('usersData');

export const getUserLoadingStatus = id =>
  createSelector(
    getUserById(id),
    propOr(true, 'loading'),
  );

export const getUserById = id =>
  createSelector(
    localState,
    prop(id),
  );

export const getUserId = id =>
  createSelector(
    getUserById(id),
    path(['data', 'id']),
  );

export const getUserName = id =>
  createSelector(
    getUserById(id),
    path(['data', 'name']),
  );

export const getUserGender = id =>
  createSelector(
    getUserById(id),
    path(['data', 'gender']),
  );

export const getUserBirthDate = id =>
  createSelector(
    getUserById(id),
    path(['data', 'birthDate']),
  );
