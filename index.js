const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

(async () => {
  app.get('/map/:points', async (req, res) => {
    const { points } = req.params;

    const decodedString = atob(points);

    // calculation start

    // calcuation end

    res.status(200);

    res.render('index', {
      points: decodedString,
      locations: location,
    });
  });
})();

app.listen(process.env.PORT || 7000, () =>
  console.log('Server is running! Woohoo!')
);
