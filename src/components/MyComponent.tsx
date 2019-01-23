import '../styles/MyComponent.css';

import * as React from 'react';
import { connect } from 'react-redux';
import { getFoobar } from 'src/state/reducers/my-component.reducer';
import { getMyComponentState, IRootState } from 'src/state/root.reducer';

interface IStateProps {
	foobar: string;
}

const mapStateToProps = (state: IRootState) => {
	return {
		foobar: getFoobar(getMyComponentState(state)),
	}
}

const xMyComponent = (props: IStateProps) => {
	return (
		<div className='my-component'>
			{props.foobar}
		</div>
	);
}

export const MyComponent = connect<IStateProps, null>(mapStateToProps, null)(xMyComponent);