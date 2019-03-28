const express = require("express");

const API_PORT = 4000;
const app = express();

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));