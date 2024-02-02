import './index.css'

function Header() {
  return (
    <header>
    <img src="./playStationLogo.png" alt="Logo Playstation Store"></img>
    <nav>
      <ul>
        <li><a href="#news">Novidades</a></li>
        <li><a href="#onSale">Ofertas</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#subscriptions">Newsletter</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header