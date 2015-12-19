module Splinter {
	export class SplinterModel implements ISplinterModel {
		// the models describing all of the sub panes
		panes: IPaneModel[];
		// the width or height of the sub panes
		spans: number[];
		// The size of the window to write in
		size: number = 0;
		// The offsets of the divisions
		div_offs: number[] = [0, 0];
		// a function to trigger updates
		update: () => void;
		
		constructor(){
			// a new splinter wil start out with a single
			// content pane
			this.panes = [new ContentModel()]
			this.spans = [1]
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
			
			// this will start out as an average span
			// this will clearly make the total span larger than the
			// available space, but update() will run resizeSpans()
			let span = this.totalSpan()/this.spans.length;
			this.spans.splice(index, 0, span);
			
			// reset all of the divider deltas to 0
			this.div_offs = [];
			for(let i=0; i<this.panes.length+1; i++){
				this.div_offs[i] = 0;
			}
			
			this.update();
		}
		
		// Resizes so that the pane at [index-1] is [delta] larger
		// and the pane at [index] is [delta] larger
		// [delta] may be negative
		// if [index] is 0 or equal to the length of panes
		// then no action is taken
		public resize(index: number, event:React.SyntheticEvent, drag:IDragEvent): boolean{
			let delta = drag.deltaX;
			console.log("delta: " + delta);
			// can't mave the dividers at the edge
			if(index <= 0 || index >= this.panes.length){
				return false;
			}
			// can't make the dividers too small
			if(delta > 0 && this.spans[index] <= MINIMUM_SIZE){
				return false;
			}else if(delta < 0 && this.spans[index-1] <= MINIMUM_SIZE){
				return false;
			}
			// if there's no reason not to, resize the dividers
			this.spans[index-1] += delta;
			this.spans[index] -= delta;
			// and add to the divider's offset total
			this.div_offs[index] -= delta;
			
			this.update();
		}
		
		private totalSpan():number{
			let sum = 0;
			for(let n of this.spans){
				sum += n;
			}
			return sum;
		}
		
		public resizeSpans(total: number){
			this.size = total;
			let sum = this.totalSpan();
			if(sum != total){
				// resize all of the spans to fit
				// inside of the new total
				let factor = total/sum;
				for(let i=0; i<this.spans.length; i++){
					this.spans[i] *= factor;
				}
			}
		}
	}
}