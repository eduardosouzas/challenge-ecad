import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import {
  DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown,
} from 'reactstrap';
import { withRouter, Redirect } from 'react-router-dom';

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.logoutHandle = this.logoutHandle.bind(this);
  }

  logoutHandle(event) {
    event.preventDefault();
  }

  render() {
    if (!this.props.authUser) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    const model = this.props.authUser.data;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: '/assets/imgs/ecad_logo.png',
            height: 55,
            alt: 'Logo',
          }}
          minimized={{
            src: '/assets/imgs/ecad_logo.png',
            height: 55,
            alt: 'Logo',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown direction="down">
            <DropdownToggle nav>
              <span>
                <i className="fa fa-user" />
              </span>
              <span>
                {' '}
                {model && model.Name ? model.Name : 'Admin'}
              </span>
              <span>
                <i className="fa fa-angle-down" />
              </span>
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem onClick={this.logoutHandle}>
                <i className="fa fa-arrow-left" />
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
  },
  dispatch,
);

const mapStateToProps = state => ({
  authUser: state.userState.authUser,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DefaultHeader));
