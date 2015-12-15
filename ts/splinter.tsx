module Splinter {
	
	export class Splinter extends React.Component<ISplinterProps, {}> implements IPane {
		
		constructor(props: ISplinterProps){
			super(props);
			this.state = {};
			props.model.update = this.forceUpdate.bind(this);
		}
		
		public render(){
			let divider_size = 10;
			let subs = this.props.model.panes;
			let subs_l = subs.length;
			let width = this.props.width - divider_size*(subs_l + 1);
			let height = this.props.height
			let x_off = 0;
			let y_off = 0;
			if(this.props.horizontal){
				width = width / subs_l;
				x_off = width + divider_size;
			}else{
				height = height / subs_l;
				y_off = height;
			}
			let smodel: ISplinterModel = this.props.model;
			let rendered_subs: JSX.Element[] = subs.map(function(sub, i){
				if(sub instanceof SplinterModel){
					return (
						<Splinter 
							model = {sub}
							horizontal = {true}
							width = {width}
							height = {height}
							x_offset = {i*x_off + divider_size}
							y_offset = {i*y_off}
						/>
					)
				}else if(sub instanceof ContentModel){
					return (
						<Content
							model = {sub}
							width = {width}
							height = {height}
							x_offset = {i*x_off + divider_size}
							y_offset = {i*y_off}
						/>
					)
				}
			}, this)
			
			// now add dividers between the subs
			let rsl = rendered_subs.length;
			for(let i=0; i<rsl+1; i++){
				let divider_style = {
					backgroundColor: "#AAA",
					width: this.props.horizontal ? divider_size : width,
					height: this.props.horizontal ? height : divider_size,
					position: "absolute",
					left: i*x_off,
					top: 0
				}
				// create the divider, and add an onclick method that
				// adds a new pane to it
				let divider = (
					<div
						style = {divider_style}
						onClick = {smodel.split.bind(smodel, i)}
					/>
				)
				// the dividers are added to even spaces in the array
				rendered_subs.splice(i*2, 0, divider);
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