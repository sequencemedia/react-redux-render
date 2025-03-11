import type { Store } from 'redux'

declare module '#react-redux-render/react-dom-server' {
  type ComponentType = ReactReduxRenderTypes.ComponentType
  type PropsType = ReactReduxRenderTypes.PropsType

  export function getReactDOMServerRenderToString (store: Store, Component: ComponentType, props: PropsType): string

  export function getReactDOMServerRenderToStaticMarkup (store: Store, Component: ComponentType, props: PropsType): string
}
