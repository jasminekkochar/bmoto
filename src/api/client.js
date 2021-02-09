// fetch() wrapper instead of axios - adapted from https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

const apiKey = 'e41468206c4668f06bcfe193da0f8450'
const endpointPre = 'https://developers.zomato.com/api/v2.1/'


export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const config = {
    method: 'GET',
    ...customConfig,
    headers: {
      ...customConfig.headers,
      Accept: 'application/json',
      'user-key': apiKey
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(endpointPre+endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' })
}