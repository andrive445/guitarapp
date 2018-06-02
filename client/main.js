import React from 'react';
import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';



import ReactDOM from 'react-dom';



import { routes } from '../lib/routes.js';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('render-target'));
});