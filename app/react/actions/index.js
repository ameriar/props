import fetch from 'isomorphic-fetch';

import {
  RECEIVE_PROPS,
  REQUEST_PROPS,
  REQUEST_USER_PROPS,
  RECEIVE_USER_PROPS,
  REQUEST_USER_GIVEN_PROPS,
  RECEIVE_USER_GIVEN_PROPS,
  RECEIVE_USER,
  REQUEST_USER,
  RECEIVE_USERS,
  REQUEST_USERS,
  SET_USERS_FILTER,
} from '../constants/action-types';

function receiveProps(json) {
  return {
    type: RECEIVE_PROPS,
    props: json,
  };
}

function requestProps() {
  return {
    type: REQUEST_PROPS,
  };
}

function receiveUserProps(json) {
  return {
    type: RECEIVE_USER_PROPS,
    props: json,
  };
}

function requestUserProps() {
  return {
    type: REQUEST_USER_PROPS,
  };
}

function receiveUserGivenProps(json) {
  return {
    type: RECEIVE_USER_GIVEN_PROPS,
    props: json,
  };
}

function requestUserGivenProps() {
  return {
    type: REQUEST_USER_GIVEN_PROPS,
  };
}

function receiveUser(json) {
  return {
    type: RECEIVE_USER,
    user: json,
  };
}

function requestUser() {
  return {
    type: REQUEST_USER,
  };
}

function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json,
  };
}

function requestUsers() {
  return {
    type: REQUEST_USERS,
  };
}

export function setUsersFilter(filter) {
  return {
    type: SET_USERS_FILTER,
    filter,
  };
}

export function fetchProps(page = 1, perPage = 25) {
  return dispatch => {
    dispatch(requestProps());
    return fetch(`/api/v1/props?page=${page}&per_page=${perPage}`, {
      credentials: 'same-origin',
    })
    .then(req => req.json())
    .then(json => dispatch(receiveProps(json)));
  };
}

export function fetchUserProps(userId, page = 1, perPage = 25) {
  return dispatch => {
    dispatch(requestUserProps());
    return fetch(`/api/v1/props?user_id=${userId}&page=${page}&per_page=${perPage}`, {
      credentials: 'same-origin',
    })
    .then(req => req.json())
    .then(json => dispatch(receiveUserProps(json)));
  };
}

export function fetchUserGivenProps(userId, page = 1, perPage = 25) {
  return dispatch => {
    dispatch(requestUserGivenProps());
    return fetch(`/api/v1/props?propser_id=${userId}&page=${page}&per_page=${perPage}`, {
      credentials: 'same-origin',
    })
    .then(req => req.json())
    .then(json => dispatch(receiveUserGivenProps(json)));
  };
}

export function fetchUser(userId) {
  return dispatch => {
    dispatch(requestUser());
    return fetch(`/api/v1/users/${userId}`, {
      credentials: 'same-origin',
    })
    .then(req => req.json())
    .then(json => dispatch(receiveUser(json)));
  };
}

export function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());
    return fetch('/api/v1/users', {
      credentials: 'same-origin',
    })
    .then(req => req.json())
    .then(json => dispatch(receiveUsers(json)));
  };
}
