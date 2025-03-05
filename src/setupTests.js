// import { configure } from 'enzyme';
// import Adapter from '@cfaester/enzyme-adapter-react-18';

// Polyfill TextEncoder/TextDecoder (if not already done)
// const { TextEncoder, TextDecoder } = require('util');
// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;

// Polyfill ReadableStream
// const { ReadableStream } = require('web-streams-polyfill');
// global.ReadableStream = ReadableStream;

// Now import and configure Enzyme
const { configure } = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18').default;

configure({ adapter: new Adapter() });
require('jest-fetch-mock').enableMocks();
