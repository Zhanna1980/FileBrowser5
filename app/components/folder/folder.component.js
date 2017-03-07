/**
 * Created by zhannalibman on 02/03/2017.
 */
"use strict";
var app_module_1 = require('../../app.module');
var FolderComponentController = (function () {
    function FolderComponentController(fsService) {
        this.fsService = fsService;
    }
    return FolderComponentController;
}());
exports.FolderComponentController = FolderComponentController;
app_module_1.AppModule.component('folder', {
    templateUrl: 'app/components/content/content.template.html',
    controller: FolderComponentController,
    bindings: {
        item: '<'
    }
});
//# sourceMappingURL=folder.component.js.map