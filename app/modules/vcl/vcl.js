var styles = [];

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.head.appendChild(node);
}

exports.translate = function(load) {
  var source = load.source.replace("@import 'second';", "");
  styles.push(source);
  addStyleString(source);
  if (load.name === "styles/index.styl!modules/vcl/vcl") {
      return 'import "./second.styl!vcl";';
  } else {
    return '';
  }
};