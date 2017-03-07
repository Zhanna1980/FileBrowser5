/**
 * Created by zhannalibman on 02/03/2017.
 */
"use strict";
var app_module_1 = require('../../app.module');
var TreeComponentController = (function () {
    function TreeComponentController(fsService) {
        this.fsService = fsService;
        this.showChildren = false;
        this.root = fsService.getRoot();
    }
    TreeComponentController.prototype.toggleChildren = function () {
        this.showChildren = !this.showChildren;
    };
    return TreeComponentController;
}());
exports.TreeComponentController = TreeComponentController;
app_module_1.AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: TreeComponentController,
    bindings: {
        folder: "<",
    }
});
//# sourceMappingURL=tree.component.js.map