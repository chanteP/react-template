import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import './Home.css';

class Home extends React.PureComponent {
  handleClick = () => {
    this.props.dispatch(push('/another'));
  };

  render() {
    const { version } = this.props;
    return (
        <div className="container">
          <h1>React template project</h1>
          <h3>Version:{version}</h3>
          <button onClick={this.handleClick}>Another Page</button>
        </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({
  version: global.version,
});

export default connect(mapStateToProps)(Home);
