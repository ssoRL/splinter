module Splinter {
	export class TopModel implements ISplinterTopModel{
		pane: ISplinter;
		
		constructor(props: ISplinterProps){
			this.pane = new Splinter(props);
		}
	}
}