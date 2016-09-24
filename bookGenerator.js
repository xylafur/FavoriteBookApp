//class that displays the add favorite book text/ form

//alert("working");


//Each individual book object
var Book = React.createClass({
getInitialState: function(){
 return{
   title: "Book title",
   author: "Book Author"
 };
},
render: function(){
 return (<div className = "bookObjects">
           <h3>{this.props.bookName}</h3>
           <p>{this.props.authorName}</p>
         </div>);
}
});


var BookList = React.createClass({

getInitialState: function(){
 return{
   books: [], auth : "Enter an author", book: "Enter a book"
 };
},
handleChange: function(event){
  this.setState( {book: event.target.value });
},
addBook: function(){
  var arr = this.state.books;
  arr.push( {title: this.refs.bookName.value, author: this.refs.authorName.value} );
  this.setState( {book: "Enter A Book"});
  this.setState( {books: arr});

},
render: function(){
 return(
   <div className="favBooks">

    <input type="text" ref = "bookName" book = {this.state.book} onChange = {this.handleChange}/><br/>
   <input type="text" ref = "authorName" auth = {this.state.auth} onChange = {this.handleChange}/><br/>
   <button className = "submitButton" onClick = {this.addBook}>Add Favorite Book</button>
   {
      this.state.books.map(
          function(element, i){
            return (<Book key = {i} index = {i} bookName= {element.title}  authorName={element.author}/>);
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
