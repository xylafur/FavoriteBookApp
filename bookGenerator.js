
//creating a book class to store all the created values
function book(title, author){
  this.title = title;
  this.author = author;
}



//used to create the input box for Books/ Authors
var BookText = React.createClass({
    getInitialState: function(){
      return {value: "Enter a book!"};
    },
    handleChange: function(event){
      this.setState({value: event.target.value});
    },
    clearField: function(event){
      this.setState({value: ""});
    },
    render: function(){
      return <input type = "text" value = {this.state.value}
      onChange ={this.handleChange} onClick = {this.clearField}/>
    }
});
var AuthorText = React.createClass({
  getInitialState: function(){
    //if(id === "book")
      return {value: "Enter an author!"};
    //else
    //return {value: "Enter an author!"};
  },
  handleChange: function(event){
    this.setState({value: event.target.value});
  },
  clearField: function(event){
    //if(value === "Enter a book!")
      this.setState({value: "" });
  },
  render: function(){
    return (
      <input type = "text" value = {this.state.value}
      onChange ={this.handleChange} onClick = {this.clearField}/>
    );
  }
});

//class that displays the add favorite book text/ form
var TextCreator = React.createClass({
  newBook: function(){
      alert("functionWorks");
  },
  render: function(){
    return (<div>
              <h1>
                Add a favorite book.
              </h1>
              <form id="form1" action="index.html" >
                <BookText/><br/>
                <AuthorText/><br/>
                <button onClick = "newBook">Post your book!</button>

              </form>
            </div>);
  }
});

/*
var inputDisplay = (<div
  <h1>
    Add a favorite book.
  </h1>
  <form id="form1" action="index.html" >
      Book Title: <input type="text" id = "bookName" value="Enter a Book!">
    <br>
      Author: <input type = "text" id = "authorName" value = "Enter a Author!">
    <br>
      <button id="fuck">Post a book!</button>
  </form>
</div>);

document.getElementById("fuck").onclick = function(){
  if(document.getElementById("bookName").value === "Enter a Book!"
      || document.getElementById("authorName").value === "Enter a Author!"){
        alert("Please enter a book and an author.")
      }
  else{
    bookName = document.getElementById("bookName").value;
    authorName = document.getElementById("authorName").value;
    alert(bookName + " by " + authorName);
  }
};
*/

ReactDOM.render(
  <div>
    <TextCreator/>
  </div>
  , document.getElementById('display'));
