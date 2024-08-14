export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-[#ff8c3c] text-white text-center mt-10">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex">
          <p className="hover:text-white mx-2 transition underline">
            Termos de Serviço
          </p>
          <p className="hover:text-white mx-2 transition underline">
            Política de Privacidade
          </p>
        </div>
        <div className="flex space-x-4">
          <p className="hover:text-white transition">
            <i className="fab fa-facebook-f"></i>
          </p>
          <p className="hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </p>
          <p className="hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Endereço: Av. Magalhães de Castro, 12000 - Jardim Panorama, São Paulo
          - SP
        </p>
      </div>
    </footer>
  )
}
