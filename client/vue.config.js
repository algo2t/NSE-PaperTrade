const fs = require('fs');
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    https: false,
    useLocalIp: false,
    //  port: 8081,
    //host: "localhost"
    //   allowedHosts: [
    //     'localhost',
    //   ]
  }



};
