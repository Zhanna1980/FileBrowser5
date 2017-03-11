"use strict";
var app_module_1 = require('../../app.module');
var FsAppController = (function () {
    function FsAppController(fsService, $rootScope) {
        this.fsService = fsService;
        this.$rootScope = $rootScope;
        this.root = fsService.getRoot();
    }
    FsAppController.prototype.showContextMenu = function ($event) {
        if ($event.which === 3) {
            console.log($event.target);
        }
    };
    return FsAppController;
}());
app_module_1.AppModule.component('fsApp', {
    controller: FsAppController,
    templateUrl: 'app/components/fsapp/fsapp.template.html',
});
//# sourceMappingURL=fsapp.component.js.map