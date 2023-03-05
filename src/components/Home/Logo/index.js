
import LogoS from '../../../assets/images/logo-p.svg'
import './index.scss'

const Logo = () => {


  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript"
      />

    </div>
  )
}

export default Logo;