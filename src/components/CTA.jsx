function CTA() {
  return (
    <section id="admissions" className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold">Prêt à démarrer ?</h2>
          <p className="mt-2 text-blue-100 max-w-2xl mx-auto">Nos conseillers vous accompagnent pour choisir la formation qui correspond à votre projet.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto">
            <input type="email" required placeholder="Votre email professionnel" className="w-full px-4 py-3 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none" />
            <button className="px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-50">Être recontacté</button>
          </form>
          <p className="mt-3 text-xs text-blue-100">En soumettant ce formulaire, vous acceptez d’être contacté par notre équipe.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
