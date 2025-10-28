import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    // YENİ EKLENEN B2B PROJESİ (En üstte)
    {
      name: "YDL Yedek Parça - B2B Bayi Portalı",
      description: "Bayiler arası yedek parça satışını ve envanter yönetimini optimize eden gelişmiş B2B portalı. Stok takibi, hızlı sipariş oluşturma, rol tabanlı yetkilendirme ve detaylı bayi yönetimi paneli içerir.",
      demo: "https://ydlyedekparca.com.tr", 
      tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      color: "from-orange-500/10 to-orange-600/10" 
    },
    // YENİ KELİME OYUNU PROJESİ (İkinci sırada)
    {
      name: "Kelime Tahmin Oyunu",
      description: "Bu, harfleri tahmin ederek veya tüm kelimeyi tahmin ederek gizli kelimeyi bulmaya çalıştığınız basit bir kelime bulma oyunudur. Klasik adam asmaca (Hangman) mantığıyla çalışır.",
      github: "https://github.com/ibrahimglmz/kelimeoyunu",
      demo: "https://kelimeoyunu-inky.vercel.app/", 
      tech: ["React.js", "JavaScript", "HTML", "CSS", "Vercel"],
      color: "from-fuchsia-500/10 to-fuchsia-600/10" // Yeni bir renk atandı
    },
    // VAR OLAN DİĞER PROJELER
    {
      name: "Galeri İstanbul - Rent a Car & Araba Alım Satım",
      description: "Lüks ve premium araçların alım-satımı ve kiralanması için modern, kullanıcı dostu bir web platformu. Araç galerisi, detaylı ilanlar, iletişim ve hızlı erişim menüleriyle İstanbul’un en prestijli otomotiv galerisi deneyimi sunar.",
      demo: "https://rentacar-theta.vercel.app",
      tech: ["React.js", "Tailwind CSS", "Vercel"],
      color: "from-pink-500/10 to-pink-600/10"
    },
    {
      name: "Kişisel Kurumsal Web Sitesi",
      description: "Modern ve profesyonel bir kişisel kurumsal web sitesi. Animasyonlu arayüz, proje portföyü, deneyim ve yetenekler bölümü, iletişim formu ve responsive tasarım özellikleri içerir.",
      demo: "https://reactiva-three.vercel.app",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Email.js", "Cloudflare", "Vercel"],
      color: "from-cyan-500/10 to-cyan-600/10"
    },
    {
      name: "Zaman Bilimi",
      description: "Tarih ve coğrafya verilerini interaktif harita ve zaman çizelgesi ile birleştiren kapsamlı bir web uygulaması. Leaflet harita entegrasyonu, çoklu dil desteği, rol tabanlı yetkilendirme, analitik panel ve gelişmiş veri yönetimi özellikleri içerir.",
      demo: "https://zamanbilimi.com/login",
      tech: ["Next.js", "MongoDB", "Leaflet", "i18n", "Tailwind CSS", "Node.js"],
      color: "from-emerald-500/10 to-emerald-600/10"
    },
    {
      name: "Elektrik Mühendislik Firması Web Sitesi",
      description: "Profesyonel bir elektrik mühendislik firması için geliştirilmiş web sitesi. Hizmetler, projeler, referanslar ve iletişim bilgileri gibi özellikleri içeren modern ve kullanıcı dostu bir arayüz sunar.",
      demo: "http://adaelektrikist.com",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Email.js", "Cloudflare", "Hostinger"],
      color: "from-yellow-500/10 to-yellow-600/10"
    },
    {
      name: "Emlak Danışmanlık Web Sitesi",
      description: "Next.js ve Node.js kullanılarak geliştirilmiş profesyonel emlak danışmanlık web sitesi. Sanayi bölgeleri için özel ilan yönetimi, iletişim formu, admin paneli ve responsive tasarım özellikleri içerir.",
      demo: "https://salimgulmez.com",
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Email.js", "Cloudflare", "Vercel"],
      color: "from-amber-500/10 to-amber-600/10"
    },
    {
      name: "Diş Hekimliği Klinik Web Sayfası",
      description: "Modern ve profesyonel bir diş hekimliği kliniği için geliştirilmiş web sayfası. Randevu sistemi, hizmetler, doktor profilleri ve iletişim bilgileri gibi özellikleri içeren kullanıcı dostu bir arayüz sunar.",
      github: "https://github.com/ibrahimglmz/klinik",
      demo: "https://klinik-azure.vercel.app",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Email.js", "Cloudflare", "Vercel"],
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: "Pomodoro Timer",
      description: "Assembly dilinde geliştirilmiş bir pomodoro zamanlayıcı uygulaması. Kullanıcılar için verimli çalışma ve mola zamanlarını yönetme imkanı sunar.",
      github: "https://github.com/ibrahimglmz/Pomodoro-main",
      tech: ["Assembly", "x86", "MASM"],
      color: "from-purple-500/10 to-purple-600/10"
    },
    {
      name: "File Password Manager",
      description: "Python ile geliştirilmiş dosya şifreleme ve yönetim uygulaması. Kullanıcıların dosyalarını güvenli bir şekilde şifreleyip yönetmelerini sağlar.",
      github: "https://github.com/ibrahimglmz/file_password_app_python",
      tech: ["Python", "Tkinter", "Cryptography"],
      color: "from-green-500/10 to-green-600/10"
    },
    {
      name: "Medical Quiz App",
      description: "Tıp öğrencileri için geliştirilmiş interaktif quiz uygulaması. Kullanıcıların tıbbi bilgilerini test etmelerini ve geliştirmelerini sağlar.",
      github: "https://github.com/ibrahimglmz/medical-quiz-app",
      demo: "https://ibrahimglmz.github.io/medical-quiz-app/",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "from-red-500/10 to-red-600/10"
    },
    {
      name: "Chat Application",
      description: "React ve Socket.IO kullanılarak geliştirilmiş gerçek zamanlı sohbet uygulaması. İki kullanıcı arasında anlık mesajlaşma, mesaj geçmişi görüntüleme ve zaman damgalı mesajlar gibi özellikler sunar. Modern ve kullanıcı dostu arayüzü ile Tailwind CSS ile stillendirilmiştir.",
      github: "https://github.com/ibrahimglmz/chat-app",
      tech: ["React.js", "Socket.IO", "Node.js", "Express.js", "Tailwind CSS", "JSON"],
      color: "from-indigo-500/10 to-indigo-600/10"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="section bg-gradient-to-b from-background to-background-dark py-16 sm:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title heading-accent">Projelerim</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Geliştirdiğim bazı projeler ve çalışmalarım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={`bg-gradient-to-br ${project.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 overflow-x-hidden">
                <h3 className="text-2xl font-semibold text-text-primary break-words">{project.name}</h3>
                <div className="flex gap-4 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl text-text-primary hover:bg-white/30 transition-all duration-300"
                      title="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl text-text-primary hover:bg-white/30 transition-all duration-300"
                      title="Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-text-secondary mb-6 break-words">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/60 backdrop-blur text-text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;