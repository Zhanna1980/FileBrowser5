import * as angular from 'angular';
import { AppModule } from './app/app.module';
import './app/services/fs.service'
import './app/components/fsapp/fsapp.component';
import './app/components/tree/tree.component';
import './app/components/content/content.component';
import './app/components/folder/folder.component';
import './app/components/file/file.component';
import './app/components/contextMenu/contextMenu.component';

/**
 * Created by zhannalibman on 02/03/2017.
 */

angular.bootstrap(document, [AppModule.name]);
