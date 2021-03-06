import React from "react";
import Select from "react-select";
import options from "../../data/pokemon.json";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.handleChange(selectedOption.label);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        name="search"
        className="m-auto col"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default SearchInput;
