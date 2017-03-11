"use strict";
/**
 * Created by zhannalibman on 02/03/2017.
 */
var app_module_1 = require('../../app.module');
var FileComponentController = (function () {
    function FileComponentController(fsService) {
        this.fsService = fsService;
    }
    return FileComponentController;
}());
exports.FileComponentController = FileComponentController;
app_module_1.AppModule.component('file', {
    templateUrl: 'app/components/file/file.template.html',
    controller: FileComponentController,
    bindings: {
        item: '<'
    }
});
//# sourceMappingURL=file.component.js.map