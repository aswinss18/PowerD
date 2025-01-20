import BlogPost from "./BlogPost";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Top 5 Accessories to Enhance Your Car's Performance",
      date: "January 10, 2025",
      excerpt:
        "Explore the best car accessories that can improve both the performance and aesthetics of your vehicle. From performance chips to high-quality air filters...",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Must-Have Accessories for Your Motorcycle Ride",
      date: "December 25, 2024",
      excerpt:
        "Find out which motorcycle accessories are essential for safety, comfort, and style on your next ride. We’ve compiled a list of the top accessories for bikers...",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title:
        "How to Maintain Your Vehicle’s Interior with the Right Accessories",
      date: "November 15, 2024",
      excerpt:
        "Learn how to keep your car or bike interior in top shape. Discover the best accessories for maintaining cleanliness, comfort, and style inside your vehicle...",
      image: "https://via.placeholder.com/500x300",
    },
  ];
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
