import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

class Movie extends Component {
 constructor(props) {
   super(props);
   this.state = {

   };
 }

 componentDidMount() {
  setTimeout(() => this.props.fetchMovie(this.props.params.id), 1000);
 }

 render() {
  const { movies, params } = this.props;
  const movie = (movies || [])
    .find(m => Number(m.movieid) === Number(params.id));

   return (
     <pre>
      {JSON.stringify(movie, null, 2)}
     </pre>
   );
 }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: id => dispatch(fetchMovie(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
