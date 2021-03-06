import { css } from 'styled-components'

// $caretTop: 62px

export default css`
  .DateInput {
    margin: 0;

    position: relative;
    display: inline-block;
    width: ${({ dimensions }) => dimensions.inputWidth}px;
    vertical-align: middle;

    .screen-reader-only {
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  .DateInput--with-caret::before,
  .DateInput--with-caret::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: auto;
    border: 10px solid transparent;
    border-top: 0;
    left: 22px;
    z-index: 2;
  }

  // We dont use caret
  // .DateInput--with-caret::before {}
  //
  // .DateInput--with-caret::after {}

  // Are this state pertinently?
  // .DateInput--disabled {}

  .DateInput__input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    height: 100%;
    width: 100%;

    // Anymore overlays inputs text blocks
    z-index: 10;

    &[readonly] {
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  // Placeholder state
  .DateInput__display-text {
    color: ${({ theme }) => theme.color.miscDark};
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -.11px;
    white-space: nowrap;

    padding: 10px 18px 11px 10px;
    border: 2px solid ${({ theme }) => theme.color.primaryLight};
    border-radius:100px 0 0 100px;
    overflow: hidden;

    // Input borders overlaying
    position: relative;
    margin-right: -2px;
    z-index: 1;
  }

  .DateInput ~ .DateInput .DateInput__display-text {
    border-radius:0 100px 100px 0;
    margin-right: 0;
  }

  .DateInput__display-text--has-input {
    color: ${({ theme }) => theme.color.textDarker};
  }

  .DateInput--startDate--placeholder #startDate ~ .DateInput__display-text,
  .DateInput--endDate--placeholder #endDate ~ .DateInput__display-text {
    color: ${({ theme }) => theme.color.miscDark};
  }

  .DateInput__display-text--focused {
    border-color: ${({ theme }) => theme.color.secondary};
    z-index: 2;
  }
`
