import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card, CardBody, CardHeader, Col, Row,
} from 'reactstrap';
import ReactTable from 'react-table-6';
import { getDataLevyTitle } from '../../actions/levyTitle';
import Loading from '../../utils/loading';
import CONST from '../../const/local';

class LevyTile extends Component {
  constructor(props, context) {
    super(props, context);
    props.getDataLevyTitle();
    this.state = {
      Columns: [{
        Header: '',
        accessor: '',
        resizable: false,
        filterable: false,
        width: 55,
        Cell: p => p.index + 1,
      }, {
        Header: CONST.LIST.TABLE_HEADER.ID,
        accessor: 'id',
      }, {
        Header: CONST.LIST.TABLE_HEADER.COMPETENCIA,
        accessor: 'compenteceAt',
      }, {
        Header: CONST.LIST.TABLE_HEADER.VALOR,
        accessor: 'levyValue',
      }, {
        Header: CONST.LIST.TABLE_HEADER.PARCELAS,
        accessor: 'installmentQt',
      }, {
        Header: CONST.LIST.TABLE_HEADER.JUSTIFICATIVA,
        accessor: 'cancelJustify',
      }, {
        Header: CONST.LIST.TABLE_HEADER.NIVEL,
        accessor: 'nivel',
      }],
    };
  }

  render() {
    if (this.props.levyTitleList && this.props.levyTitleList.state !== false) {
      return <Loading msg="carregando..." />;
    }

    const model = this.props.listLevyTitle && this.props.listLevyTitle.data || [];
    const columns = this.state.Columns;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                Título
              </CardHeader>
              <CardBody>
                <ReactTable
                  className="table table-striped"
                  data={model}
                  columns={columns}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getDataLevyTitle,
  },
  dispatch,
);

const mapStateToProps = state => ({
  listLevyTitle: state.levyTitleState.listLevyTitle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LevyTile);
