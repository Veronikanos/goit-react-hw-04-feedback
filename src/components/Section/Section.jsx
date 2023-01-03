import PropTypes from 'prop-types';
import './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <p>{title}</p>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
