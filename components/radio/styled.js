import styled from 'styled-components'

export const StyledLabel = styled.label`
  position: relative;
  display: inline-flex;
  align-items: baseline;
  line-height: 1.5;
  cursor: pointer;
  color: #5b6b73;

  > input[type=radio] {
    position: absolute;
    opacity: 0;
  }
  &.regular {
    font-size: 14px;
  }
  &.small {
    font-size: 12px;
    .Check-state {
      transform: translateY(2px);
    }
  }
  &.readonly {
    cursor: default;
  }
  &.is-disabled {
    cursor: not-allowed;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255,255,255,0.5);
    }
  }
  .Check-state {
    position: relative;
    flex: 0 0 1em;
    margin-right: 0.33333em;
    width: 1em;
    height: 1em;
    transform: translateY(1px);
    font-size: 12px;
    background-color: #f6f7f8;
    border: 1px solid #8d9ea7;
    border-radius: 2px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    .svg-icon.check {
      position: absolute;
      top: -1px;
      left: -1px;
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }
  }
  &.small .Check-state {
    transform: translateY(2px);
  }
  &.is-checked {
    .Check-state {
      background-color: #298df8;
      border-color: transparent;
      color: #fff;

      .svg-icon.check {
        transform: scale(0.833);
      }
    }
  }
  &:not(.is-checked) .Check-state .icon {
    speak: none;
    opacity: 0;
  }
  &.CoreRadio {
    .Check-state {
      background-color: #fff;
      border-color: #bacdd6;
    }
    &.is-checked .Check-state {
      background-color: #eb5648;
    }
  }
`
export const StyledRadio = styled(StyledLabel)`
  .Check-state {
    padding: 1px;
    border-radius: 50%;

    &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 50%;
    }
  }
  .is-checked .Check-state {
    position: relative;
  }
`
export const StyledRadioGroup = styled.span`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  &.is-disabled {
    cursor: not-allowed;
  }
  .Radio,
  .CoreRadio {
    margin-right: .5em;
    min-height: 2em;
  }
`
