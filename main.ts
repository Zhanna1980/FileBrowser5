import * as angular from 'angular';
import { AppModule } from './app/app.module';
import './app/components/fsapp/fsapp.component';
import './app/components/tree/tree.component';
import './app/components/content/content.component'
import './app/services/fs.service'
/**
 * Created by zhannalibman on 02/03/2017.
 */

angular.bootstrap(document, [AppModule.name]);
