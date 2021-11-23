import * as React from "react";
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { BasicPageProps } from '../../model/BasicPage.props';
import './Home.styles.scss';
import { BasicPageStates } from '../../model/BasicPage.states';

class Home extends PureComponent<BasicPageProps, BasicPageStates> {
  catMatchImage = require('../../assets/img/cat_match.jpeg');

  constructor(props: BasicPageProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillUpdate = (nextProps: BasicPageProps, nextState: BasicPageProps) => {
    console.log('Home will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  handlerSubmit = (e: React.FormEvent) => {
    return;
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <>
        <h1 className="mx-auto text-center mb-3">
          Have XO match with Linnil AI!!
        </h1>
        <div className="mx-auto img-cat-match">
          <img src={String(this.catMatchImage.default) } alt="XO match" className="w-100" />
        </div>
        <Form onSubmit={this.handlerSubmit }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

// Home.propTypes = {
//   // bla: PropTypes.string,
// };

// Home.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = (state: {}) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch: {}) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect<{}, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
