/* eslint-disable import/prefer-default-export */

import jwtDecoder from 'jwt-decode';
import CONFIG from '../constants/config';
import HTTP_ERROR from '../constants/httpError';

/**
 * Generate a random integer within a range.
 * @param min The minimum integer (inclusive).
 * @param max The maximum integer (inclusive).
 * @return The random interger.
 */
export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Capitalize a string
 */
 export const capitalize = (string: string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * Check if there is a valid token in the localStorage
 */
export const hasValidToken = () => {
  const token = localStorage.getItem(CONFIG.storedTokenName);

  if (!token) {
    return false;
  }

  const { exp }: { exp: number } = jwtDecoder(token);
  return exp > new Date().getTime() / 1000;
};

/**
 * Get all values from an object as an array.
 */
export const allFrom = (object: Object) => {
  return Object.values(object);
};

/**
 * Check if somthing is present in an array of its type.
 */
export const isIn = (a: any, array: any) => {
  return array.some((ele: any) => ele === a);
};

/**
 * Get error page path from status
 */
export const getErrorPagePath = (status: number) => {
  return Object.values(HTTP_ERROR).find((error) => error.status === status)?.path;
};

/**
 * check if two path match regardless the "/" at the end
 */
export const pathMatch = (a: string, b: string | string[], exact: boolean = true) => {
  if (!Array.isArray(b)) {
    return pathMatchSingle(a, b);
  }

  return b.some((path) => pathMatchSingle(a, path));
};

const pathMatchSingle = (a: string, b: string) => {
  a = a.replace(/\/$/, '');
  b = b.replace(/\/$/, '');

  if (!b.endsWith('...')) {
    return a === b;
  }

  b = b.replace(/\.{3}$/, '');
  return a.startsWith(b);
};

/**
 * callback force type
 */
export const isNotNull = <T>(item: T | null): item is T => {
  return item !== null;
};
