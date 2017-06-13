import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovie } from "../actions/movie";
import withI18n from '../components/Ui/withI18n';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movieById[this.props.params.id],
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <pre>
        {JSON.stringify(movie, null, 2)}
      </pre>
    );
  }
}

const mapStateToProps = state => ({
  movieById: state.movies.movieById,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(Movie));
