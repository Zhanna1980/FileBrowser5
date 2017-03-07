"use strict";
var angular = require('angular');
var app_module_1 = require('./app/app.module');
require('./app/components/fsapp/fsapp.component');
require('./app/components/tree/tree.component');
require('./app/components/content/content.component');
require('./app/services/fs.service');
/**
 * Created by zhannalibman on 02/03/2017.
 */
angular.bootstrap(document, [app_module_1.AppModule.name]);
//# sourceMappingURL=main.js.map