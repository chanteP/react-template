import React from 'react';
import { connect } from 'react-redux';

import './Example.css';

class Example extends React.PureComponent {
  render() {
    const { version } = this.props;
    return (
        <div className="container">
          <h1>React template project</h1>
          <h3>Version:{version}</h3>
        </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({
  version: global.version,
});

export default connect(mapStateToProps)(Example);
