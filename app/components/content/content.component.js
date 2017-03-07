/**
 * Created by zhannalibman on 02/03/2017.
 */
"use strict";
var app_module_1 = require('../../app.module');
var ContentComponentController = (function () {
    function ContentComponentController(fsService) {
        this.fsService = fsService;
        this.current = this.fsService.getCurrent();
    }
    ContentComponentController.prototype.getCurrentFolder = function () {
        return this.current;
    };
    return ContentComponentController;
}());
exports.ContentComponentController = ContentComponentController;
app_module_1.AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ContentComponentController,
    bindings: {
        current: '<'
    }
});
//# sourceMappingURL=content.component.js.map