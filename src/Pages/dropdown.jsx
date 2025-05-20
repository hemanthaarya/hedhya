function Dropdown(props) {
  return (
    <div> 
      {props.menuData.map((item) => <div className="dropdown">
              {Object.entries(item.items).map(([key, value]) => (
                <div>
                  <h2>{key}</h2>
                      <ul>
                        {value.map((subItem) => (
                          <li key={subItem}>{subItem}</li>
                        ))}
                    </ul>
                </div>
             ))}
      </div>)}
    </div>
  );
}

export default Dropdown;