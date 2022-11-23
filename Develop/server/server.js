const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
// moved package.json files out of routes folder
// added json descriptions into code!
// deleted "install": "cd server && npm i && cd ../client && npm i", in pacakage json to see if deployment will work on heroku