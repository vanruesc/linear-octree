# Linear Octree

[![Build status](https://travis-ci.org/vanruesc/linear-octree.svg?branch=master)](https://travis-ci.org/vanruesc/linear-octree)
[![npm version](https://badgen.net/npm/v/linear-octree?color=green)](https://www.npmjs.com/package/linear-octree)
[![Peer dependencies](https://david-dm.org/vanruesc/linear-octree/peer-status.svg)](https://david-dm.org/vanruesc/linear-octree?type=peer)

A sparse, linear octree data structure. For a pointer-based implementation see [sparse-octree](https://github.com/vanruesc/sparse-octree).

*[Demo](https://vanruesc.github.io/linear-octree/public/demo)&ensp;&middot;&ensp;[Documentation](https://vanruesc.github.io/linear-octree/public/docs)*


## Installation

This library requires the peer dependencies [iterator-result](https://github.com/vanruesc/iterator-result) and [math-ds](https://github.com/vanruesc/math-ds).

```sh
npm install iterator-result math-ds
``` 

```sh
npm install linear-octree
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


## Octree Helper

The [octree-helper](https://github.com/vanruesc/octree-helper) module provides an octree visualization tool for [three.js](https://threejs.org/).


## Contributing

Maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
