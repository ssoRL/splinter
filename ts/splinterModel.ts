module Splinter {
	export class SplinterModel implements ISplinterModel {
		panes: IPaneModel[];
		update: () => void;
		
		constructor(){
			// a new splinter wil start out with a single
			// content pane
			this.panes = [new ContentModel()]
		}
		
		// The function that adds a new content inside
		// a splinter.
		// id: The content of a neighboring content to the new one
		// ahead: true if the new content should be to the right
		// of the old content
		public split(index: number){
			// first find the content to be next to
			/*
			Old code that does this by id rather than by index,
			might be done this way again, who knows?
			commented in Dec 2015
			let index = -1;
			for(let i=0; i<this.panes.length; i++){
				let pane = this.panes[i];
				if(pane instanceof ContentModel){
					if(pane.id == id){
						index = i;
						break;
					}
				}
			}
			// make sure that the index was found
			if(index < 0){
				throw "Content with id " + id + " not found.";
			}
			// now adjust in case of ahead
			if(ahead){
				index++;
			}
			*/
			// now insert a new empty content
			this.panes.splice(index, 0, new ContentModel());
			
			this.update();
		}
	}
}