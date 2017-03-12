import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service';

class FsAppController {
    private root: Object;

    constructor(private fsService: FsService, private $rootScope: ng.IScope) {
        this.root = fsService.getRoot()
    }

    hideContextMenu() {
        this.$rootScope.$broadcast('hideContextMenu');
    }
}

AppModule.component('fsApp', {
    controller: FsAppController,
    templateUrl: 'app/components/fsapp/fsapp.template.html',
});

