"use strict";
var app_module_1 = require("../../app.module");
var ContextMenuController = (function () {
    function ContextMenuController($scope, fsService) {
        var _this = this;
        this.$scope = $scope;
        this.fsService = fsService;
        $scope.$on('showContextMenu', function (event, obj) {
            _this.isActive = true;
            _this.type = obj.type;
            _this.setMenuDataByType();
            _this.id = obj.id;
            _this.posX = obj.event.clientX;
            _this.posY = obj.event.clientY;
        });
        $scope.$on('hideContextMenu', function () {
            _this.isActive = false;
        });
    }
    ContextMenuController.prototype.setMenuDataByType = function () {
        switch (this.type) {
            case 0 /* Root */:
                this.menuData = [{ entryName: "New Folder", entryFunction: this.newFolder },
                    { entryName: "Rename", entryFunction: this.rename }];
                break;
            case 1 /* TreeFolder */:
                this.menuData = [{ entryName: "New Folder", entryFunction: this.newFolder },
                    { entryName: "Rename", entryFunction: this.rename },
                    { entryName: "Delete", entryFunction: this.delete }];
                break;
            case 2 /* ContentFolder */:
                this.menuData = [{ entryName: "New Folder", entryFunction: this.newFolder },
                    { entryName: "New file", entryFunction: this.newFile },
                    { entryName: "Rename", entryFunction: this.rename },
                    { entryName: "Delete", entryFunction: this.delete }];
                break;
            case 3 /* ContentFile */:
                this.menuData = [{ entryName: "Rename", entryFunction: this.rename },
                    { entryName: "Delete", entryFunction: this.delete }];
                break;
            case 4 /* Content */:
                this.menuData = [{ entryName: "New Folder", entryFunction: this.newFolder },
                    { entryName: "New file", entryFunction: this.newFile }];
                break;
            default:
                throw new Error("Wrong menu type.");
        }
    };
    ContextMenuController.prototype.newFolder = function () {
    };
    ContextMenuController.prototype.newFile = function () {
    };
    ContextMenuController.prototype.rename = function () {
    };
    ContextMenuController.prototype.delete = function () {
    };
    return ContextMenuController;
}());
app_module_1.AppModule.component('contextMenu', {
    controller: ['$scope', 'fsService', ContextMenuController],
    templateUrl: 'app/components/contextMenu/contextMenu.template.html',
});
//# sourceMappingURL=contextMenu.component.js.map