// a pane can either have some content, or nested panes
interface IPane {
	// a function to call when the size of a super-pane changes
	resize(w: number, h: number);
}

// a content pane has no sub-splinters
interface IContent extends IPane {
	id: string;
	title: string;
}

interface IContentState {
	width: number;
	height: number;
}

// Splinters have sub-panes
interface ISplinter extends IPane {
	sub_panes: IPane[];
}

interface ISplinterState {
	width: number;
	height: number;
}

// The component in charge of the whole page
interface ISplinterTop {
	pane: IPane;
}

interface ISplinterTopProps {
	model: ISplinterTopModel;
}

interface ISplinterTopModel {
	windowResize(w: number, h: number);
	contents: {[id:string]:IContent};
}