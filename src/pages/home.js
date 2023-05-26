import React from "react";
class Home extends React.Component{
    render(){
        return (
            <body>
  <header class="header">
    <a href="#" class="logo">Online Railway Reservation</a>
  </header>
  <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#login">Login</a>
    <a href="#register">Register</a>
    <a href="#about">About</a>

    <input type="text" placeholder="Search.."/>
  </div>
  <main>
    <div class="intro">
      <h1>Online Ticket Booking</h1>
      <p>Book Ticket At Your Own Convinience.</p>
      </div>
  </main>
  <div id="main2">

  </div>
  <footer class="footer">
    <div class="copy">&copy; 2023 CGASSIGNMENT</div>
  </footer>
</body>
        );
    }
}
export default Home;