/** @type {import('next').NextConfig} */

function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}
exec('git describe --abbrev=0', function(err, stdout){console.log(`running app version: ${stdout}`)});


const nextConfig = {
  reactStrictMode: true,
  env: {
    // customKey: 'my-value',
    // APP_VERSION: exec('git describe --abbrev=0', function(err, stdout){console.log(stdout)}),
    APP_VERSION:  'a value',
  },
}

module.exports = nextConfig
