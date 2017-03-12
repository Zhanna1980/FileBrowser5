/**
 * Created by zhannalibman on 02/03/2017.
 */
"use strict";
var app_module_1 = require('../../app.module');
var ContentComponentController = (function () {
    function ContentComponentController($rootScope, fsService) {
        this.$rootScope = $rootScope;
        this.fsService = fsService;
        this.current = this.fsService.getCurrent();
    }
    ContentComponentController.prototype.getCurrentFolder = function () {
        return this.current;
    };
    ContentComponentController.prototype.onFolderItemClick = function (item) {
        this.fsService.setCurrentFolder(item);
        this.hideContextMenu();
    };
    ContentComponentController.prototype.handleMouseDownEvents = function ($event, item) {
        if ($event.which === 1) {
            if (this.fsService.isFolder(item)) {
                this.onFolderItemClick(item);
            }
        }
        else if ($event.which === 3) {
            $event.stopPropagation();
            this.showContextMenu($event, item);
        }
    };
    ContentComponentController.prototype.showContextMenu = function (event, item) {
        var menuType = this.fsService.isFolder(item) ? 2 /* ContentFolder */ : 3 /* ContentFile */;
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: item.id, type: menuType });
    };
    ContentComponentController.prototype.hideContextMenu = function () {
        this.$rootScope.$broadcast('hideContextMenu');
    };
    return ContentComponentController;
}());
exports.ContentComponentController = ContentComponentController;
app_module_1.AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ['$rootScope', 'fsService', ContentComponentController],
    bindings: {
        current: '<'
    }
});
//# sourceMappingURL=content.component.js.map