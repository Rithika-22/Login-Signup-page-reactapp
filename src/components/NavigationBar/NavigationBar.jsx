import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <nav>
        <a href="/">Rithika</a>
        <div>
            <p>
                Welcome,<span>Guest</span>
            </p>
            <i className="fa fa-user"></i>
        </div>
    </nav>
  )
}

export default NavigationBar;