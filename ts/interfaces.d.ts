// a pane can either have some content, or nested panes
interface IPane {
	// a function to call when the size of a super-pane changes
	props: IPaneProps;
	state: IPaneState;
}

interface IPaneProps {
	width: number;
	height: number;
	x_offset: number;
	y_offset: number;
}

interface IPaneState {}

// a content pane has no sub-splinters
interface IContent {
	id: string;
	title: string;
}

interface IContentProps extends IPaneProps {}

// Splinters have sub-panes
interface ISplinter {}

interface ISplinterProps extends IPaneProps {
	model: ISplinterModel;
}

interface ISplinterModel {
	sub_panes: IPane[];
	horz: boolean;
}

// The component in charge of the whole page
interface ISplinterTop {
	pane: IPane;
}

interface ISplinterTopProps {
	model: ISplinterTopModel;
}

interface ISplinterTopState {
	
}

interface ISplinterTopModel {
	windowResize(w: number, h: number);
	contents: {[id:string]:IContent};
}