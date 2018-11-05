import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button } from 'antd';

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
          <Button type="primary" onClick={this.handleClick}>Another Page</Button>
        </div>
    );
  }
}

const mapStateToProps = ({ version }) => ({
  version: version.version,
});

export default connect(mapStateToProps)(Home);
