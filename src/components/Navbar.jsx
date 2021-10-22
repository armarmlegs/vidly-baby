import React from "react";


const Navbar = ({totalCounters}) => {
    return( 
           
          <div>
            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Navbar {""}
                </a>
              <div className="span badge badge-pill badge-secondary">{totalCounters}</div>
            </nav>
          </div>
        
      
      );
};
// class Navbar extends Component {
//   render() {
//     console.log(this.props)
//     return (
       
//       <div>
//         <nav className="navbar navbar-light bg-light">
//           <a className="navbar-brand" href="#">
//             Navbar {""}
//             </a>
//           <div className="span badge badge-pill badge-secondary">{this.props.totalCounters}</div>
//         </nav>
//       </div>
//     );
//   }
// }

export default Navbar;
