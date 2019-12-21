import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { createNewsletter } from "../state/actions";
import Editor from "../components/EditorView/Editor";

class EditorContainer extends React.Component {
  static propTypes = {
    newsletter: PropTypes.object,
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    newsletter: {},
    isLoading: false
  };

  state = {
    title: "",
    body: ``
  };

  handleChange = html => {
    this.setState({ body: html });
  };

  handleThemeChange = newTheme => {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <section>
          
        <div id="editor"></div>
        <Editor
          handleThemeChange={this.handleThemeChange}
          handleChange={this.handleChange}
          editorHtml={this.state.body}
        />
      </section>
    );
  }
}

const mapStateToProps = ({ global: newsletter, isLoading }) => ({
  newsletter,
  isLoading
});

export default withRouter(
  connect(mapStateToProps, { createNewsletter })(EditorContainer)
);
