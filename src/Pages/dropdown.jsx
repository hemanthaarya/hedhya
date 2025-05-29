import './Home.css';
import { Link } from 'react-router-dom';

function Dropdown({ menuData }) {
  return (
    <div className="dropdown-wrapper">
      {menuData.map((item, idx) => (
        <div className="dropdown" key={idx}>
          {Object.entries(item.items).map(([key, value], index) => (
            <div key={index}>
              <h2>
                <Link to="/services" className="Link">
                  {key}
                </Link>
              </h2>
              <ul>
                {value.map((subItem) => (
                  <li key={subItem}>
                    <Link to="/services" className="Link2">
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;