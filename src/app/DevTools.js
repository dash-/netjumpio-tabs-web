///
// Dependencies
///

import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


///
// Methods
///

const DevTools = createDevTools(
	///
	// Valid DockMonitor properties:
	//
	// toggleVisibilityKey  |  A key or a key combination that
	//                      |  toggles the dock visibility. Must
	//                      |  be recognizable by parse-key (for
	//                      |  example, 'ctrl-h'). Required.
	//                      |
	// changePositionKey    |  A key or a key combination that
	//                      |  toggles the dock position. Must be
	//                      |  recognizable by parse-key (for
	//                      |  example, 'ctrl-w'). Required.
	//                      |
	// changeMonitorKey     |  A key or a key combination that
	//                      |  switches the currently visible
	//                      |  monitor. Must be recognizable by
	//                      |  parse-key (for example, 'ctrl-m').
	//                      |  Required if you use more than one
	//                      |  monitor.
	//                      |
	// fluid                |  When true, the dock size is a
	//                      |  fraction of the window size, fixed
	//                      |  otherwise. Optional. By default set
	//                      |  to true.
	//                      |
	// defaultSize          |  Size of the dock. When fluid is
	//                      |  true, a float (0.5 means half the
	//                      |  window size). When fluid is false,
	//                      |  a width in pixels. Optional. By
	//                      |  default set to 0.3 (3/10th of the
	//                      |  window size).
	//                      |
	// defaultPosition      |  Where the dock appears on the
	//                      |  screen. Valid values: 'left', 'top',
	//                      |  'right', 'bottom'. Optional. By
	//                      |  default set to 'right'.
	//                      |
	// defaultIsVisible     |  Defines whether dock should be open
	//                      |  by default. A value of true means
	//                      |  that it's open when the page/app
	//                      |  loads.
	//
	///
	<DockMonitor
		toggleVisibilityKey="ctrl-i"
		changePositionKey="ctrl-p"
		defaultPosition="left"
		defaultIsVisible={false}
	>
		<LogMonitor theme='tomorrow' />
	</DockMonitor>
);

export default DevTools;
