import PropTypes from 'prop-types';
import Head from '../components/Head';

export default function Master(props) {
  return (
    <>
      <Head></Head>
      <div className="app">{props.children}</div>
    </>
  );
}

Master.propTypes = {
  children: PropTypes.node
};
