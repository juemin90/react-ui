import React, { Component, PropTypes } from 'react';
import ButtonGroup from './../widgets/ButtonGroup';
require('./widgets.scss');

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
    };
  }
  onClickButtonGroup(pageNumber) {
    this.setState({
      pageNumber: parseInt(pageNumber, 10),
    });
    this.props.onChangePage(parseInt(pageNumber, 10));
  }
  onClickHeadButton() {
    if (this.state.pageNumber === 1) return;
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
    this.props.onChangePage(this.state.pageNumber - 1);
  }
  onClickFootButton() {
    if (this.state.pageNumber === Math.ceil(this.props.itemLength / 10)) return;
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
    this.props.onChangePage(this.state.pageNumber + 1);
  }
  generatePagination(pageLength) {
    const pageList = [];
    const currentPage = this.state.pageNumber;
    const paginationMax = 10;
    pageList.push({ value: currentPage, name: currentPage });
    let i = 1;
    let j = 1;
    while (i < Math.min(pageLength, paginationMax)) {
      if (currentPage - j > 0) {
        pageList.unshift({ value: currentPage - j, name: currentPage - j });
        i += 1;
      }
      if (currentPage + j <= Math.min(pageLength, paginationMax)) {
        pageList.push({ value: currentPage + j, name: currentPage + j });
        i += 1;
      }
      j += 1;
    }
    return pageList;
  }
  render() {
    const pageLength = this.props.pagesCount;
    const pageList = this.generatePagination(pageLength);
    return (
      <div className="pagination">
        <ButtonGroup headButton={ { value: '<<' } } footButton={ { value: '>>' } } buttonList={ pageList } style={ { width: '50px' } } value={this.state.pageNumber} onClickHeadButton={this.onClickHeadButton.bind(this)} onClickFootButton={this.onClickFootButton.bind(this)} onClickButtonGroup={this.onClickButtonGroup.bind(this)}/>
      </div>
    );
  }
}
