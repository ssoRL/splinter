module Splinter {
	
	export class Top extends React.Component<ISplinterTopProps, ISplinterTopState> {
		
		constructor(props: ISplinterTopProps){
			super(props);
			this.state = {
				width: window.innerWidth,
				height: window.innerHeight
			}
			// at this time set the sub's position
			// let sub = this.props.model.pane;
			// //sub = new Splinter(props)
			// sub.props.width = this.state.width;
			// sub.props.height = this.state.height;
			// sub.props.x_offset = 0;
			// sub.props.y_offset = 0;
		}
		
		public handleResize(){
			let w = window.innerWidth;
			let h = window.innerHeight;
			this.state.width = w;
			this.state.height = h;
			// let sub = this.props.model.pane;
			// sub.props.width = w;
			// sub.props.height = h;
		}

		public componentDidMount() {
			window.addEventListener('resize', this.handleResize);
		}

		public componentWillUnmount() {
			window.removeEventListener('resize', this.handleResize);
		}
  
		public render(){
			// set the sub splinter to the right size
			// let sub = this.props.model.pane;
			// sub.props.height = this.state.height;
			// sub.props.width = this.state.width;
			// styling
			let style = {
				width: this.state.width,
				height: this.state.height,
				position: "absolute",
				left: 0,
				top: 0
			}
			return (
				<div
					style = {style}
				>
					<Splinter 
						width = {this.state.width}
						height = {this.state.height}
						x_offset = {0}
						y_offset = {0}
						horizontal = {true}
						model = {this.props.model.splinter}
					/>
				</div>
			)
		}
	}
}

// var s_props: ISplinterProps = {
// 	horizontal: true,
// 	model: new Splinter.SplinterModel(),
// 	width: 0,
// 	height: 0,
// 	x_offset: 0,
// 	y_offset: 0
// }

var model = new Splinter.TopModel();

ReactDOM.render(
	<Splinter.Top model={model} />,
	document.getElementsByClassName('splinterTop')[0]
)