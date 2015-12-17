/// <reference path="../react/react.d.ts" />
	
import React = __React
import ReactDOM = __React.__DOM

interface IDragEvent {
	position: { left: number, top: number },
	deltaX: number,
	deltaY: number
}

interface IDraggableProps {
	// Called when dragging starts.
	// If `false` is returned from this method, dragging will cancel. 
	onStart?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
		
	// Called while dragging. 
	onDrag?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
		
	// Called while dragging. 
	onStop?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
		
	// Called whenever the user mouses down. Called regardless of handle or 
	//  disabled status. 
	onMouseDown?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
		
	// Specifies the `x` and `y` that the dragged item should start at. 
	// This is generally not necessary to use (you can use absolute or relative 
	// positioning of the child directly), but can be helpful for uniformity in 
	// your callbacks and with css transforms. 
	start?: { x: number, y: number }
		
	// If true, will not call any drag handlers. 
	disabled?: boolean,
 
	// Specifies a selector to be used to prevent drag initialization. 
	// Example: '.body' 
	cancel?: string,
 
	// Specifies a selector to be used as the handle that initiates drag. 
	// Example: '.handle' 
	handle?: string,
 
	// If set to `true`, will allow dragging on non left-button clicks. 
	allowAnyClick?: boolean,
 
	// Determines which axis the draggable can move. Accepted values: 
	// - `both` allows movement horizontally and vertically (default). 
	// - `x` limits movement to horizontal axis. 
	// - `y` limits movement to vertical axis. 
	axis?: string,
 
	// Specifies movement boundaries. Accepted values: 
	// - `parent` restricts movement within the node's offsetParent 
	//    (nearest node with position relative or absolute), or 
	// - An object with `left, top, right, and bottom` properties. 
	//   These indicate how far in each direction the draggable 
	//   can be moved. 
	bounds?: { left: number, top: number, right: number, bottom: number } | string,
 
	// Specifies the x and y that dragging should snap to. 
	grid?: [number, number],
 
	// Specifies the zIndex to use while dragging. 
	zIndex?: number
}

interface IDraggableCoreProps {
	onStart?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
	onDrag?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
	onStop?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
	onMouseDown?: (event: React.SyntheticEvent, drag: IDragEvent) => boolean;
	disabled?: boolean,
	cancel?: string,
	handle?: string,
	allowAnyClick?: boolean,
	grid?: [number, number],
}

declare class ReactDraggable extends React.Component<IDraggableProps, {}> { }

declare class ReactDraggableCore extends React.Component<IDraggableCoreProps, {}> { }