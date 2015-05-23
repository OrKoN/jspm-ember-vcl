System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "core-js": "npm:core-js@0.9.11",
    "ember": "github:components/ember@1.12.0",
    "ember-vcl-navigation": "github:ember-vcl/navigation@master",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.12.0",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.12.0",
    "jquery": "github:components/jquery@2.1.4",
    "vcl": "modules/vcl/vcl",
    "github:components/ember@1.12.0": {
      "handlebars.js": "github:components/handlebars.js@1.3.0",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:ember-vcl/gesture-support@0.1.0": {
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/icogram@0.1.2": {
      "ember-vcl-icon": "github:ember-vcl/icon@0.1.3",
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@0.1.2"
    },
    "github:ember-vcl/icon@0.1.3": {
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@0.1.0"
    },
    "github:ember-vcl/navigation@master": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@0.1.0",
      "ember-vcl-icogram": "github:ember-vcl/icogram@0.1.2",
      "ember-vcl-transition-monitoring-support": "github:ember-vcl/transition-monitoring-support@0.1.4"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:n-fuse/plugin-ember-hbs@1.12.0": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.12.0"
    },
    "github:n-fuse/plugin-ember-ihbs@1.12.0": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.12.0"
    },
    "npm:core-js@0.9.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

