import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link } from 'react-router';
//import './App.css';
//import App from './App';
//import About from './modules/About'
//import Repos from './modules/Repos'

 
const LayoutWrapper = (props) => {
  return (
    <div className="index">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/repos">Repos</Link>
      <div className="container">
        {props.children}
      </div>
    </div>
  )
};
 
export default LayoutWrapper;



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//    this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen
//     });
//   }

//     handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <div>
//       <Nav pills>
//           <NavItem>
//             <NavLink href="#" active>Link</NavLink>
//           </NavItem>
//           <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//             <DropdownToggle nav caret>
//               Dropdown
//             </DropdownToggle>
//             <DropdownMenu>
//               <DropdownItem header>Header</DropdownItem>
//               <DropdownItem disabled>Action</DropdownItem>
//               <DropdownItem>Another Action</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem>Another Action</DropdownItem>
//             </DropdownMenu>
//           </NavDropdown>
//           <NavItem>
//             <NavLink><Link to="/repos">Repos</Link></NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink><Link to="/about">About</Link></NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink disabled href="#">Disabled Link</NavLink>
//           </NavItem>
//         </Nav>
//         <div class="jumbotron">
//          <Button color="danger" onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </Button></div>
//       </div>
//     );
//   }
// }
// export default App;
