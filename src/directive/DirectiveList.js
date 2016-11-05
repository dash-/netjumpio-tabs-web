import { connect } from 'react-redux';
import DirectiveListView from './DirectiveListView';


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}


const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(DirectiveListView);

