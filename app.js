var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      <GroceryListItem item={'Tomatoes'}/>
      <GroceryListItem item={'Ketchup'}/>
    </ul>
  </div>
);

var Tomatoes = () => (
  <li>Tomatoes</li>
);

var Ketchup = () => (
  <li>Ketchup</li>
);

// var GroceryListItem = (props) => (
//   <li>{props.item}</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseover: false
    };
  }

  onHover() {
    console.log('this worked!');
    this.setState({
      mouseover: !this.state.mouseover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.mouseover ? "bold" : "400"
    };
    return (
      <li style={style} onMouseOut={this.onHover
      .bind(this)} onMouseOver={this.onHover
      .bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));

/*
    <TodoList />
*/