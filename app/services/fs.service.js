"use strict";
/**
 * Created by zhannalibman on 04/03/2017.
 */
var app_module_1 = require('../app.module');
var FsService = (function () {
    function FsService() {
        this.root = {
            id: 1, name: 'root', children: [
                {
                    id: 2, name: 'sub1', children: [
                        { id: 4, name: 'sub3', children: [] },
                        { id: 5, name: 'file1', content: 'text' },
                    ]
                },
                { id: 3, name: 'sub2', children: [] },
            ]
        };
        this.currentFolder = this.root;
    }
    FsService.prototype.getRoot = function () {
        return this.root;
    };
    FsService.prototype.getCurrent = function () {
        return this.currentFolder;
    };
    FsService.prototype.setCurrentFolder = function (item) {
        this.currentFolder = item;
    };
    FsService.prototype.isFolder = function (item) {
        return item.children !== undefined;
    };
    return FsService;
}());
exports.FsService = FsService;
app_module_1.AppModule.service('fsService', FsService);
//# sourceMappingURL=fs.service.js.map