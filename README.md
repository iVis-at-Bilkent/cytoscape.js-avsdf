cytoscape-avsdf
================================================================================


## Description

An implementation of the [Circular Drawing Algorithm](https://www.researchgate.net/publication/229019459_New_circular_drawing_algorithms) by Hongmei He & Ondrej Sýkora.

Click [here](https://ivis-at-bilkent.github.io/cytoscape.js-avsdf/demo.html) for a demo.

## Dependencies

 * Cytoscape.js ^3.2.0
 * avsdf-base ^1.0.0

## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-avsdf`,
 * via bower: `bower install cytoscape-avsdf`, or
 * via direct download in the repository (probably from a tag).

Import the library as appropriate for your project:

ES import:

```js
import cytoscape from 'cytoscape';
import avsdf from 'cytoscape-avsdf';

cytoscape.use( avsdf );
```

CommonJS require:

```js
let cytoscape = require('cytoscape');
let avsdf = require('cytoscape-avsdf');

cytoscape.use( avsdf ); // register extension
```

AMD:

```js
require(['cytoscape', 'cytoscape-avsdf'], function( cytoscape, avsdf ){
  avsdf( cytoscape ); // register extension
});
```

Plain HTML/JS has the extension registered for you automatically, because no `require()` is needed.


## API

When calling the layout, e.g. `cy.layout({ name: 'avsdf-base', ... })`, the following options are supported:

```js
var defaultOptions = {
    // Called on `layoutready`
    ready: function () {
    },
    // Called on `layoutstop`
    stop: function () {
    },
    // number of ticks per frame; higher is faster but more jerky
    refresh: 30,
    // Whether to fit the network view after when done
    fit: true,
    // Padding on fit
    padding: 10,
    // Prevent the user grabbing nodes during the layout (usually with animate:true)
    ungrabifyWhileSimulating: false,
    // Type of layout animation. The option set is {'during', 'end', false}
    animate: 'end',
    // Duration for animate:end
    animationDuration: 500,   
    // How apart the nodes are
    nodeSeparation: 60
};
```

## Build targets

* `npm run test` : Run Mocha tests in `./test`
* `npm run build` : Build `./src/**` into `cytoscape-avsdf.js`
* `npm run watch` : Automatically build on changes with live reloading (N.b. you must already have an HTTP server running)
* `npm run dev` : Automatically build on changes with live reloading with webpack dev server
* `npm run lint` : Run eslint on the source

N.b. all builds use babel, so modern ES features can be used in the `src`.


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Build the extension : `npm run build:release`
1. Commit the build : `git commit -am "Build for release"`
1. Bump the version number and tag: `npm version major|minor|patch`
1. Push to origin: `git push && git push --tags`
1. Publish to npm: `npm publish .`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-avsdf https://github.com/iVis-at-Bilkent/cytoscape.js-avsdf.git`
1. [Make a new release](https://github.com/iVis-at-Bilkent/cytoscape.js-avsdf/releases/new) for Zenodo.

## Team

  * [Alihan Okka](https://github.com/alihanokka), Doruk Cakmakci, and [Ugur Dogrusoz](https://github.com/ugurdogrusoz) of [i-Vis at Bilkent University](http://www.cs.bilkent.edu.tr/~ivis)
