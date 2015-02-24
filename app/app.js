
import Ember from 'ember';

import layout from 'templates/component-layout.hbs!';

var MyComponent = Ember.Component.extend({
  layout: layout
});

Ember.Handlebars.helper('my-component', MyComponent);

import tmpl from 'templates/application.hbs!ihbs';


import 'styles/index.styl!vcl';

import 'ember-vcl-navigation';

var Demo = Ember.Application.create();
