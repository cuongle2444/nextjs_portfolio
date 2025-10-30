import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Award,
  MapPinHouse,
  Phone,
  GraduationCap,
  Notebook,
  Contact,
  TableOfContents,
  PencilLine,
} from "lucide-react";
import SiteLayout from "@/components/layouts/sitelayout";

export default function Home() {
  const studies = [
    {
      school: "HUTECH - Đại học Công nghệ TP.HCM",
      major: "Chuyên ngành: Công Nghệ Thông Tin",
      timeline: "2022 – 2026",
    },
    {
      school: "Cisco Networking Academy",
      major: "Khóa học: CCNA (Routing and Switching)",
      timeline: "2025",
    },
  ];
  const skills = [
    {
      category: "Chuyên môn",
      items: ["Cisco Packet Tracer", "Java", "Python (Scripting)", "C#"],
    },
    {
      category: "Kỹ năng mềm",
      items: [
        "Tư duy logic & Giải quyết vấn đề",
        "Làm việc nhóm (Teamwork)",
        "Python (Scripting)",
        "Tự học và nghiên cứu",
      ],
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Networking Basics",
      issuer: "Tan Dung Vo - Cisco Networking Academy",
      date: "Sep 20, 2025",
      image: "/nextjs_portfolio/images/networking_basics_certificate.png",
      pdfLink: "/nextjs_portfolio/pdf/Networking_Basics_certificate.pdf",
    },
    {
      id: 2,
      title: "JavaScript Essentials 1",
      issuer: "Tan Dung Vo - Cisco Networking Academy",
      date: "Sep 27, 2025",
      image: "/nextjs_portfolio/images/javascript_essentials_1.png",
      pdfLink: "/nextjs_portfolio/pdf/JavaScript_Essentials_1.pdf",
    },
    {
      id: 3,
      title: "JavaScript Essentials 2",
      issuer: "Tan Dung Vo - Cisco Networking Academy",
      date: "Oct 28, 2025",
      image: "/nextjs_portfolio/images/javascript_essentials_2.png",
      pdfLink: "/nextjs_portfolio/pdf/JavaScript_Essentials_2_certificate.pdf",
    },
  ];
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center hero-section">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Lê Văn Cương
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Sinh viên năm 4 ngành <strong>Công nghệ Thông tin</strong> –
              chuyên ngành <strong>An toàn thông tin</strong>
              <br />
              (MSSV: 2280600333)
            </p>
            <p className="text-slate-400 mb-8">
              Em đang từng ngày nỗ lực trau dồi kiến thức và kỹ năng để trở
              thành một lập trình viên An ninh mạng tận tâm, đáng tin cậy. Với
              niềm đam mê công nghệ và hiểu biết về mạng máy tính, mã hóa, bảo
              mật hệ thống, em mong muốn được thử sức trong các dự án thực tế,
              học hỏi kinh nghiệm từ các anh chị đi trước và đóng góp một phần
              nhỏ vào hành trình xây dựng không gian mạng an toàn cho mọi người.
            </p>
            <div className="flex gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Liên hệ với em</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-slate-600 text-white bg-transparent hover:text-black"
              >
                <Link href="/blog">Xem Blog công nghệ</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block p-8 avatar-block">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-slate-700 avatar">
              <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center">
                <img
                  src="/nextjs_portfolio/images/avatar.png"
                  className="w-full h-full object-cover rounded-lg bg-white"
                  alt="Avatar Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          Học vấn
        </h2>
        <div className="mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 shadow-xl border border-blue-800">
            {studies.map((study, index) => (
              <div key={index} className="mb-5">
                <h4 className="text-lg font-semibold text-white">
                  {study.school}
                </h4>
                <p className="text-sm italic text-blue-200">{study.major}</p>
                <p className="text-sm text-gray-300 mt-1">{study.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Notebook className="w-8 h-8 text-blue-400" />
          Kỹ năng
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-slate-700 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                <PencilLine className="text-blue-400" /> {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Award className="w-8 h-8 text-blue-400" />
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="py-0 gap-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-slate-700 overflow-hidden hover:border-blue-500 transition"
            >
              <a
                href={cert.pdfLink}
                target="_blank"
                rel="noopener"
                className="aspect-video bg-slate-700 overflow-hidden pdf-link"
              >
                <img
                  src={cert.image || "/globe.svg"}
                  alt={cert.title}
                  className="w-full h-full object-fill"
                />
              </a>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener"
                    className="pdf-link"
                  >
                    {cert.title}
                  </a>
                </h3>
                <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-blue-400 text-sm font-medium">{cert.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800"
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
          <Contact className="w-8 h-8 text-blue-400" />
          Thông tin liên hệ
        </h2>
        <div className="space-y-4">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
          >
            <Mail className="w-5 h-5" />
            cuongle6364@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
          >
            <Phone className="w-5 h-5" />
            (+84) 377748900
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
          >
            <MapPinHouse className="w-5 h-5" />
            TP. Hồ Chí Minh, Việt Nam
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
          >
            <Github className="w-5 h-5" />
            github.com/LeVanCuong
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
