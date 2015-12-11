module Splinter {
	export class TopModel implements ISplinterTopModel{
		splinter: ISplinterModel;
		
		constructor(){
			this.splinter = new SplinterModel();
		}
	}
}