import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
// import { setPublicPath } from "systemjs-webpack-interop";
import Index from './index';
import 'typeface-roboto';

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Index,
	errorBoundary(err, info, props) {
		return <div className="mt-16">Error</div>;
	},
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;

export const greeting = 'Hello qwertyadfegr';

// setPublicPath("@pbpd/spec-child");