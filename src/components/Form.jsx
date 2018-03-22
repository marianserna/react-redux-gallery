import React from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../actions';

class Form extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const term = this.input.value;
    this.props.fetchImages(term);
  };

  render() {
    return (
      <form className="form" onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          ref={input => (this.input = input)}
          defaultValue="cat"
        />
        <button>SEARCH</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: term => {
      dispatch(fetchImages(term));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
