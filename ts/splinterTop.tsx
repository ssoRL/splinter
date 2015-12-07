module Splinter {
	
	export class Top extends React.Component<ISplinterTopProps, {}> {
		
		public handleResize(){
			
		}

		public componentDidMount() {
			window.addEventListener('resize', this.handleResize);
		}

		public componentWillUnmount() {
			window.removeEventListener('resize', this.handleResize);
		}
  
		public render(){
			
		}
	}
}