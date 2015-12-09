module Splinter {
	
	export class Splinter extends React.Component<ISplinterProps, {}> implements IPane {
		
		constructor(props: ISplinterProps){
			super(props);
			this.state = {};
		}
		
		public render(){
			let subs = this.props.model.sub_panes;
			let subs_l = subs.length;
			if(this.props.horizontal){
				let sub_width = this.props.width / subs_l;
				let offset = 0;
				for(let sub of subs){
					//sub.setWidth(subs_l);
					//sub.setOffsetX(offset);
					sub.props.width = subs_l;
					sub.props.x_offset = offset;
					offset += subs_l;
				}
			}else{
				// TODO: code to handle vertical alignment
			}
			let style = {
				width: this.props.width + "px",
				height: this.props.height + "px",
				position: "absolute",
				left: this.props.x_offset + "px",
				top: this.props.y_offset + "px",
			}
			return (
				<div style = {style}>
					{subs}
				</div>
			)
		}
	}
}