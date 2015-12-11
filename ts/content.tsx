module Splinter {
	
	export class Content extends React.Component<IContentProps, {}> implements IPane {
		
		render(){
			let style = {
				width: this.props.width + "px",
				height: this.props.height + "px",
				position: "absolute",
				left: this.props.x_offset + "px",
				top: this.props.y_offset + "px",
				backgroundColor: this.props.model.bg_color
			}
			return (
				<div
					style = {style} 
					onClick = {e => this.props.onSplit(this.props.model.id, true)}
				/>
			)
		}
	}
}