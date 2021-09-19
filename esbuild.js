import { createRequire } from "module";
import esbuild from "esbuild";

const require = createRequire(import.meta.url);
const pkg = require("./package");
const minify = process.argv.includes("-m");
const watch = process.argv.includes("-w");
const date = (new Date()).toDateString();
const banner = `/**
 * ${pkg.name} v${pkg.version} build ${date}
 * ${pkg.homepage}
 * Copyright ${date.slice(-4)} ${pkg.author.name}
 * @license ${pkg.license}
 */`;

await esbuild.build({
	entryPoints: ["src/index.ts"],
	outfile: `dist/${pkg.name}.js`,
	external: Object.keys(pkg.peerDependencies || {}),
	banner: { js: banner },
	logLevel: "info",
	format: "esm",
	bundle: true,
	watch
}).catch(() => process.exit(1));

await esbuild.build({
	entryPoints: ["demo/src/index.ts"],
	outdir: "public/demo",
	logLevel: "info",
	format: "iife",
	target: "es6",
	bundle: true,
	minify,
	watch
}).catch(() => process.exit(1));
