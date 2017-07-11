import { connect } from 'react-redux';
import Gem from './Gem';

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