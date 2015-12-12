module Splinter {
	
	export class Splinter extends React.Component<ISplinterProps, {}> implements IPane {
		
		constructor(props: ISplinterProps){
			super(props);
			this.state = {};
			props.model.update = this.forceUpdate.bind(this);
		}
		
		public render(){
			let subs = this.props.model.panes;
			let subs_l = subs.length;
			let width = this.props.width;
			let height = this.props.height
			let x_off = 0;
			let y_off = 0;
			if(this.props.horizontal){
				width = this.props.width / subs_l;
				x_off = width;
			}else{
				height = this.props.height / subs_l;
				y_off = height;
			}
			let rendered_subs = subs.map(function(sub, i){
				let smodel: ISplinterModel = this.props.model;
				if(sub instanceof SplinterModel){
					return (
						<Splinter 
							model = {sub}
							horizontal = {true}
							width = {width}
							height = {height}
							x_offset = {i*x_off}
							y_offset = {i*y_off}
						/>
					)
				}else if(sub instanceof ContentModel){
					return (
						<Content
							model = {sub}
							onSplit = {smodel.split.bind(smodel)}
							width = {width}
							height = {height}
							x_offset = {i*x_off}
							y_offset = {i*y_off}
						/>
					)
				}
			}, this)
			let style = {
				width: this.props.width + "px",
				height: this.props.height + "px",
				position: "absolute",
				left: this.props.x_offset + "px",
				top: this.props.y_offset + "px",
			}
			return (
				<div style = {style}>
					{rendered_subs}
				</div>
			)
		}
	}
}