import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa' // İkon kullanımı için

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const firstPart = `İstanbul Kent Üniversitesi Bilgisayar Programcılığı bölümünden mezun bir bilgisayar programcısı olarak, veri işleme ve analiz süreçlerinden, web teknolojilerine kadar geniş bir teknik yetkinliğe sahibim. Python programlama dili ile veri çıkarma, analiz, modelleme ve segmentasyon konularında aktif projeler yürüttüm. Numpy ve Pandas gibi güçlü kütüphaneleri kullanarak veriye dayalı çözümler geliştirmekteyim. Ayrıca, SQL, Docker ve Git gibi teknolojilerle yazılım geliştirme süreçlerini profesyonel bir şekilde yönetebiliyorum.`

  const remainingPart = `
        Medya işleme alanında Mediapipe ve OpenCV teknolojileriyle uygulamalar geliştirdim. HTML, CSS ve React bilgimle kullanıcı dostu arayüzler tasarlayarak tam kapsamlı çözümler sunuyorum. Hem bireysel projelerimde hem de çeşitli staj ve gönüllü çalışmalarımda edindiğim tecrübeler sayesinde yazılım geliştirme süreçlerinde analitik düşünme, problem çözme ve ekip çalışması yeteneklerimi pekiştirdim.

        Freelance yazılım geliştirici olarak sürdürdüğüm çalışmalarımda, modern teknolojilerle müşteri ihtiyaçlarına özel yazılım çözümleri üretiyor, aktif olarak üretkenliği ve yeniliği merkezime alıyorum. Üretken Akademi online staj programı ve New Mind firmasında kazandığım kurumsal deneyimler sayesinde yazılım ve bilgi sistemleri alanlarında pratik bilgi birikimi sağladım. Ayrıca, üniversite hayatım boyunca Google Developer Student Clubs (GDSC) çatısı altında liderlik görevleri üstlenerek teknoloji topluluklarında aktif rol aldım.

        Yönetim bilişim sistemleri, IT veya yazılım departmanlarında edindiğim bilgi ve becerilerle kurumunuza değer katmayı, yenilikçi ve sürdürülebilir çözümler üretmeyi hedefliyorum.`

  return (
    <motion.section 
      id="about"
      // Arka plan tamamen beyaz/açık tonlara sadeleştirildi
      className="section bg-white py-16 sm:py-24 overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Arka plan dekoratif elementleri sadeleştirildi ve light moda uyarlandı */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-3xl"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-secondary/10 blur-3xl"
          style={{ borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            rotate: [360, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="section-title text-center heading-accent mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-900">Hakkımda</span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Ana kart - Light Mode uyumlu */}
          <div className="bg-white p-6 sm:p-10 shadow-2xl border border-gray-200 relative" style={{ borderRadius: '20px' }}>
            
            <div className="relative z-10">
              <motion.p 
                className="text-gray-700 leading-relaxed mb-6 break-words text-base sm:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {firstPart}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-gray-700 leading-relaxed whitespace-pre-line break-words text-base sm:text-lg mt-4">
                  {remainingPart}
                </p>
              </motion.div>

              <motion.button
                className="mt-8 px-6 py-3 w-full sm:w-auto text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/50"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  // Gradient düğme stili
                  background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 100%)', // blue-500 to purple-500
                  borderRadius: '12px',
                  boxShadow: '0 8px 15px rgba(59, 130, 246, 0.3)',
                }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>{isExpanded ? "Daha Az Göster" : "Devamını Oku"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
            </div>
          </div>

          {/* Floating badges - Daha sade ve küçük hale getirildi, mobil ekranda gizlendi */}
          <motion.div
            className="absolute -top-4 right-8 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 text-xs font-medium shadow-lg rounded-full">
              🚀 Aktif Geliştirici
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-8 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-secondary to-pink-500 text-white px-3 py-1.5 text-xs font-medium shadow-lg rounded-full">
              💻 Full Stack
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About