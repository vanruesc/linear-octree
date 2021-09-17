# Linear Octree

[![CI](https://github.com/vanruesc/linear-octree/actions/workflows/ci.yml/badge.svg)](https://github.com/vanruesc/linear-octree/actions/workflows/ci.yml)
[![Version](https://badgen.net/npm/v/linear-octree?color=green)](https://www.npmjs.com/package/linear-octree)
[![Peer dependencies](https://badgen.net/david/peer/vanruesc/linear-octree)](https://david-dm.org/vanruesc/linear-octree?type=peer)

:warning: WIP :warning:

A sparse, linear octree data structure. For a pointer-based implementation see [sparse-octree](https://github.com/vanruesc/sparse-octree).

*[Demo](https://vanruesc.github.io/linear-octree/public/demo)&ensp;&middot;&ensp;[Documentation](https://vanruesc.github.io/linear-octree/public/docs)*


## Installation

This library requires the peer dependency [three](https://github.com/mrdoob/three.js/).

```sh
npm install three linear-octree
``` 


## Usage

##### Objects

```js
import { Octree } from "linear-octree";

// TODO
```


## Features

- Linear structure
  - Packs positional data into numeric keys
  - Constant time access to octants, parents and neighbors at any depth level
  - Low memory usage
  - Constant depth
- Adheres to a [common octant layout](http://vanruesc.github.io/sparse-octree/public/docs/variable/index.html#static-variable-layout)
- Supports raycasting
  - Uses a 3D supercover variant of the [DDA](https://en.wikipedia.org/wiki/Digital_differential_analyzer_(graphics_algorithm)) line algorithm
- Supports culling
- Can be extended to manage any data


## Contributing

Maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
