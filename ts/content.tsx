module Splinter {
	
	export class Content extends React.Component<IContentProps, {}> implements IPane {
		
		render(){
			let style = {
				width: this.props.width,
				height: this.props.height,
				position: "absolute",
				left: this.props.x_offset,
				top: this.props.y_offset,
				backgroundColor: this.props.model.bg_color
			}
			return (
				<div
					style = {style}
				/>
			)
		}
	}
}