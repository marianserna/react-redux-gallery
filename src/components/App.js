import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../actions';

import Form from './Form';
import Image from './Image';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchImages('cat');
  }

  render() {
    return (
      <Fragment>
        <Form />
        <div className="images-container">
          {this.props.images.map(image => {
            return <Image image={image} key={image.id} />;
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: term => {
      dispatch(fetchImages(term));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
