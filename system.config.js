var systemJsConfig = {
    baseUrl: '',
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    },
    meta: {
        angular: {
            format: 'global',
            exports: 'angular'
        }
    },
    map: {
        jquery: 'node_modules/jquery/dist/jquery.js',
        angular: 'node_modules/angular/angular.js'
    }
}