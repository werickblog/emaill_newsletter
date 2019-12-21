import React from "react";
import Quill from "quill"

let quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],

      ["clean"]
    ]
  }
});

class EditoMax extends React.Component {
  componentDidMount() {
    console.log(quill);
  }

  render() {
    return <section></section>
  }
}

export default EditoMax;
