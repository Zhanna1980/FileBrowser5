/**
 * Created by zhannalibman on 02/03/2017.
 */

import { AppModule } from '../../app.module';
import {FsService} from "../../services/fs.service";

export class FolderComponentController {

    constructor(private fsService: FsService) {

    }

}

AppModule.component('folder', {
    templateUrl: 'app/components/folder/folder.template.html',
    controller: FolderComponentController,
    bindings: {
        item: '<'
    }
});
