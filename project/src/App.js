import BookingTable from "./BookingTable";
import logo from "./icons_assets/Logo.svg";
import restaurant from "./icons_assets/restaurant.jpg";

function App() {
  const navs = [
    {name: "Home",},
    {name: "About",},
    {name: "Menu",},
    {name: "Reservation",},
    {name: "Order",},
    {name: "Login",},
  ]

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <nav className="navs">
          {navs.map(nav => (
            <div className="nav">{nav.name}</div>
          ))}
        </nav>
      </div>
      <img src={restaurant} alt="restaurant" className="restaurant" />
      <BookingTable />
    </>
  );
}

export default App;
