import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import SearchBar from "./searchBar";
import { connect } from "react-redux";
import * as actions from "../../actions";

import ResultsVenues from "./resultsVenues";
import PopularVenues from "./popularVenues";

class Find extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchSubmit(query) {
    this.props.fetchVenuesWithQuery(query);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="find">
        <SearchBar onSubmit={query => this.handleSearchSubmit(query)} />
        {this.props.searchActive ? <ResultsVenues /> : <PopularVenues />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultsVenues: state.venues.resultsVenues,
    searchActive: state.venues.searchActive
  };
}

export default connect(
  mapStateToProps,
  actions
)(Find);
