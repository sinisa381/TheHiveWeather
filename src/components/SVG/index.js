import React from 'react'
import SVG from 'react-inlinesvg'

export default ({ icon }) => <SVG src={icon} />

export const setIcon = name => {
  switch (name) {
    case '02d' || '03d' || '02n' || '03n':
      return 'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/xb6a-cloud.svg'
    case '04d' || '04n':
      return 'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/sq-o-cloudy.svg'
    case '10d' || '09d':
      return 'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/4aoT-rain.svg'
    case '13d':
      return 'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/aODy-snowing.svg'
    case '11d':
      return 'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/zWvz-storn.svg'
    default:
      return 'https://uploads.codesandbox.io/uploads/user/1e54e5e8-919a-492b-b649-7773dcf409ea/0cip-sun.svg'
  }
}
