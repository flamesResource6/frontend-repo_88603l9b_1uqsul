import { ArrowRight, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section className="pt-28 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Formez-vous à des métiers d'avenir
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Des parcours professionnalisants, encadrés par des experts, pour accélérer votre carrière dans le numérique et les métiers techniques.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#admissions" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Commencer mon inscription
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#formations" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
              Voir les formations
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {["Diplômes reconnus","Alternance possible","Accompagnement emploi"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="aspect-video rounded-lg bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center text-indigo-800 font-bold text-xl">
            Votre avenir commence ici
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Rejoignez une communauté d'apprenants motivés et bénéficiez d'un encadrement personnalisé.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
