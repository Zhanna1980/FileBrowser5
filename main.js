"use strict";
var angular = require('angular');
var app_module_1 = require('./app/app.module');
require('./app/services/fs.service');
require('./app/components/fsapp/fsapp.component');
require('./app/components/tree/tree.component');
require('./app/components/content/content.component');
require('./app/components/folder/folder.component');
require('./app/components/file/file.component');
require('./app/components/contextMenu/contextMenu.component');
/**
 * Created by zhannalibman on 02/03/2017.
 */
angular.bootstrap(document, [app_module_1.AppModule.name]);
//# sourceMappingURL=main.js.map