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
       //const item = this.findItemById(id);
       // if (this.isFolder(item)) {
       //     this.currentFolder = item;
       // }
        this.currentFolder = item;
    }

    private isFolder(item) {
        return item.children !== undefined;
    }

    /**
     * Finds item by its id
     * @param itemId - the id of the item
     * @return item object with given id
     * */
    private findItemById(itemId: number) {
        return this.findItemRecursive(itemId, this.root, null).element;
    }
    /**
     * Finds parent item by id of the child item
     * @param itemId - the id of the child item.
     * @return parent object.
     * */
    private findParentByItemId(itemId) {
    return this.findItemRecursive(itemId, this.root, null).parent;
}

    /**
     * Finds item and parent item by id of the item
     * @param itemId - the id of the item.
     * @return object with item and its parent.
     * */
    private findItemAndParentById(itemId) {
        return this.findItemRecursive(itemId, this.root, null);
    }

    /**
     * Searches recursively for an item in fsStorage
     * @param id - integer which is stored in item.id
     * @param item - object from which the function starts search
     * @param parent - parent object of item
     * @return object with item with given id and with parent item.
     * */
    private findItemRecursive(id, item, parent) {
        if (item.id == id) {
            return {element: item, parent: parent};
        }
        if (this.isFolder(item)) {
            for (var i = 0; i < item.children.length; i++) {
                var result = this.findItemRecursive(id, item.children[i], item);
                if (result.element !== null) {
                    return result;
                }
            }
        }
        return {item: null, parent: null};
    }
}

AppModule.service('fsService', FsService);
