/** @type {import('next').NextConfig} */

function exec(cmd, handler = function (error, stdout, stderr) { console.log(stdout); if (error !== null) { console.log(stderr) } }) {
  const childfork = require('child_process');
  return childfork.exec(cmd, handler);
}
// exec('git describe --abbrev=0', function(err, stdout){console.log(stdout)});

const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   NEXT_PUBLIC_APP_VERSION: 'v1.0.0',
  // },
}

module.exports = nextConfig
