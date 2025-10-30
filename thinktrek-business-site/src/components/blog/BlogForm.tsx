import React, { useState, useEffect } from "react";
import type { Blog } from "../../store/slices/blogSlice";
import ImageUpload from "../imageUpload/ImageUpload";

interface Props {
  onSubmit: (data: { title: string; content: string; image_url?: string }) => void;
  initial?: Partial<Blog>;
  submitLabel?: string;
}

export default function BlogForm({ onSubmit, initial, submitLabel = "Save" }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [imageUrl, setImageUrl] = useState(initial?.image_url ?? "");
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  useEffect(() => {
    setTitle(initial?.title ?? "");
    setContent(initial?.content ?? "");
    setImageUrl(initial?.image_url ?? "");
    setErrors({});
  }, [initial]);

  const validateForm = () => {
    const newErrors: { title?: string; content?: string } = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!content.trim()) newErrors.content = "Content is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit({ title, content, image_url: imageUrl });
    setTitle("");
    setContent("");
    setImageUrl("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* ✅ ADD IMAGE UPLOAD */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Featured Image (Optional)
        </label>
        <ImageUpload
          currentImage={imageUrl}
          onImageUploaded={setImageUrl}
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          placeholder="Write your blog content here..."
          className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
            errors.content ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}