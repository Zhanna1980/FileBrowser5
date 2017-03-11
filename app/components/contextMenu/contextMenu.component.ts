import {AppModule} from "../../app.module";
import {FsService} from "../../services/fs.service";
/**
 * Created by zhannalibman on 02/03/2017.
 */
const enum MenuType {
    Root,
    TreeFolder,
    ContentFolder,
    ContentFile,
    Content
}

interface MenuEntry {
    entryName: string,
    entryFunction: Function
}

class ContextMenuController {

    private fsService: FsService;
    private type: MenuType;
    private menuData: MenuEntry[];
    id: number;
    private posX: number;
    private posY: number;

    constructor(fsService: FsService, private $scope: ng.IScope) {
        this.fsService = fsService;
        // $scope.$on('showContextMenu', (event, obj) => {
        //     this.type = obj.type;
        //     this.setMenuDataByType();
        //     this.id = obj.id;
        //     this.posX = obj.event.clientX;
        //     this.posY = obj.event.clientY;
        // });
    }

    private setMenuDataByType () {
        switch (this.type){
            case MenuType.Root:
                this.menuData = [{entryName: "New Folder", entryFunction: this.newFolder},
                    {entryName: "Rename", entryFunction:this.rename}];
                break;
            case MenuType.TreeFolder:
                this.menuData = [{entryName: "New Folder" , entryFunction:this.newFolder},
                    {entryName: "Rename", entryFunction: this.rename},
                    {entryName: "Delete", entryFunction: this.delete}];
                break;
            case MenuType.ContentFolder:
                this.menuData = [{entryName: "New Folder", entryFunction: this.newFolder},
                    {entryName: "New file", entryFunction: this.newFile},
                    {entryName: "Rename", entryFunction: this.rename},
                    {entryName: "Delete", entryFunction: this.delete}];
                break;
            case MenuType.ContentFile:
                this.menuData = [{entryName: "Rename", entryFunction: this.rename},
                    {entryName: "Delete", entryFunction: this.delete}];
                break;
            case MenuType.Content:
                this.menuData = [{entryName: "New Folder", entryFunction: this.newFolder},
                    {entryName: "New file", entryFunction: this.newFile}];
                break;
            default:
                throw new Error ("Wrong menu type.");
        }
    }

    private newFolder () {

    }

    private newFile () {

    }

    private rename () {

    }

    private delete () {

    }
}

AppModule.component('contextMenu', {
    controller: ['$scope', ContextMenuController],
    templateUrl: 'app/components/contextMenu/contextMenu.template.html',
});
