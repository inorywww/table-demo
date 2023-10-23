
import { ABScriptInfo, runFiles, appFiles, abFiles } from "./mock"
export async function getABScript (args = {}) {
  console.log('args', args);
  return {
    data: {
      list: ABScriptInfo,
      total: 5000
    }
  }
}

export async function getRunFiles (args = {}) {
  return {
    data: {
      list: runFiles,
      total: 3000
    }
  }
}

export async function getAppFiles (args = {}) {
  return {
    data: {
      list: appFiles,
      total: 10000
    }
  }
}

export async function getABFiles (args = {}) {
  return {
    data: {
      list: abFiles,
      total: 1000
    }
  }
}