import { RocketseatLogo } from "./Logos/RocketseatLogo";


export function Footer() {
  return (
      <footer className="w-screen-2lg h-16 mx-5  flex items-center justify-between  border-t border-gray-600 ">
          <div className=" flex items-center justify-center m-3 " >
            <RocketseatLogo  />
            <span className="ml-3">Rocketseat 2022 Todos os direitos reservados</span>
          </div>
          <div>
            <a href="#">Política de privacidade</a>
          </div>
      </footer>
  )
}