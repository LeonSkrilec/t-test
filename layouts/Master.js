import PropTypes from 'prop-types';
import Meta from '../components/Meta';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Master(props) {
  return (
    <>
      <CssBaseline />
      <Meta></Meta>
      <div className="app">{props.children}</div>
    </>
  );
}

Master.propTypes = {
  children: PropTypes.node
};
