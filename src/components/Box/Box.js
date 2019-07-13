import styled from 'styled-components'
import {
  space,
  color,
  flex,
  width,
  borderRadius,
  display,
  height,
  flexBasis,
  flexDirection,
  flexWrap,
  maxWidth,
  border,
  compose,
} from 'styled-system'

const layout = compose(
  space,
  display,
  width,
  height,
  maxWidth,
  color
)

const css = {
  boxSizing: 'border-box',
  minWidth: 0,
}

const Box = styled('div')(
  css,
  width,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  border,
  borderRadius,
  layout
)

export default Box
