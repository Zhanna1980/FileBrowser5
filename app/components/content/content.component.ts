/**
 * Created by zhannalibman on 02/03/2017.
 */

import { AppModule } from '../../app.module';
import {FsService} from "../../services/fs.service";
import {MenuType} from "../contextMenu/contextMenu.component";

export class ContentComponentController {

    private current: Object;

    constructor (private $rootScope: ng.IScope, private fsService: FsService) {
        this.current = this.fsService.getCurrent();
    }

    getCurrentFolder (): Object {
        return this.current;
    }

    onFolderItemClick (item: Object): void {
        this.fsService.setCurrentFolder(item);
        this.hideContextMenu();
    }

    handleMouseDownEvents ($event, item): void {
        if ($event.which === 1) {
            if (this.fsService.isFolder(item)) {
                this.onFolderItemClick(item);
            }
        }
        else if ($event.which === 3) {
            $event.stopPropagation();
            this.showContextMenu($event, item);
        }
    }

    showContextMenu (event: any, item: any): void {
        let menuType: MenuType = this.fsService.isFolder(item) ? MenuType.ContentFolder : MenuType.ContentFile;
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: item.id, type: menuType });
    }

    hideContextMenu() {
        this.$rootScope.$broadcast('hideContextMenu');
    }
}

AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ['$rootScope','fsService', ContentComponentController],
    bindings: {
        current: '<'
    }
});
