import React, { Component } from "react";
import PropTypes from "prop-types";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure, Highlight } from "react-instantsearch-dom";
import Autocomplete from "./autoSearch";

// const VirtalSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
  "6FDIKBQUQF",
  "1344e7cfbdc66ff6ff766850de182ed3"
);

class Search extends Component {
  state = {
    query: ""
  };

  onSuggestionSelected = (_, { suggestion }) => {
    console.log("onSuggestionSelected:", suggestion);
    this.setState({
      query: suggestion.frontmatter.title
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: ""
    });
  };

  render() {
    // const { query } = this.state;

    return (
      <div>
        <InstantSearch indexName="younlab-query" searchClient={searchClient}>
          <Configure hitsPerPage={5} />
          <Autocomplete
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionCleared={this.onSuggestionCleared}
          />
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <Highlight attribute="frontmatter.title" hit={props.hit} />
      {/* <span>{props.hit.frontmatter.title}</span> */}
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};

export default Search;
