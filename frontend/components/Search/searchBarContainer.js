import { connect } from 'react-redux';
import { queryGem, clearErrors } from '../../actions/gemActions';
import SearchBar from './SearchBar';

const mapStateToProps = ({ gem }) => ({
	errors: gem.errors
});

const mapDispatchToProps = dispatch => ({
	queryGem: query => dispatch(queryGem(query)),
	clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
