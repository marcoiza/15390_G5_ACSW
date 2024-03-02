export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <h3 className="text-center text-xl font-bold pt-5">
        Departamento de Ciencias de la Computación
      </h3>
      <div className="flex flex-row justify-center py-5">
        <div className="size-1/3">
          <p>Av. Gral. Rumiñahui S/N, Sangolquí 171103</p>
          <div>
            <p>(123) 456-7890</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="size-1/3">
          <p>© 2023 Universidad de las Fuerzas Armadas ESPE</p>
          <div>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
