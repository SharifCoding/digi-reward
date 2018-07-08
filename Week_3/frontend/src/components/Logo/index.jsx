import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import monzoLogo from '../../assets/indespendent.svg';
import './style.scss';

class Logo extends React.PureComponent {
  render() {
    const { large } = this.props;

    const logoClassnames = classNames({
      'mzw-logo': true,
      'mzw-logo--large': large,
    });

    return (
      <div className={logoClassnames}>
        <img src={monzoLogo} alt="indespendent" className="mzw-logo__image" />
      </div>
    );
  }
}

Logo.defaultProps = {
  large: false,
};

Logo.propTypes = {
  large: PropTypes.bool,
};

export default Logo;
