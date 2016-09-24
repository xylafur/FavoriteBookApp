//class that displays the add favorite book text/ form
var TextCreator = React.createClass({
  updateList: function(){
    this.props.addBook( this.refs.titleValue.value, this.refs.authorValue.value);
  },
  getInitialState: function(){
      return {value: "Enter an author!"};
  },
  handleChange: function(event){
    this.setState({value: event.target.value});
  },
  clearField: function(event){
      this.setState({value: "" });
  },
  render: function(){
    return (<div>
              <h2>
                Add a favorite book.
              </h2>
              <form id="form1" >

              <input type = "text" ref = "titleValue" value = {this.state.value}
              onChange ={this.handleChange} onClick = {this.clearField}/><br/>

              <input ref = "authorValue" type = "text" value = {this.state.value}
              onChange ={this.handleChange} onClick = {this.clearField}/><br/>


                <button onClick = {this.updateList}>
                  Post your book!
                </button>

              </form>
            </div>);
  }
});

//Each individual book object
var Book = React.createClass({
 getInitialState: function(){
   return{
     title: "Book title",
     author: "Book Author"
   };
 },
 changeAuthor: function(auth){
   this.setState({author: auth}) ;
 },
 changeTitle: function(tit){
   this.setState({title: tit});
 },
 render: function(){
   return (<div>
             <h3>{this.props.bookName}</h3>
             <p>{this.props.authorName}</p>
           </div>);
 }
});


var BookList = React.createClass({

 getInitialState: function(){
   return{
     books: [
       {title: "Dark Tower", author: "Stephen King"},
       {title: "LOTR", author: "Tolkien"}
     ]
   };
 },
 addBook: function(bookTitle, bookAuthor){
    var arr = this.state.books;
    arr.push( {title: bookTitle, author: bookAuthor});
    this.setState({books: arr});
 },
 render: function(){
   return(
     <div className="favBooks">
     <TextCreator addBook = {this.addBook}/>
     {
        this.state.books.map(
            function(element, i){
                return (<Book bookName= {element.title}  authorName={element.author}></Book>);
            })
      }
     </div>
   );
 }

});


ReactDOM.render(
  (<div>
    <BookList/>
  </div>)
  , document.getElementById('display'));
