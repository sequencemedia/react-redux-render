import type React from 'react'

declare global {
  namespace ReactReduxRenderTypes {
    export type ComponentType = () => React.JSX.Element
    export type PropsType = Record<string, unknown>
  }
}

export {}
