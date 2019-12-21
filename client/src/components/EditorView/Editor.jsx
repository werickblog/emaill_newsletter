import React from "react";
import PropTypes from "prop-types";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageDrop } from "quill-image-drop-module";
// import { ImageResize } from "quill-image-resize-module";

Quill.register("modules/imageDrop", ImageDrop);
// Quill.register("modules/imageResize", ImageResize);

class Editor extends React.Component {
  state = { theme: "snow" };

  render() {
    const {
      editorHtml,
      handleChange,
      handleThemeChange,
      placeholder
    } = this.props;
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={handleChange}
          value={editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".editor"}
          placeholder={placeholder}
        />
        {/* <div className="themeSwitcher">
          <label>Theme </label>
          <select onChange={e => handleThemeChange(e.target.value)}>
            <option value="snow">Snow</option>
            <option value="bubble">Bubble</option>
            <option value="core">Core</option>
          </select>
        </div> */}
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [
      { header: "1" },
      { header: "2" },
      { header: "3" },
      { header: "4" },
      { header: "5" },
      { font: [] }
    ],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "direction"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    [
      {
        align: "center"
      },
      {
        align: "justify"
      },
      {
        align: "right"
      }
    ],
    ["link", "video"],
    ["clean"],
    ["image"]
  ],
  imageDrop: true,
//   imageResize: {
//     displaySize: true
//   },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "align",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

Editor.propTypes = {
  placeholder: PropTypes.string
};

export default Editor;
