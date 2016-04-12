import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

require('./widgets.scss');

export default class ButtonGroup extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      clickedButton: this.props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.value) return;
    this.setState({
      clickedButton: nextProps.value,
    });
  }
  onClickButtonGroup(e) {
    const clickedButton = e.currentTarget.value;
    const buttonName = e.currentTarget.getAttribute('name');
    this.setState({
      clickedButton,
    });
    this.props.onClickButtonGroup(buttonName, clickedButton);
  }
  onClickHeadButton() {
    this.props.onClickHeadButton();
  }
  onClickFootButton() {
    this.props.onClickFootButton();
  }

  render() {
    const buttonList = this.props.buttonList;
    const style = { backgroundColor: '#1caf9a', color: '#fff', borderColor: '#1caf9a' };
    const buttonStyle = { width: this.props.buttonWidth };
    return (
      <div className="button-group">
        {
          this.props.headButton &&
          <input type="button" value={this.props.headButton.value} name={this.props.headButton.name} onClick={this.onClickHeadButton.bind(this)} />
        }
        {
          buttonList.map((buttonItem) => {
            return (
              <input type="button" style={buttonItem.value != this.state.clickedButton ? this.props.style : Object.assign({}, this.props.style, style)} key={buttonItem.value} onClick = {this.onClickButtonGroup.bind(this)} value={buttonItem.value} name={buttonItem.name}/>
            );
          }, this)
        }
        {
          this.props.footButton &&
          <input type="button" value={this.props.footButton.value} name={this.props.footButton.name} onClick={this.onClickFootButton.bind(this)} />
        }
      </div>
    );
  }
}
