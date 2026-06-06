import { Fish, Droplets, Award, Leaf, Plus, Minus, Mail, Phone, Users, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Какой минимальный объём оптовой партии?",
      answer:
        "Минимальный объём для оптовых поставок составляет от 500 кг за одну отгрузку. Для ресторанов и сетевых кафе возможно обсуждение меньших объёмов на индивидуальных условиях. Свяжитесь с нашим менеджером для уточнения деталей.",
    },
    {
      question: "В какие регионы осуществляется доставка?",
      answer:
        "Мы поставляем продукцию по всему Дальнему Востоку. Основная зона — Приморский и Хабаровский края, Сахалин. Для удалённых регионов обсуждаем логистику индивидуально. Обеспечиваем доставку в охлаждённом и замороженном виде.",
    },
    {
      question: "Как гарантируется свежесть продукции?",
      answer:
        "Рыба поставляется в охлаждённом виде в течение 24–48 часов после вылова. Используем специализированную рефрижераторную логистику. Вся продукция сопровождается ветеринарными документами и сертификатами качества.",
    },
    {
      question: "Есть ли сертификаты качества на продукцию?",
      answer:
        "Да, вся продукция Lico Forelium сертифицирована по российским стандартам качества. Мы предоставляем ветеринарные свидетельства, декларации соответствия и санитарно-эпидемиологические заключения с каждой партией.",
    },
  ]

  const partners = [
    "Крупнейшие сети продуктов питания Дальнего Востока",
    "Оптовые базы",
    "Рыбные перерабатывающие предприятия",
    "Рестораны со свежей рыбной продукцией",
    "Суши-бары и кафе",
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/a1d1e66d-4b47-4e6f-9ebf-fa4f1239cd8a/files/363e64d5-81a6-47aa-b502-bd0e120a3cce.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Fish" size={20} />
            <span className="font-medium text-balance">Lico Forelium</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Производство", "Условия", "Партнёры", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Стать партнёром</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Экологически чистая аквакультура Дальнего Востока</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Производство<br />Радужной Форели
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Lico Forelium — до 500 тонн экологически чистой радужной форели в год. Стабильные поставки, сертифицированное качество, прямые контракты для B2B партнёров.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Обсудить поставки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о производстве
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="ShieldCheck" size={16} />
            <span className="text-sm font-medium">Полный пакет ветеринарных документов и сертификатов</span>
          </div>
        </div>
      </div>

      {/* Stats / Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* 500 тонн */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="TrendingUp" size={24} />
              </div>
              <h3 className="text-4xl font-bold mb-2">500 т</h3>
              <p className="text-white/80 leading-relaxed">Объём производства в год — стабильные поставки круглый год.</p>
            </div>

            {/* 2 модуля */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Building2" size={24} />
              </div>
              <h3 className="text-4xl font-bold mb-2">7 200 м²</h3>
              <p className="text-white/80 leading-relaxed">2 современных модуля с идеальными условиями для роста рыбы.</p>
            </div>

            {/* 51 бассейн */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Droplets" size={24} />
              </div>
              <h3 className="text-4xl font-bold mb-2">51</h3>
              <p className="text-white/80 leading-relaxed">Бассейн для выращивания рыбы на всех стадиях развития.</p>
            </div>

            {/* 170 000 рыб */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Fish" size={24} />
              </div>
              <h3 className="text-4xl font-bold mb-2">170 000</h3>
              <p className="text-white/80 leading-relaxed">Живых рыб на современных водных системах аквакультуры.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Цикл производства</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От икры до готовой продукции — контролируемый процесс на каждом этапе.
              </p>
            </div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Инкубация икры</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Выращивание начинается с икры в контролируемых инкубационных условиях. Оптимальная температура воды и кислородный режим обеспечивают высокий процент выживаемости.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Выращивание малька</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Молодь форели проходит начальный этап роста в отдельных бассейнах. Сбалансированное кормление и постоянный мониторинг здоровья рыбы.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Товарный откорм</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    В 51 бассейне площадью 7 200 м² рыба доводится до товарного веса. Экологически чистые корма, регулярный ветеринарный контроль.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Поставка партнёрам</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Готовая продукция поставляется в охлаждённом виде в течение 24–48 часов. Полный пакет документов, рефрижераторная логистика по Дальнему Востоку.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Обсудить условия поставок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Кому мы поставляем
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty mb-8">
                  Lico Forelium — надёжный поставщик для бизнеса любого масштаба: от крупных сетей до небольших кафе.
                </p>
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Стать партнёром
                </Button>
              </div>

              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-5"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} />
                    </div>
                    <span className="text-white/90 font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать об условиях сотрудничества, объёмах поставок и качестве продукции Lico Forelium.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                Хотите узнать подробности?
              </h2>
              <p className="text-xl text-white/70">Свяжитесь с нашими специалистами</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя и компания
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Иван Иванов, ООО «Ресторан»"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите об объёмах и условиях поставок, которые вас интересуют..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить запрос
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Мы гордимся качеством нашей продукции и стремимся к устойчивому развитию в аквакультуре. По вопросам оптовых поставок, партнёрства и договоров — ответим в течение одного рабочего дня.
                  </p>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl space-y-4">
                  <h4 className="text-lg font-semibold mb-2">Lico Forelium</h4>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-800">Телефон: укажите ваш номер</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-800">Email: укажите ваш email</span>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg mt-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Написать нам
                  </Button>
                </div>

                {/* Closing Statement */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6">
                  <p className="text-white/80 leading-relaxed italic">
                    «Мы гордимся качеством нашей продукции и стремимся к устойчивому развитию в аквакультуре. Благодарим за внимание и готовы ответить на ваши вопросы!»
                  </p>
                  <p className="text-white/50 text-sm mt-3">— Команда Lico Forelium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Fish" size={24} />
                  <span className="text-xl font-semibold">Lico Forelium</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Производитель радужной форели на Дальнем Востоке. До 500 тонн в год, 2 современных модуля, 51 бассейн. Экологически чистая аквакультура для B2B партнёров.
                </p>
              </div>

              {/* Production Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОИЗВОДСТВО</h3>
                <ul className="space-y-3">
                  {["О предприятии", "Цикл выращивания", "Сертификаты", "Галерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partners Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПАРТНЁРАМ</h3>
                <ul className="space-y-3">
                  {["Условия поставок", "Стать партнёром", "Документы", "Логистика"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Условия", "Политика"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости о производстве</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Lico Forelium — Производство радужной форели</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
