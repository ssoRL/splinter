module Splinter {
	
	export class Content extends React.Component<IContentProps, {}> implements IPane {
		
		render(){
			// First, randomly generate a color, since I 
			// clearly could care less about these things
			// This function returns [0-255]
			let rand = function () {
				return Math.floor(Math.random()*256)
			}
			let r = 0, g = 0, b = 0;
			while(Math.abs(r-b)<20||Math.abs(r-g)<20||Math.abs(b-g)<20){
				// keep going until it's not gray
				r = rand();
				g = rand();
				b = rand();
			}
			
			let style = {
				width: this.props.width + "px",
				height: this.props.height + "px",
				position: "absolute",
				left: this.props.x_offset + "px",
				top: this.props.y_offset + "px",
				backgroundColor: "rgb:(" + r + "," + g + ", " + b + ")",
			}
			return (
				<div style={style} />
			)
		}
	}
}