import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service';
import {MenuType} from "../contextMenu/contextMenu.component";

class FsAppController {
    private root: Object;

    constructor (private $rootScope: ng.IScope, private fsService: FsService) {
        this.root = fsService.getRoot()
    }

    hideContextMenu() {
        this.$rootScope.$broadcast('hideContextMenu');
    }

    handleMouseDownEvents ($event) {
        if ($event.which === 3){
            this.showContextMenu($event, this.fsService.getCurrent());
        }
    }

    showContextMenu (event: any, current: any) {
        this.$rootScope.$broadcast('showContextMenu', { event: event, id: current.id, type: MenuType.Content });
    }
}

AppModule.component('fsApp', {
    controller: ['$rootScope','fsService', FsAppController],
    templateUrl: 'app/components/fsapp/fsapp.template.html',
});

