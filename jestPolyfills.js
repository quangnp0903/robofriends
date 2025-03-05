// Polyfill TextEncoder/TextDecoder (if not already done)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill ReadableStream
const { ReadableStream } = require('web-streams-polyfill');
global.ReadableStream = ReadableStream;

// Polyfill fetch for tests
// const fetch = require('node-fetch');
// global.fetch = fetch;
