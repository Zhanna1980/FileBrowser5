"use strict";
var app_module_1 = require('../../app.module');
var FsAppController = (function () {
    function FsAppController($rootScope, fsService) {
        this.$rootScope = $rootScope;
        this.fsService = fsService;
        this.root = fsService.getRoot();
    }
    FsAppController.prototype.hideContextMenu = function () {
        this.$rootScope.$broadcast('hideContextMenu');
    };
    FsAppController.prototype.handleMouseDownEvents = function ($event) {
        if ($event.which === 3) {
            this.showContextMenu($event, this.fsService.getCurrent());
        }
    };
    FsAppController.prototype.showContextMenu = function (event, current) {
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: current.id, type: 4 /* Content */ });
    };
    return FsAppController;
}());
app_module_1.AppModule.component('fsApp', {
    controller: ['$rootScope', 'fsService', FsAppController],
    templateUrl: 'app/components/fsapp/fsapp.template.html',
});
//# sourceMappingURL=fsapp.component.js.map