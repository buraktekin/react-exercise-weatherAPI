var React = require('react');

var searchBorder = {
  borderRadius: 50,
  border: "2px solid #2EAD5B",
  padding: 10,
  paddingLeft: 20
};
var searchIconBorder = {
  backgroundColor: "#45CA75",
  borderRadius: 50,
  border: "2px solid #2EAD5B",
  width: 46,
  height: 46,
  cursor: "pointer"
}
var inputStyle = {
  backgroundColor: "#46CA75",
  border: "none",
  width: "100%"
};
var searchIcon = {
  fontSize: 14
}
var marginBottom = {
  paddingTop: 10,
  paddingBottom: 10
}

var SearchBox = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
    	this.props.onNewSearch(this.refs.searchInput.value);
      this.refs.searchInput.value = '';
    }
  },

  render: function() {
    return (
      <div className="row" style={marginBottom}>
        <div className="col-xs-12">
          <div className="row">
            <form onSubmit={this.handleSubmit} >
              <div className="col-xs-9">
                <div style={searchBorder}>
                  <input style={inputStyle} ref="searchInput" placeholder="Search..." />
                </div>
              </div>
              <div className="col-xs-3">
                <button style={searchIconBorder} type="btn">
                  <i className="fa fa-search" style={searchIcon}></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchBox;
