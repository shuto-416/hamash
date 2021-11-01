/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["somemodule", "and-another"]);
const path = require("path");

module.exports = {
  reactStrictMode: true,
  rules: [{
    test: /\.md$/,
    use: [
        {
            loader: "html-loader"
        },
        {
            loader: "markdown-loader",
            options: {
                /* your options here */
            }
        }
    ]
}]
};
