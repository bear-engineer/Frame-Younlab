import React, { Component } from "react";
import PropTypes from "prop-types";
import { Highlight, connectAutoComplete } from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";
import "../styles/search.scss";

import AniLink from "gatsby-plugin-transition-link/AniLink";
class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
    onSuggestionCleared: PropTypes.func.isRequired
  };

  state = {
    value: this.props.currentRefinement
  };

  onChange = (_, { newValue }) => {
    console.log(newValue);
    if (!newValue) {
      this.props.onSuggestionCleared();
    }

    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.frontmatter.title;
  }

  renderSuggestion(hit) {
    console.log(hit);
    return (
      <div className="search-object">
        <AniLink to={hit.fields.slug} fade duration={0.4}>
          <div className="search-object-title">
            <h4>
              <Highlight
                attribute="frontmatter.title"
                hit={hit}
                tagName="mark"
              />
            </h4>
          </div>
          <div className="search-object-description">
            <Highlight
              attribute="frontmatter.description"
              hit={hit}
              tagName="mark"
            />
          </div>
        </AniLink>
      </div>
    );
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: "Search Documents",
      onChange: this.onChange,
      value
    };

    return (
      <div className="search">
        <AutoSuggest
          suggestions={hits}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default connectAutoComplete(AutoComplete);
