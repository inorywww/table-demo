import { axiosGetHandler } from './axios'

export function getABScript (args = {}) {
  const url = '/api/sfal/abscript'
  return axiosGetHandler(url, args)
}

export function getRunFiles (args = {}) {
  const url = '/api/sfal/runfiles'
  return axiosGetHandler(url, args)
}

export function getAppFiles (args = {}) {
  const url = '/api/sfal/appfiles'
  return axiosGetHandler(url, args)
}

export function getABFiles (args = {}) {
  const url = '/api/sfal/abfiles'
  return axiosGetHandler(url, args)
}