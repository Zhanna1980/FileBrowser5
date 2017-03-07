/**
 * Created by zhannalibman on 02/03/2017.
 */

import { AppModule } from '../../app.module';
import {FsService} from "../../services/fs.service";

export class ContentComponentController {

    private current: Object;

    constructor(private fsService: FsService) {
        this.current = this.fsService.getCurrent();
    }

    getCurrentFolder() {
        return this.current;
    }
}

AppModule.component('content', {
    templateUrl: 'app/components/content/content.template.html',
    controller: ContentComponentController,
    bindings: {
        current: '<'
    }
});
