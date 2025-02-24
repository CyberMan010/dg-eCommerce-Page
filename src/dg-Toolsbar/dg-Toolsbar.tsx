import './dg-Toolsbar_style.scss';

export const DgToolsbar = () => {
    return (
        <div className="toolbar">
        <div className="toolbar__group">
          <span className="toolbar__label">Sort By</span>
          <div className="toolbar__select-wrapper">
            <select defaultValue="recommended" className="toolbar__select">
              <option value="recommended">Recommended</option>
              <option value="newest">A-Z</option>
              <option value="price-low">min-max</option>
              <option value="price-high">max-min</option>
            </select>
          </div>
        </div>
  
        <div className="toolbar__group">
          <span className="toolbar__label">Display</span>
          <div className="toolbar__select-wrapper toolbar__select-wrapper--small">
            <select defaultValue="50" className="toolbar__select toolbar__select--small">
              <option value="50">20</option>
              <option value="50">50</option>
              <option value="100">75</option>
              <option value="150">100</option>
            </select>
          </div>
        </div>
  
        <div className="toolbar__view-options">
          <button className="toolbar__view-button">
            <img src="/element-3.svg" alt="Grid view" />
          </button>
          <button className="toolbar__view-button">
            <img src="/row-vertical.svg" alt="List view" />
          </button>
        </div>
      </div>
    )
  }
  
  