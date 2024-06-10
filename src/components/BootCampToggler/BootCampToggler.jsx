import './BootCampToggler.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

function BootCampToggler() {
  return (
    <div className="togglerContainer">
      <div className="bg-toggler">
        <h1 className="colorPurple">المعسكرات والبرامج</h1>
        <div>
          <button className="btn">الناشؤون</button>
          <button className="btn active">الكبار</button>
        </div>
        <div className="iconWrapper">
          <FontAwesomeIcon
            style={{ color: 'white' }}
            className="icon"
            icon={faSliders}
          />
        </div>
      </div>
    </div>
  );
}

export default BootCampToggler;
