function Programs() {
  const programs = [
    {
      title: 'Développeur Web & Mobile',
      level: 'Bac à Bac+2',
      duration: '6 à 12 mois',
      desc: 'Maîtrisez JavaScript, React, Node.js et construisez des applications complètes.'
    },
    {
      title: 'Technicien Réseau & Systèmes',
      level: 'Bac à Bac+2',
      duration: '9 mois',
      desc: 'Administrez des infrastructures, virtualisation, sécurité et cloud.'
    },
    {
      title: 'UX/UI Designer',
      level: 'Tout niveau',
      duration: '6 mois',
      desc: 'Concevez des interfaces centrées utilisateurs et des prototypes testables.'
    }
  ]

  return (
    <section id="apropos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Formations phares</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Des parcours alignés sur les besoins des entreprises.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.level} • {p.duration}</p>
              <p className="text-sm text-gray-600 mt-3">{p.desc}</p>
              <a href="#admissions" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">En savoir plus →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
