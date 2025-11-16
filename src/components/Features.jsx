import { Briefcase, AlarmClock, Award, Users } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: 'Programmes certifiants',
      desc: 'Des cursus reconnus par l’état et par les entreprises.'
    },
    {
      icon: <Briefcase className="text-blue-600" size={24} />,
      title: 'Projet professionnel',
      desc: 'Des mises en situation réelles pour construire votre portfolio.'
    },
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: 'Mentorat & coaching',
      desc: 'Un suivi individuel pour réussir votre insertion.'
    },
    {
      icon: <AlarmClock className="text-blue-600" size={24} />,
      title: 'Formats flexibles',
      desc: 'Présentiel, distanciel ou alternance selon votre profil.'
    }
  ]

  return (
    <section id="formations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Nos atouts</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Une pédagogie orientée emploi pour des résultats concrets.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
