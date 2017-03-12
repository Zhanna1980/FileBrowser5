"use strict";
var app_module_1 = require("../../app.module");
var ContextMenuController = (function () {
    function ContextMenuController($scope, fsService) {
        var _this = this;
        this.$scope = $scope;
        this.newFolder = function () {
            _this.hide();
            console.log("New folder in folder with id", _this.id);
        };
        this.newFile = function () {
            _this.hide();
            console.log("New file in folder with id", _this.id);
        };
        this.rename = function () {
            _this.hide();
            console.log("Rename item with id", _this.id);
        };
        this.delete = function () {
            _this.hide();
            console.log("Delete item with id", _this.id);
        };
        this.fsService = fsService;
        this.newFolderMenuEntry = { entryName: "New folder", entryFunction: this.newFolder };
        this.newFileMenuEntry = { entryName: "New file", entryFunction: this.newFile };
        this.renameMenuEntry = { entryName: "Rename", entryFunction: this.rename };
        this.deleteMenuEntry = { entryName: "Delete", entryFunction: this.delete };
        $scope.$on('showContextMenu', function (event, obj) {
            _this.isActive = true;
            _this.type = obj.type;
            _this.setMenuDataByType();
            _this.id = obj.id;
            _this.posX = obj.event.clientX;
            _this.posY = obj.event.clientY;
        });
        $scope.$on('hideContextMenu', function () {
            _this.hide();
        });
    }
    ContextMenuController.prototype.setMenuDataByType = function () {
        switch (this.type) {
            case 0 /* Root */:
                this.menuData = [this.newFolderMenuEntry, this.renameMenuEntry];
                break;
            case 1 /* TreeFolder */:
                this.menuData = [this.newFolderMenuEntry, this.renameMenuEntry, this.deleteMenuEntry];
                break;
            case 2 /* ContentFolder */:
                this.menuData = [this.newFolderMenuEntry, this.newFileMenuEntry,
                    this.renameMenuEntry, this.deleteMenuEntry];
                break;
            case 3 /* ContentFile */:
                this.menuData = [this.renameMenuEntry, this.deleteMenuEntry];
                break;
            case 4 /* Content */:
                this.menuData = [this.newFolderMenuEntry, this.newFileMenuEntry];
                break;
            default:
                throw new Error("Wrong menu type.");
        }
    };
    ContextMenuController.prototype.hide = function () {
        this.isActive = false;
    };
    return ContextMenuController;
}());
app_module_1.AppModule.component('contextMenu', {
    controller: ['$scope', 'fsService', ContextMenuController],
    templateUrl: 'app/components/contextMenu/contextMenu.template.html',
});
//# sourceMappingURL=contextMenu.component.js.map