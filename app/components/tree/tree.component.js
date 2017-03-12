/**
 * Created by zhannalibman on 02/03/2017.
 */
"use strict";
var app_module_1 = require('../../app.module');
var TreeComponentController = (function () {
    function TreeComponentController($rootScope, fsService) {
        this.$rootScope = $rootScope;
        this.fsService = fsService;
        this.showChildren = false;
        this.state = "collapsed";
    }
    TreeComponentController.prototype.toggleChildren = function (folder) {
        this.showChildren = !this.showChildren;
        this.setState(folder);
    };
    TreeComponentController.prototype.onFolderNameClick = function (folder) {
        this.fsService.setCurrentFolder(folder);
    };
    ;
    TreeComponentController.prototype.setState = function (folder) {
        if (this.showChildren || folder.children.length == 0) {
            this.state = "expanded";
        }
        else {
            this.state = "collapsed";
        }
    };
    TreeComponentController.prototype.handleMouseDownEvents = function ($event, folder) {
        if ($event.which === 1) {
            this.onFolderNameClick(folder);
        }
        else if ($event.which === 3) {
            this.showContextMenu($event, folder);
        }
    };
    TreeComponentController.prototype.showContextMenu = function (event, folder) {
        var menuType = folder.id == 1 ? 0 /* Root */ : 1 /* TreeFolder */;
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: folder.id, type: menuType });
    };
    return TreeComponentController;
}());
exports.TreeComponentController = TreeComponentController;
app_module_1.AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: ['$rootScope', 'fsService', TreeComponentController],
    bindings: {
        folder: "<",
    }
});
//# sourceMappingURL=tree.component.js.map