// a pane can either have some content, or nested panes
interface IPane {
	// a function to call when the size of a super-pane changes
	props: IPaneProps;
	state: IPaneState;
	render(): JSX.Element;
}

interface IPaneProps {
	width: number;
	height: number;
	x_offset: number;
	y_offset: number;
}

interface IPaneState {}

interface IPaneModel {}

// a content pane has no sub-splinters
interface IContentProps extends IPaneProps {
	onSplit: (string, boolean) => void;
	model: IContentModel;
}

interface IContentModel extends IPaneModel {
	id: string;
	bg_color: string;
}

// The splinter interface
interface ISplinterProps extends IPaneProps {
	model: ISplinterModel;
	horizontal: boolean;
}

interface ISplinterModel extends IPaneModel {
	panes: IPaneModel[];
	split: (string, boolean) => void
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
	splinter: ISplinterModel;
}