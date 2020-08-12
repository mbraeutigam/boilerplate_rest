const noData = { status: 'NO_DATA', message: 'No data found!' };

/** @see https://expressjs.com/de/guide/routing.html */
const appRouter = function appRouter(app) {
  app.get('/', (req, res) => res.send(noData));

  app.get('/user', (req, res) => {
    var accountMock = {
      username: 'marc',
      name: 'Marc',
      surname: 'Bräutigam',
      country: 'Germany',
      socialmedia: {
        instagram: '@marc_braeutigam'
      }
    };

    if (!req.query.username) {
      return res.send({ status: 'ERROR', message: 'Missing username' });
    } else if (req.query.username != accountMock.username) {
      return res.send({ status: 'ERROR', message: 'Wrong username' });
    } else {
      return res.send(accountMock);
    }
  });

  app
    .route('/book')
    .get((req, res) => {
      res.send({ status: 'INFO', message: 'Get a book' });
    })
    .post((req, res) => {
      res.send({ status: 'INFO', message: 'Add a book' });
    })
    .put((req, res) => {
      res.send({ status: 'INFO', message: 'Update the book' });
    })
    .delete((req, res) => {
      res.send({ status: 'INFO', message: 'Delete the book' });
    });
};

module.exports = appRouter;
