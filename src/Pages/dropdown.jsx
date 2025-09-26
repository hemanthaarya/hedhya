import { Link } from 'react-router-dom';
import './Home.css';

function Dropdown({ menuData }) {
  return (
    <div className="dropdown-wrapper">
      {menuData.map((item, idx) => (
        <div className="dropdown" key={idx}>
          {Object.entries(item.items).map(([category, services], index) => (
            <div key={index}>
              <h3><span className="Link">{category}</span></h3>
              <ul>
                {services.map((service, i) => (
                  <li key={i}>
                    <Link 
                      to={`/services/${encodeURIComponent(service.name)}`} 
                      className="Link2"
                    >
                      {service.name}
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
