"use strict";
var app_module_1 = require('../../app.module');
var fs_service_1 = require('../../../app/services/fs.service');
fs_service_1.FsService;
var FsAppController = (function () {
    function FsAppController(fsService) {
        this.fsService = fsService;
        this.root = fsService.getRoot();
    }
    return FsAppController;
}());
app_module_1.AppModule.component('fsApp', {
    controller: FsAppController,
    templateUrl: 'app/components/fsapp/fsapp.template.html',
});
//# sourceMappingURL=fsapp.component.js.map