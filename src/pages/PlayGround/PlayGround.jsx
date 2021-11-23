import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './PlayGround.styles';

class PlayGround extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('PlayGround will mount');
  }

  componentDidMount = () => {
    console.log('PlayGround mounted');
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('PlayGround will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('PlayGround did update');
  }

  componentWillUnmount = () => {
    console.log('PlayGround will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="PlayGroundWrapper">
        Playground content
      </div>
    );
  }
}

PlayGround.propTypes = {
  // bla: PropTypes.string,
};

PlayGround.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayGround);
