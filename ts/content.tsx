module Splinter {
	
	export class Content extends React.Component<IContentProps, {}> implements IPane {
		
		bg: string;
		
		constructor(props?: IContentProps){
			// set some simple defaults if none provided
			if(!props){
				props = {
					width: 0,
					height: 0,
					x_offset: 0,
					y_offset: 0
				}
			}
			super(props);
			// Randomly generate a color
			// This function returns [0-255]
			let rand = () => Math.floor(Math.random()*256)
			
			let r = 0, g = 0, b = 0;
			while(Math.abs(r-b)<20||Math.abs(r-g)<20||Math.abs(b-g)<20){
				// keep going until it's not gray
				r = rand();
				g = rand();
				b = rand();
			}
			
			this.bg = "rgb:(" + r + "," + g + "," + b + ")";
		}
		
		render(){
			
			
			let style = {
				width: this.props.width + "px",
				height: this.props.height + "px",
				position: "absolute",
				left: this.props.x_offset + "px",
				top: this.props.y_offset + "px",
				backgroundColor: this.bg
			}
			return (
				<div style={style} />
			)
		}
	}
}