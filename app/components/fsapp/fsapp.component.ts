import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service';

class FsAppController {
    private root: Object;

    constructor(private fsService: FsService, private $rootScope: ng.IScope) {
        this.root = fsService.getRoot()
    }

    showContextMenu($event) {
        if ($event.which === 3){
            console.log($event.target);
        }


    }
}

AppModule.component('fsApp', {
    controller: FsAppController,
    templateUrl: 'app/components/fsapp/fsapp.template.html',
});

