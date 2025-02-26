import PropTypes from 'prop-types';
import style from './title.module.css';
function Title({ title, variant}) {
  return <div className={style[variant]} >{title}</div>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Title;
