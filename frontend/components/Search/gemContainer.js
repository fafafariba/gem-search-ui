import { connect } from 'react-redux';
import Gem from './gem';

const mapStateToProps = ({ gem }) => ({
	name: gem.gem.name,
	info: gem.gem.info,
	dependencies: gem.gem.dependencies
});

const mapDispatchToProps = dispatch => ({
	
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gem);