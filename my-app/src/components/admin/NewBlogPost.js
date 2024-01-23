"use client";

import { useState } from "react";

const NewBlogPost = () => {
  let initialFormValue = { image: '', title: "", description: "", body: "" };
  const [formData, setFormData] = useState(initialFormValue);
  return (
    <div className="flex flex-col p-2 py-10 w-full">
      <h2 className="text-2xl lg:text-3xl text-center font-semibold">
        Add New Blog Post
      </h2>
      {/* form */}
      <div className="flex flex-col gap-4">
        {/* File selection section */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Required</p>
          <p>Blog Post Header Image</p>
          <input
            type="file"
            value={formData.image}
            onChange={(e) => {
              setFormData({ ...formData, image: e.target.value });
            }}
            required
            className="bg-gray-400 text-white lg:w-2/12"
          />
        </div>
        {/* Post Title */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Required</p>
          <input
            required
            type="text"
            placeholder="Post Title"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
            className="bg-[#1A3B2F] font-semibold p-2 lg:w-4/12 text-white"
          />
        </div>
        {/* Description section */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Optional</p>
          <input
            type="text"
            placeholder="Post Description"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
            className="bg-[#1A3B2F] p-2 lg:w-4/12 text-white"
          />
        </div>
        {/* Post body section */}
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">Required</p>
          <textarea
            required
            placeholder="Post Body"
            value={formData.body}
            onChange={(e) => {
              setFormData({ ...formData, body: e.target.value });
            }}
            className="bg-[#1A3B2F] p-2 lg:w-4/12 text-white min-h-[400px] max-h-[800px] overflow-auto "
          />
        </div>
        <div className="flex flex-wrap gap-3 text-white font-bold text-xl">
          <button className="bg-[#1A3B2F] p-2">Publish</button>
          <button className="bg-[#BD8E25] p-2">Save as Draft</button>
          <button className="border-2 border-[#1A3B2F] text-gray-500 p-2">
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;
