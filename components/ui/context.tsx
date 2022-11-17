import React, { FC, useCallback, useMemo } from 'react'
import { ThemeProvider } from 'next-themes'

export type MODAL_VIEWS = 'MENU' | 'LOGOUT'

export interface State {
  displaySidebar: boolean
  displayDropdown: boolean
  displayModal: boolean
  modalView: MODAL_VIEWS
  userAvatar: string
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  closeSidebarIfPresent: () => void
  openDropdown: () => void
  closeDropdown: () => void
  openModal: (_: MODAL_VIEWS) => void
  closeModal: () => void
  setUserAvatar: (_: string) => void
}

const initialState: State = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'MENU',
  userAvatar: '',
  openSidebar: () => {},
  closeSidebar: () => {},
  toggleSidebar: () => {},
  closeSidebarIfPresent: () => {},
  openDropdown: () => {},
  closeDropdown: () => {},
  openModal: () => {},
  closeModal: () => {},
  setUserAvatar: () => {},
}

type Action =
  | {
      type: 'OPEN_SIDEBAR'
    }
  | {
      type: 'CLOSE_SIDEBAR'
    }
  | {
      type: 'OPEN_DROPDOWN'
    }
  | {
      type: 'CLOSE_DROPDOWN'
    }
  | {
      type: 'OPEN_MODAL'
      view: MODAL_VIEWS
    }
  | {
      type: 'CLOSE_MODAL'
    }

export const UIContext = React.createContext(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      }
    }
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        displayDropdown: true,
      }
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        displayDropdown: false,
      }
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        modalView: action.view,
        displayModal: true,
        displaySidebar: false,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const openSidebar = useCallback(
    () => dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch]
  )
  const closeSidebar = useCallback(
    () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch]
  )
  const toggleSidebar = useCallback(
    () =>
      state.displaySidebar
        ? dispatch({ type: 'CLOSE_SIDEBAR' })
        : dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  )
  const closeSidebarIfPresent = useCallback(
    () => state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  )

  const openDropdown = useCallback(
    () => dispatch({ type: 'OPEN_DROPDOWN' }),
    [dispatch]
  )
  const closeDropdown = useCallback(
    () => dispatch({ type: 'CLOSE_DROPDOWN' }),
    [dispatch]
  )

  const openModal = useCallback(
    (view: MODAL_VIEWS) => dispatch({ type: 'OPEN_MODAL', view }),
    [dispatch]
  )
  const closeModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch]
  )

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openDropdown,
      closeDropdown,
      openModal,
      closeModal,
    }),
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
  </UIProvider>
)
