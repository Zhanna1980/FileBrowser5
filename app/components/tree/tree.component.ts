/**
 * Created by zhannalibman on 02/03/2017.
 */

import { AppModule } from '../../app.module';
import {FsService} from "../../services/fs.service";
import {MenuType} from "../contextMenu/contextMenu.component";

export class TreeComponentController {
    private fsService: FsService;
    private showChildren: boolean;
    private state: string;

    constructor(private $rootScope: ng.IScope, fsService: FsService) {
        this.fsService = fsService;
        this.showChildren = false;
        this.state = "collapsed";
    }

    toggleChildren(folder) {
        this.showChildren = !this.showChildren;
        this.setState(folder);
    }

    onFolderNameClick (folder: any) {
        this.fsService.setCurrentFolder(folder);
    };

    setState(folder) {
        if (this.showChildren || folder.children.length == 0) {
            this.state = "expanded";
        }
        else {
            this.state = "collapsed";
        }
    }

    handleMouseDownEvents ($event, folder) {
        if ($event.which === 1) {
            this.onFolderNameClick(folder);
        }
        else if ($event.which === 3){
            this.showContextMenu($event, folder);
        }
    }

    showContextMenu(event: any, folder: any) {
        let menuType = folder.id == 1 ? MenuType.Root : MenuType.TreeFolder;
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: folder.id, type: menuType });
    }
}

AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: ['$rootScope','fsService', TreeComponentController],
    bindings: {
        folder: "<",
    }
});
