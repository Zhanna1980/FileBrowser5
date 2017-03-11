/**
 * Created by zhannalibman on 02/03/2017.
 */
import { AppModule } from '../../app.module';
import {FsService} from "../../services/fs.service";

export class FileComponentController {

    constructor(private fsService: FsService) {

    }

}

AppModule.component('file', {
    templateUrl: 'app/components/file/file.template.html',
    controller: FileComponentController,
    bindings: {
        item: '<'
    }
});