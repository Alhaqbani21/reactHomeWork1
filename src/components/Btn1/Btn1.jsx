import './Btn1.css';

function Btn1(props) {
  return (
    <div className="buttonContainer">
      <div className="button-card-down">{props.name}</div>;
    </div>
  );
}

export default Btn1;
