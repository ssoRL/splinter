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
	horizontal: boolean;
}

interface ISplinterModel {
	sub_panes: IPane[];
}

// The component in charge of the whole page
interface ISplinterTop {}

interface ISplinterTopProps {
	model: ISplinterTopModel;
}

interface ISplinterTopState {
	width: number;
	height: number;
}

interface ISplinterTopModel {
	pane: IPane;
}