module Splinter {
	export class ContentModel implements IContentModel {
		id: string;
		bg_color: string;
		static serial = 1;
		
		constructor(){
			this.id = "content_" + ContentModel.serial;
			ContentModel.serial++;
			
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
			
			this.bg_color = "rgb(" + r + "," + g + "," + b + ")";
		}
	}
}