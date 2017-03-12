import {AppModule} from "../../app.module";
import {FsService} from "../../services/fs.service";
/**
 * Created by zhannalibman on 02/03/2017.
 */
export const enum MenuType {
    Root,
    TreeFolder,
    ContentFolder,
    ContentFile,
    Content
}

interface ContextMenuData {
    event: any,
    id: number,
    type: MenuType
}

interface MenuEntry {
    entryName: string,
    entryFunction: Function
}

class ContextMenuController {

    private fsService: FsService;
    private type: MenuType;
    private menuData: MenuEntry[];
    private id: number;
    private posX: number;
    private posY: number;
    private isActive: boolean;

    private readonly newFolderMenuEntry: MenuEntry;
    private readonly newFileMenuEntry: MenuEntry;
    private readonly renameMenuEntry: MenuEntry;
    private readonly deleteMenuEntry: MenuEntry;

    constructor(private $scope: ng.IScope, fsService: FsService) {
        this.fsService = fsService;
        this.newFolderMenuEntry = {entryName: "New folder", entryFunction: this.newFolder};
        this.newFileMenuEntry = {entryName: "New file", entryFunction: this.newFile};
        this.renameMenuEntry = {entryName: "Rename", entryFunction:this.rename};
        this.deleteMenuEntry = {entryName: "Delete", entryFunction: this.delete};
        $scope.$on('showContextMenu', (event: any, obj: ContextMenuData) => {
            this.isActive = true;
            this.type = obj.type;
            this.setMenuDataByType();
            this.id = obj.id;
            this.posX = obj.event.clientX;
            this.posY = obj.event.clientY;
        });
        $scope.$on('hideContextMenu', () => {
            this.hide();
        });
    }

    private setMenuDataByType () {
        switch (this.type){
            case MenuType.Root:
                this.menuData = [this.newFolderMenuEntry, this.renameMenuEntry];
                break;
            case MenuType.TreeFolder:
                this.menuData = [this.newFolderMenuEntry, this.renameMenuEntry, this.deleteMenuEntry];
                break;
            case MenuType.ContentFolder:
                this.menuData = [this.newFolderMenuEntry, this.newFileMenuEntry,
                    this.renameMenuEntry, this.deleteMenuEntry];
                break;
            case MenuType.ContentFile:
                this.menuData = [this.renameMenuEntry, this.deleteMenuEntry];
                break;
            case MenuType.Content:
                this.menuData = [this.newFolderMenuEntry, this.newFileMenuEntry];
                break;
            default:
                throw new Error ("Wrong menu type.");
        }
    }

    private newFolder = () => {
        this.hide();
        console.log("New folder in folder with id", this.id);
    };

    private newFile = () => {
        this.hide();
        console.log("New file in folder with id", this.id);
    };

    private rename = () => {
        this.hide();
        console.log("Rename item with id", this.id);
    };

    private delete = () => {
        this.hide();
        console.log("Delete item with id", this.id);
    };

    private hide () {
        this.isActive = false;
    }
}

AppModule.component('contextMenu', {
    controller: ['$scope', 'fsService', ContextMenuController],
    templateUrl: 'app/components/contextMenu/contextMenu.template.html',
});
