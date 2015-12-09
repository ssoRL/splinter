module Splinter {
	export class SplinterModel implements ISplinterModel {
		sub_panes: IPane[];
		
		constructor(){
			// a new splinter wil start out with a single
			// content pane
			this.sub_panes = [new Content()]
		}
	}
}