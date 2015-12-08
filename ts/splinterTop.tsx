module Splinter {
	
	export class Top extends React.Component<ISplinterTopProps, ISplinterTopState> {
		
		public handleResize(){
			this.state.width = window.innerWidth;
			this.state.height = window.innerHeight;
		}

		public componentDidMount() {
			window.addEventListener('resize', this.handleResize);
			// at this time set the sub's position
			let sub = this.props.model.pane;
			sub.props.x_offset = 0;
			sub.props.y_offset = 0;
		}

		public componentWillUnmount() {
			window.removeEventListener('resize', this.handleResize);
		}
  
		public render(){
			// set the sub splinter to the right size
			let sub = this.props.model.pane;
			sub.props.height = this.state.height;
			sub.props.width = this.state.width;
			// styling
			let style = {
				width: this.state.width,
				height: this.state.height,
				position: "absolute",
				left: 0,
				right: 0
			}
			return (
				<div
					style = {style}
				>
					{this.props.model.pane}
				</div>
			)
		}
	}
}

var model = new Splinter.SplinterTopModel();

function render() {
	React.render(
		<Splinter.Top model={model}/>,
		document.getElementsByClassName('splinterTop')[0]
	)
}