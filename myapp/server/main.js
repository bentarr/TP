import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

Meteor.startup(() => {
  // code to run on server at startup
});

WebApp.connectHandlers.use('/api/test', (req, res, next) =>{

  console.log('Callback endpoint /test');

  res.writeHead(200);

  res.end("Réponse du server : ok !");
});
