import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NotFound.styles';

class NotFound extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('NotFound will mount');
  }

  componentDidMount = () => {
    console.log('NotFound mounted');
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NotFound will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NotFound did update');
  }

  componentWillUnmount = () => {
    console.log('NotFound will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NotFoundWrapper">
        Page not found
      </div>
    );
  }
}

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
