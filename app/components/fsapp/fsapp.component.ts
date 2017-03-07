import { AppModule } from '../../app.module';
import { FsService } from '../../../app/services/fs.service'; FsService;

class FsAppController {
    private root: Object;

    constructor(private fsService: FsService) {
        this.root = fsService.getRoot()
    }
}

AppModule.component('fsApp', {
    controller: FsAppController,
    templateUrl: 'app/components/fsapp/fsapp.template.html',
    // controller: ['fsService', FsAppController],
    // bindings: {},
});

