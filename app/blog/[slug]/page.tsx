import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import SiteLayout from "@/components/layouts/sitelayout";

const blogContent = {
  "java-streams-functional-programming": {
    title: "Tìm hiểu Java Streams và Lập trình Hàm",
    author: "Lê Văn Cương",
    date: "2024-01-15",
    readTime: "8 phút đọc",
    category: "Java",
    content: `
      <h2>Giới thiệu về Java Streams</h2>
      <p>Java Streams, được giới thiệu trong Java 8, đã cách mạng hóa cách chúng ta xử lý tập hợp dữ liệu. Chúng cung cấp một cách tiếp cận hàm để làm việc với chuỗi các phần tử, giúp viết mã ngắn gọn và dễ đọc hơn.</p>
      
      <h2>Streams là gì?</h2>
      <p>Một Stream là một chuỗi các phần tử hỗ trợ các thao tác tổng hợp tuần tự và song song. Khác với Collection, Stream không lưu trữ dữ liệu; thay vào đó, nó tính toán dữ liệu theo yêu cầu.</p>
      
      <h3>Đặc điểm chính:</h3>
      <ul>
        <li><strong>Lazy Evaluation:</strong> Các thao tác không được thực hiện cho đến khi một thao tác kết thúc được gọi</li>
        <li><strong>Functional Style:</strong> Stream hỗ trợ các mẫu lập trình hàm trong Java</li>
        <li><strong>Parallelizable:</strong> Stream dễ dàng được song song hóa để cải thiện hiệu suất</li>
        <li><strong>Immutable:</strong> Stream không sửa đổi nguồn dữ liệu gốc</li>
      </ul>
      
      <h2>Các thao tác Stream phổ biến</h2>
      <p>Hãy cùng khám phá các thao tác Stream được sử dụng nhiều nhất:</p>
      
      <h3>1. Thao tác Map</h3>
      <p>Thao tác map biến đổi từng phần tử trong stream bằng một hàm được cung cấp.</p>
      <pre><code>List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5);
List&lt;Integer&gt; squared = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());</code></pre>
      
      <h3>2. Thao tác Filter</h3>
      <p>Filter loại bỏ các phần tử không khớp với một vị từ (predicate).</p>
      <pre><code>List&lt;Integer&gt; evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());</code></pre>
      
      <h3>3. Thao tác Reduce</h3>
      <p>Reduce kết hợp tất cả phần tử thành một giá trị duy nhất.</p>
      <pre><code>int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);</code></pre>
      
      <h2>Thực tiễn tốt nhất</h2>
      <ul>
        <li>Sử dụng Stream cho các biến đổi dữ liệu phức tạp</li>
        <li>Tránh dùng Stream cho các vòng lặp đơn giản</li>
        <li>Cẩn thận với tác dụng phụ trong các thao tác Stream</li>
        <li>Sử dụng Stream song song một cách có chừng mực</li>
      </ul>
      
      <h2>Kết luận</h2>
      <p>Java Streams cung cấp một cách mạnh mẽ và thanh lịch để xử lý dữ liệu. Bằng cách làm chủ Stream và các khái niệm lập trình hàm, bạn có thể viết mã Java dễ bảo trì và hiệu quả hơn.</p>
    `,
  },
  "javascript-async-await": {
    title: "Làm chủ Async/Await trong JavaScript: Từ Callback đến Promise",
    author: "Lê Văn Cương",
    date: "2024-01-10",
    readTime: "10 phút đọc",
    category: "JavaScript",
    content: `
      <h2>Sự tiến hóa của JavaScript bất đồng bộ</h2>
      <p>Cách JavaScript xử lý các thao tác bất đồng bộ đã thay đổi đáng kể. Việc hiểu rõ sự tiến hóa này giúp chúng ta trân trọng cú pháp async/await hiện đại và sử dụng nó hiệu quả.</p>
      
      <h2>Callback: Khởi đầu</h2>
      <p>Callback là cách ban đầu để xử lý thao tác bất đồng bộ trong JavaScript. Tuy nhiên, chúng dẫn đến "địa ngục callback" khi xử lý nhiều thao tác lồng nhau.</p>
      <pre><code>function fetchData(callback) {
  setTimeout(() => {
    callback('Dữ liệu đã tải');
  }, 1000);
}</code></pre>
      
      <h2>Promise: Một cách tốt hơn</h2>
      <p>Promise cung cấp cách xử lý bất đồng bộ sạch hơn với khả năng xử lý lỗi tốt hơn.</p>
      <pre><code>function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Dữ liệu đã tải');
    }, 1000);
  });
}</code></pre>
      
      <h2>Async/Await: Tiêu chuẩn hiện đại</h2>
      <p>Cú pháp async/await khiến mã bất đồng bộ trông và hoạt động giống như mã đồng bộ, giúp dễ đọc và hiểu hơn.</p>
      <pre><code>async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error('Lỗi:', error);
  }
}</code></pre>
      
      <h2>Xử lý lỗi</h2>
      <p>Xử lý lỗi đúng cách là rất quan trọng trong mã bất đồng bộ. Async/await làm điều này trở nên đơn giản với khối try/catch.</p>
      
      <h2>Thực tiễn tốt nhất</h2>
      <ul>
        <li>Luôn dùng try/catch để xử lý lỗi</li>
        <li>Tránh trộn lẫn callback và promise</li>
        <li>Sử dụng Promise.all() cho các thao tác song song</li>
        <li>Chú ý đến hiệu suất</li>
      </ul>
      
      <h2>Kết luận</h2>
      <p>Async/await đã trở thành tiêu chuẩn để xử lý thao tác bất đồng bộ trong JavaScript. Làm chủ nó là điều cần thiết cho phát triển web hiện đại.</p>
    `,
  },
  "spring-boot-microservices": {
    title: "Xây dựng Microservices với Spring Boot: Hướng dẫn Toàn diện",
    author: "Lê Văn Cương",
    date: "2024-01-05",
    readTime: "12 phút đọc",
    category: "Java",
    content: `
      <h2>Giới thiệu về Microservices</h2>
      <p>Kiến trúc microservices chia nhỏ ứng dụng thành các dịch vụ độc lập, giao tiếp với nhau. Spring Boot là một framework tuyệt vời để xây dựng microservices.</p>
      
      <h2>Tại sao chọn Microservices?</h2>
      <ul>
        <li><strong>Khả năng mở rộng:</strong> Mở rộng từng dịch vụ theo nhu cầu</li>
        <li><strong>Linh hoạt:</strong> Sử dụng công nghệ khác nhau cho từng dịch vụ</li>
        <li><strong>Độ tin cậy:</strong> Lỗi ở một dịch vụ không làm sập toàn hệ thống</li>
        <li><strong>Triển khai:</strong> Triển khai dịch vụ độc lập</li>
      </ul>
      
      <h2>Những điều cơ bản của Spring Boot</h2>
      <p>Spring Boot đơn giản hóa việc phát triển microservices với cấu hình tự động và máy chủ nhúng.</p>
      
      <h3>Tạo một dịch vụ đơn giản</h3>
      <pre><code>@SpringBootApplication
@RestController
public class UserService {
  @GetMapping("/users/{id}")
  public User getUser(@PathVariable Long id) {
    return new User(id, "Nguyễn Văn A");
  }
}</code></pre>
      
      <h2>Giao tiếp giữa các dịch vụ</h2>
      <p>Các microservices cần giao tiếp với nhau. Các mẫu phổ biến bao gồm REST API và hàng đợi tin nhắn.</p>
      
      <h2>Quản lý dữ liệu</h2>
      <p>Mỗi microservice nên có cơ sở dữ liệu riêng để duy trì tính độc lập và tránh kết nối chặt chẽ.</p>
      
      <h2>Những lưu ý khi triển khai</h2>
      <ul>
        <li>Sử dụng Docker để container hóa</li>
        <li>Triển khai kiểm tra sức khỏe (health checks)</li>
        <li>Sử dụng service discovery</li>
        <li>Triển khai circuit breaker</li>
      </ul>
      
      <h2>Kết luận</h2>
      <p>Spring Boot cung cấp đầy đủ công cụ để xây dựng microservices mạnh mẽ. Với kiến trúc đúng đắn và thực tiễn tốt, bạn có thể tạo ra hệ thống có khả năng mở rộng và dễ bảo trì.</p>
    `,
  },
};

export async function generateStaticParams() {
  const posts = [
    {
      slug: "java-streams-functional-programming",
    },
    {
      slug: "javascript-async-await",
    },
    {
      slug: "spring-boot-microservices",
    },
  ];

  return posts.map((post) => ({
    slug: post.slug, // Assuming each post object has a 'slug' property
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = blogContent[slug as keyof typeof blogContent];
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Portfolio
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/blog">Trở về</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <SiteLayout>
      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-slate-300 hover:text-black"
        >
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Trở về
          </Link>
        </Button>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("vi-VI", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <div
            className="text-slate-300 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/blog">Trở lại Blog công nghệ</Link>
          </Button>
        </div>
      </article>
    </SiteLayout>
  );
}
