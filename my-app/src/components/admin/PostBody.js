"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const PostBody = () => {
  const [content, setContent] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"][{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  // Define custom styles
  const quillStyles = {
    ".ql-editor": {
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      color: "#333",
    },
    // Add more custom styles as needed
  };

  // Apply custom styles to the editor
  //   quillInstance.root.style.cssText = quillStyles[".ql-editor"];

  return (
    <div className="h-screen bg-[#1A3B2F] md:w-[80vw] lg:w-[40vw] px-5">
      <div className="h-full overflow-auto ">
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          theme="snow"
          className="w-full h-[90%] mt-10  text-white"
        />
      </div>
    </div>
  );
}


export default PostBody