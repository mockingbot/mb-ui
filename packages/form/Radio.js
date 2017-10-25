import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * <Radio>
 */
export class Radio extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isChecked: props.isChecked }
  }

  static propTypes = {
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    className: PropTypes.string,
  }

  static defaultProps = {
    isChecked: false,
    label: '',
    className: '',
    onChange: () => null,
  }

  componentWillReceiveProps({ isChecked: willBeChecked }) {
    const { isChecked } = this.props

    if (willBeChecked !== isChecked) {
      this.setState({ isChecked: willBeChecked })
    }
  }

  onChange = () => this.setState(
    { isChecked: true },
    this.props.onChange,
  )

  render() {
    const { className, label, name, isDisabled } = this.props
    const { isChecked } = this.state

    return (
      <label
        className={`
          radio-label
          ${isChecked ? 'is-checked' : ''}
          ${isDisabled ? 'is-disabled' : ''}
          ${className}
        `}
      >
        <input
          type="radio"
          defaultChecked={isChecked}
          disabled={isDisabled}
          name={name}
          onChange={this.onChange}
        />

        <span className="checker" />
        <span className="key">{ label }</span>
      </label>
    )
  }
}

/**
 * <RadioGroup>
 */
export class RadioGroup extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    optionList: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.any,
        isDisabled: PropTypes.bool,
      }),
    ).isRequired,
    currentOptionIdx: PropTypes.number,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    name: Math.random().toString(36).substring(2, 15),
    className: '',
    optionList: [],
    isDisabled: false,
    onChange: () => null,
  }

  createOnChangeHandler = (val, idx) => () => this.props.onChange(val, idx)

  render() {
    const {
      className, name,
      optionList, currentOptionIdx,
      isDisabled,
    } = this.props

    return (
      <span className={`radio-group ${className} ${isDisabled ? 'is-disabled' : ''}`}>
      {
        optionList
        .map((opt, idx) => opt && (
          <Radio
            key={idx}
            name={name}
            label={opt.label}
            type="radio"
            isChecked={idx === currentOptionIdx}
            isDisabled={isDisabled || opt.isDisabled}
            onClick={!(isDisabled || opt.isDisabled) && this.createOnChangeHandler(opt.value, idx)}
          />
        ))
      }
      </span>
    )
  }
}