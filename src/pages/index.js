import React from 'react'
import HeaderBar from '../components/header-bar'
import { connect } from 'react-redux'
import { List, ListItem } from 't63'
import { map } from 'ramda'
const Home = props => {
  return (
    <section>
      <HeaderBar navRight="/search" iconRight="ion-search" title="Top Flix" />
      <List>
        {map(
          movie => <ListItem key={movie.id}>{movie.title}</ListItem>,
          props.movies
        )}
      </List>
    </section>
  )
}

const connector = connect(mapStateToProps)
function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

export default connector(Home)
