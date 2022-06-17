import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "./App.css";
class AddBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      genre: "",

      formErrors: {
        titleErr: "",
        authorErr: "",
        genreErr: "Please select a genre",
      },
      fieldValidity: {
        title: false,
        author: false,
        genre: false,
      },
      formValid: false,
      successMessage: "",
    };
    this.validateTitle = (e) => {
      const name = e.target.value;
      var formErrors = this.state.formErrors;
      var fieldValidity = this.state.fieldValidity;
      this.setState({ title: e.target.value });
      if (name.length < 4) {
        formErrors.titleErr = "Name must contain at least 4 characters";
        fieldValidity.title = false;
      } else {
        formErrors.titleErr = "";
        fieldValidity.title = true;
      }
      this.setState({ fieldValidity: fieldValidity });
      this.setState({
        formValid:
          fieldValidity.title && fieldValidity.author && fieldValidity.genre,
      });
    };
    this.validateAuthor = (e) => {
      const name = e.target.value;
      var formErrors = this.state.formErrors;
      var fieldValidity = this.state.fieldValidity;
      this.setState({ author: e.target.value });
      if (name.length < 3) {
        formErrors.authorErr = "Name must contain at least 3 characters";
        fieldValidity.author = false;
      } else {
        formErrors.authorErr = "";
        fieldValidity.author = true;
      }
      this.setState({ fieldValidity: fieldValidity });
      this.setState({
        formValid:
          fieldValidity.title && fieldValidity.author && fieldValidity.genre,
      });
    };

    this.validateGenre = (e) => {
      const name = e.target.value;
      var formErrors = this.state.formErrors;
      var fieldValidity = this.state.fieldValidity;
      this.setState({ author: e.target.value });
      if (name !== e.target[0].value) {
        formErrors.genreErr = "";
        fieldValidity.genre = true;
      } else {
        formErrors.genreErr = "Please select a genre";
        fieldValidity.genre = false;
      }
      this.setState({ fieldValidity: fieldValidity });
      this.setState({
        formValid:
          fieldValidity.title && fieldValidity.author && fieldValidity.genre,
      });
    };

    this.validateSalary = (e) => {
      let salary = e.target.value;
      this.setState({ salary: salary });
    };

    this.add = (e) => {
      e.preventDefault();
      if (this.state.formValid) {
        var formJSON = {
          title: this.state.title,
          author: this.state.author,
          genre: this.state.genre,
        };
        console.log(JSON.stringify(formJSON));
        this.setState({ successMessage: JSON.stringify(formJSON) });
      }
    };
  }

  render() {
    return (
      <div style={{ width: 500, margin: "0px auto" }}>
        <h3 className="text-center">Add a Book</h3>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" onChange={this.validateTitle} />
          </div>
          <span className="text-danger">{this.state.formErrors.titleErr}</span>
          <div className="form-group">
            <label>Author:</label>
            <input className="form-control" onChange={this.validateAuthor} />
          </div>
          <span className="text-danger">{this.state.formErrors.authorErr}</span>
          <div className="form-group">
            <label>Genre:</label>
            <select className="form-control" onChange={this.validateGenre}>
              <option>--Select--</option>
              <option value="Fiction">Fiction</option>
              <option value="NoFiction">NoFiction</option>
              <option value="Adventure">Adventure</option>
              <option value="Science">Science</option>
            </select>
          </div>
          <div>
            <span className="text-danger">
              {this.state.formErrors.genreErr}
            </span>
          </div>

          <button
            type="button"
            disabled={!this.state.formValid}
            className="btn btn-success mt-3"
            onClick={this.add}
          >
            Add Book
          </button>
          <br />
          <p>{this.state.successMessage}</p>
        </form>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddBook />);
