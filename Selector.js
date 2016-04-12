import React, { Component, PropTypes } from 'react';
require('./widgets.scss');

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      selectedText: '请选择',
    };
  }
  onClickSelectToggle(e) {
    this.setState({
      active: !this.state.active,
    });
  }
  onClickSelectOption(e) {
    this.setState({
      active: !this.state.active,
      selectedText: e.currentTarget.innerHTML,
    });
    this.props.onClickSelectOption(e.currentTarget.innerHTML);
  }
  render() {
    let i = 0;
    const angleDirection = this.state.active ? 'fa fa-angle-double-up' : 'fa fa-angle-double-down';
    return (
      <div className="wrapper">
        <label>{this.props.title}</label>
        <div className={'selector' + (this.state.active ? ' active' : '')}>
          <div className="selector-toggle" onClick={this.onClickSelectToggle.bind(this)}>
            <span className="selector-toggle-overview">{this.state.selectedText}</span>
            <i className={angleDirection}></i>
          </div>
          <ul className="selector-option-list">
            {
              this.props.options.map(option =>
              <li className="selector-option" key={i++} onClick={this.onClickSelectOption.bind(this)}>
                { option }
              </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}
