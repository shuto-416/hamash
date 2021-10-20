/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['somemodule', 'and-another']);

module.exports = {
  reactStrictMode: true,
}

