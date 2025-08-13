import { motion } from 'framer-motion'
import { useState } from 'react'

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
      className="section bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl"
          style={{
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 blur-3xl"
          style={{
            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            borderRadius: [
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%'
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="section-title text-center heading-accent break-words"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hakkımda
          </span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Ana kart */}
          <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 shadow-2xl border border-white/50 relative overflow-hidden" style={{ borderRadius: '24px' }}>
            {/* Kart arka plan dekorasyonu */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 opacity-80" style={{ borderRadius: '24px' }} />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 -translate-y-16 translate-x-16 blur-2xl" style={{ borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' }} />
            
            <div className="relative z-10">
              <motion.p 
                className="text-text-secondary leading-relaxed mb-6 break-words text-lg"
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
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-text-secondary leading-relaxed whitespace-pre-line break-words text-lg">
                  {remainingPart}
                </p>
              </motion.div>

              <motion.button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '16px'
                }}
              >
                <span className="flex items-center space-x-2">
                  <span>{isExpanded ? "Daha Az Göster" : "Devamını Oku"}</span>
                  <motion.svg
                    className="w-5 h-5"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </span>
              </motion.button>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm font-medium shadow-lg" style={{ borderRadius: '16px' }}>
              🚀 Aktif Geliştirici
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-medium shadow-lg" style={{ borderRadius: '16px' }}>
              💻 Full Stack
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About 