import { IColor } from 'styles';

const palette: IColor = {
  white: '#ffffff',
  black: '#131313',
  'bg-black': '#000000',
};

const lightColor: IColor = {
  // Gray
  'gray-100': '#f5f5f5',
  'gray-200': '#e6e6e6',
  'gray-300': '#cfcfcf',
  'gray-400': '#c0c0c0',
  'gray-500': '#9e9e9e',
  'gray-600': '#858585',
  'gray-700': '#666666',
  'gray-800': '#3d3d3d',
  'gray-900': '#212121',

  // Red
  'red-100': '#fde7e7',
  'red-300': '#f8a5a5',
  'red-500': '#ed1313',
  'red-700': '#aa0029',

  // Orange
  'orange-100': '#fff5e6',
  'orange-300': '#ffd89e',
  'orange-500': '#ff9900',
  'orange-700': '#d3830a',

  // Green
  'green-100': '#e7fbe9',
  'green-300': '#a3efab',
  'green-500': '#0dd621',
  'green-700': '#038f11',

  // Primary
  'primary-100': '#e6f5ff',
  'primary-200': '#cfebff',
  'primary-300': '#9ed8ff',
  'primary-400': '#49b6ff',
  'primary-500': '#0099ff',
  'primary-600': '#0083db',
  'primary-700': '#0062a4',
};

const darkColor: IColor = {
  // Gray
  'gray-100': '#202020',
  'gray-200': '#272727',
  'gray-300': '#2c2c2c',
  'gray-400': '#494949',
  'gray-500': '#676767',
  'gray-600': '#828282',
  'gray-700': '#a1a1a1',
  'gray-800': '#c0c0c0',
  'gray-900': '#e0e0e0',

  // Red
  'red-100': '#770909',
  'red-300': '#ed1313',
  'red-500': '#f79999',
  'red-700': '#fbcccc',

  // Orange
  'orange-100': '#804d00',
  'orange-300': '#ff9900',
  'orange-500': '#ffd392',
  'orange-700': '#ffe9c8',

  // Green
  'green-100': '#066c11',
  'green-300': '#0dd621',
  'green-500': '#8df898',
  'green-700': '#c6fccc',

  // Primary
  'primary-100': '#00426d',
  'primary-200': '#006db6',
  'primary-300': '#0099ff',
  'primary-400': '#37afff',
  'primary-500': '#6dc5ff',
  'primary-600': '#a4dbff',
  'primary-700': '#c8e9ff',
};

// 라이트모드
for (const color in lightColor) {
  palette[`light-${color}`] = lightColor[color];
}

// 다크모드
for (const color in darkColor) {
  palette[`dark-${color}`] = darkColor[color];
}

export default palette;
