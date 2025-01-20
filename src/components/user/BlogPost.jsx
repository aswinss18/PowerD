const BlogPost = ({ title, date, excerpt, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <p className="text-lg text-gray-700 mb-4">{excerpt}</p>
      <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">
        Read more...
      </a>
    </div>
  </div>
);

export default BlogPost;
