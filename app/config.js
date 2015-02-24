System.config({
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "ember": "github:components/ember@1.11.0-beta.2",
    "ember-vcl-navigation": "github:ember-vcl/navigation@master",
    "hbs": "github:n-fuse/plugin-ember-hbs@1.11.0-beta.2",
    "ihbs": "github:n-fuse/plugin-ember-ihbs@1.11.0-beta.2",
    "jquery": "github:components/jquery@2.1.3",
    "vcl": "modules/vcl/vcl",
    "github:components/ember@1.11.0-beta.2": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "github:ember-vcl/gesture-support@master": {
      "polymer-gestures": "github:n-fuse/polymer-gestures@0.5.5"
    },
    "github:ember-vcl/icogram@master": {
      "ember-vcl-l10n-props-support": "github:ember-vcl/l10n-props-support@master",
      "ember-vcl-layout-attributes-support": "github:ember-vcl/layout-attributes-support@master"
    },
    "github:ember-vcl/navigation@master": {
      "ember-vcl-gesture-support": "github:ember-vcl/gesture-support@master",
      "ember-vcl-icogram": "github:ember-vcl/icogram@master",
      "ember-vcl-transition-monitoring-support": "github:ember-vcl/transition-monitoring-support@master"
    },
    "github:n-fuse/plugin-ember-hbs@1.11.0-beta.2": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.11.0-beta.2"
    },
    "github:n-fuse/plugin-ember-ihbs@1.11.0-beta.2": {
      "ember-template-compiler": "github:n-fuse/ember-template-compiler@1.11.0-beta.2"
    }
  }
});

