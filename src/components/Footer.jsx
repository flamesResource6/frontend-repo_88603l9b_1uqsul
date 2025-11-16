function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900">Académie Pro</h3>
          <p className="text-sm text-gray-600 mt-2">Ecole de formation professionnelle orientée vers l’emploi et les compétences de demain.</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">Nous contacter</h4>
          <p className="text-sm text-gray-600 mt-2">contact@academiepro.fr<br/>+33 1 23 45 67 89</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">Adresse</h4>
          <p className="text-sm text-gray-600 mt-2">123 Avenue des Talents<br/>75000 Paris, France</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-100">© {new Date().getFullYear()} Académie Pro. Tous droits réservés.</div>
    </footer>
  )
}

export default Footer
