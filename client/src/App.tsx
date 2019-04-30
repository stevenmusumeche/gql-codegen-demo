import React from "react";
import "./App.css";
import {
  GetBookComponent,
  GetBookQuery,
  BookFieldsFragment,
  GetBooksComponent,
  GetAuthorsComponent,
  AuthorsFieldsFragment
} from "./generated/graphql";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>get book query</h1>
      <GetBookComponent variables={{ id: "13" }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error...</div>;
          if (!data || !data.getBook) return <div>no data</div>;

          return renderBook(data.getBook);
        }}
      </GetBookComponent>
      <hr />
      <h1>get books query</h1>
      <GetBooksComponent>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error...</div>;
          if (!data || !data.getBooks) return <div>no data</div>;

          return data.getBooks.map(renderBook);
        }}
      </GetBooksComponent>
      <hr />
      <h1>get authors query</h1>
      <GetAuthorsComponent>
        {({ loading, error, data }) => {
          if (loading) return <div>loading...</div>;
          if (error) return <div>error...</div>;
          if (!data || !data.getAuthors) return <div>no data</div>;

          return data.getAuthors.map(renderAuthor);
        }}
      </GetAuthorsComponent>
    </div>
  );
};

export default App;

const renderBook = (book: BookFieldsFragment) => {
  const categories = book.categories.map(category => category.name);
  return (
    <div key={book.id} style={{ marginBottom: "1em" }}>
      <strong>{book.title}</strong> by {book.author.firstName}{" "}
      {book.author.lastName}
      <div>ISBN: {book.isbn}</div>
      <div>Categories: {categories.join(", ")}</div>
    </div>
  );
};

const renderAuthor = (author: AuthorsFieldsFragment) => {
  return (
    <div key={author.id} style={{ marginBottom: "1em" }}>
      <div>
        <strong>
          {author.firstName} {author.firstName}
        </strong>
      </div>
      <ul>
        {author.books.map(book => (
          <li>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};
