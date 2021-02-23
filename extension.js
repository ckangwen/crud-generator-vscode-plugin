const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
exports.activate = function(context) {
  require('./src/openCrudGenerator')(context)
}

/**
 * 插件被释放时触发
 */
exports.deactivate = function() { }
