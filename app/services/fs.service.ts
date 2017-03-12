/**
 * Created by zhannalibman on 04/03/2017.
 */
import { AppModule } from '../app.module';

export class FsService {

    private root: Object;
    private currentFolder: Object;

    constructor() {
        this.root = {
            id: 1, name: 'root', children: [
                {
                    id: 2, name: 'sub1', children: [
                    { id: 4, name: 'sub3', children: [] },
                    { id: 5, name: 'file1', content: 'text' },
                ]
                },
                { id: 3, name: 'sub2', children: [] },
            ]
        };

        this.currentFolder = this.root;
    }

    getRoot() {
        return this.root;
    }

    getCurrent() {
        return this.currentFolder;
    }

    setCurrentFolder (item) {
        this.currentFolder = item;
    }

    isFolder(item) {
        return item.children !== undefined;
    }


}

AppModule.service('fsService', FsService);
