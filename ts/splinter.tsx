module Splinter {
	
	export class Splinter extends React.Component<ISplinterProps, {}> implements IPane {
		
		constructor(props: ISplinterProps){
			super(props);
			this.state = {};
			props.model.update = this.forceUpdate.bind(this);
		}
		
		public render(){
			let smodel: ISplinterModel = this.props.model;
			let subs = smodel.panes;
			let subs_count = subs.length;
			let width = this.props.width;
			let height = this.props.height
			let x_off = 0;
			let y_off = 0;
			if(this.props.horizontal){
				width -= DIVIDER_SIZE*(subs_count+1);
				smodel.resizeSpans(width);
			}else{
				height -= DIVIDER_SIZE*(subs_count+1);
				smodel.resizeSpans(height);
			}
			let offset = DIVIDER_SIZE;
			let rendered_subs: JSX.Element[] = subs.map(function(sub, i){
				let shared_props ={
					width: this.props.horizontal ? smodel.spans[i] : width,
					height: this.props.horizontal ? height : smodel.spans[i],
					x_offset: this.props.horizontal ?  offset : 0,
					y_offset: this.props.horizontal ?  0 : offset
				}
				// increment the offset accumulator
				offset += smodel.spans[i] + DIVIDER_SIZE;
				if(sub instanceof SplinterModel){
					return (
						<Splinter 
							model = {sub}
							horizontal = {true}
							{...shared_props}
						/>
					)
				}else if(sub instanceof ContentModel){
					return (
						<Content
							model = {sub}
							{...shared_props}
						/>
					)
				}
			}, this)
			
			// now add dividers between the subs
			offset = 0;
			let rsl = rendered_subs.length;
			for(let i=0; i<rsl+1; i++){
				// off is the offset plus the difference that must between
				// accounted for dragging since the last split
				// TODO: I believe that a more elegant solution to this
				// could be achieved by having div_offs keep track of
				// the absolute offset instead of the difference since the
				// last split, but was having issues with the implementation
				let off = offset + smodel.div_offs[i];
				let divider_style = {
					backgroundColor: "#AAA",
					width: this.props.horizontal ? DIVIDER_SIZE : width,
					height: this.props.horizontal ? height : DIVIDER_SIZE,
					position: "absolute",
					left: this.props.horizontal ? off : 0,
					top: this.props.horizontal ?  0 : off,
					// left: x_off*i,
					// top: y_off*i,
				}
				// create the divider, and add an onclick method that
				// adds a new pane to it
				// let divider = 
				// the dividers are added to even spaces in the array
				rendered_subs.splice(i*2, 0, (
					<ReactDraggable
						axis = {this.props.horizontal?'x':'y'}
						grid = {[10, 10]}
						onDrag = {smodel.resize.bind(smodel, i)}
						key = {"divider-" + i + "-of-" + rsl}
					>
						<div
							style = {divider_style}
							onDoubleClick = {smodel.split.bind(smodel, i)}
						/>
					</ReactDraggable>
				));
				if(i<rsl){
					offset += smodel.spans[i] + DIVIDER_SIZE;
				}
			}
			let style = {
				width: this.props.width,
				height: this.props.height,
				position: "absolute",
				left: this.props.x_offset,
				top: this.props.y_offset,
			}
			return (
				<div style = {style}>
					{rendered_subs}
				</div>
			)
		}
	}
}