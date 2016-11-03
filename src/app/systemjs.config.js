(function(global) {
  var map = {
    app: ".",
    '@angular': '../node_modules/@angular',
    'rxjs': '../node_modules/rxjs',
    'ng2-completer': '../node_modules/ng2-completer/bundles'
  };
  var packages = {
    'app': { 'spp' : './spp.module.ts', defaultExtension: 'ts' },
    '@angular/common': { main: 'bundles/common.umd.js', defaultExtension: 'js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js', defaultExtension: 'js' },
    '@angular/core': { main: 'bundles/core.umd.js', defaultExtension: 'js' },
    '@angular/forms': { main: 'bundles/forms.umd.js', defaultExtension: 'js' },
    '@angular/http': { main: 'bundles/http.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'ng2-completer':{ main: 'ng2-completer.js', format: 'cjs' }
  };


  System.config({
    transpiler: 'typescript', //use typescript for compilation
    typescriptOptions: {      //typescript compiler options
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  });
})(this);

