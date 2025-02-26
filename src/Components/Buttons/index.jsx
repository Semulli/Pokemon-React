import style from "./button.module.css";
import { Button } from "react-bootstrap";

import PropTypes from "prop-types";

function Buttons({ count, onIncrease, onDecrease, onRemove }) {
  return (
    <div className={style.mainBtns}>
      <Button onClick={onDecrease} className="btn btn-warning">
        -
      </Button>
      <p>{count}</p>
      <Button onClick={onIncrease} variant="success">+</Button>
      <Button onClick={onRemove} variant="danger">Remove</Button>
    </div>
  );
}

Buttons.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Buttons;
