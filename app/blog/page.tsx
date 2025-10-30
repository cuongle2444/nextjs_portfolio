import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import SiteLayout from "@/components/layouts/sitelayout";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Tìm hiểu Java Streams và Lập trình Hàm",
      excerpt:
        "Khám phá cách Java Streams đã cách mạng hóa lập trình hàm trong Java. Tìm hiểu về các thao tác map, filter, reduce và cách chúng giúp mã của bạn ngắn gọn, dễ đọc hơn.",
      author: "Lê Văn Cương",
      date: "2024-01-15",
      category: "Java",
      readTime: "8 phút đọc",
      image: "/nextjs_portfolio/images/java-streams-functional-programming.jpg",
      slug: "java-streams-functional-programming",
    },
    {
      id: 2,
      title: "Làm chủ Async/Await trong JavaScript: Từ Callback đến Promise",
      excerpt:
        "Đi sâu vào lập trình bất đồng bộ trong JavaScript. Hiểu rõ sự tiến hóa từ callback → promise → async/await, cùng các thực tiễn tốt nhất để xử lý thao tác bất đồng bộ trong ứng dụng hiện đại.",
      author: "Lê Văn Cương",
      date: "2024-01-10",
      category: "JavaScript",
      readTime: "10 phút đọc",
      image: "/nextjs_portfolio/images/javascript-async-await-promises.jpg",
      slug: "javascript-async-await",
    },
    {
      id: 3,
      title: "Xây dựng Microservices với Spring Boot: Hướng dẫn Toàn diện",
      excerpt:
        "Học cách thiết kế và xây dựng microservices có khả năng mở rộng bằng Spring Boot. Khám phá các thực tiễn tốt nhất về giao tiếp dịch vụ, quản lý dữ liệu và triển khai trong hệ sinh thái microservices.",
      author: "Lê Văn Cương",
      date: "2024-01-05",
      category: "Java",
      readTime: "12 phút đọc",
      image:
        "/nextjs_portfolio/images/spring-boot-microservices-architecture.jpg",
      slug: "spring-boot-microservices",
    },
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blog Công Nghệ
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Thông tin chuyên sâu, hướng dẫn chi tiết và phân tích sâu về Java,
            JavaScript cùng các công nghệ phát triển web hiện đại.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="py-0 bg-slate-800/50 border-slate-700 overflow-hidden mb-16 hover:border-blue-500 transition">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 overflow-hidden">
              <img
                src={blogPosts[0].image || "/globe.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  {blogPosts[0].category}
                </span>
                <span className="text-slate-400 text-sm">
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-300 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 mb-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString("vi-VI", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <Button asChild className="w-fit bg-blue-600 hover:bg-blue-700">
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  Đọc bài viết <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card
              key={post.id}
              className="py-0 bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-500 transition flex flex-col"
            >
              <div className="aspect-video bg-slate-700 overflow-hidden">
                <img
                  src={post.image || "/globe.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-300 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center gap-4 mb-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("vi-VI", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-600 text-white hover:bg-slate-700 bg-transparent"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Đọc thêm <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
