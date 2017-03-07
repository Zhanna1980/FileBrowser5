/**
 * Created by zhannalibman on 02/03/2017.
 */

import { AppModule } from '../../app.module';
import {FsService} from "../../services/fs.service";

export class TreeComponentController {

    private showChildren: boolean;
    private root: Object;

    constructor(private fsService: FsService) {
        this.showChildren = false;
        this.root = fsService.getRoot();
    }

    toggleChildren() {
        this.showChildren = !this.showChildren;
    }


    // select(contact) {
    //     this.contactService.activate(contact);
    //
    //     //this.onSelectionChanged({x: contact});
    // }
}

AppModule.component('tree', {
    templateUrl: 'app/components/tree/tree.template.html',
    controller: TreeComponentController,
    bindings: {
        folder: "<",
    }
});
