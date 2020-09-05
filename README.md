# React Snackbar Messages

## Getting Started

### Installation

```
npm install --save react-snackbar-messages
```

or

```
yarn add react-snackbar-messages
```

### Usage

Wrap your application within a `SnackbarProvider`.

```jsx
import { SnackbarProvider, useSnackbar } from 'react-snackbar-messages'

const ChildComponent = () => {
  const snackbar = useSnackbar()

  const showSnackbar = () => {
    snackbar.add('Hello Snackbar!', {
      appearance: 'sucess',
      autoDismiss: true
    })
  }

  return <button onClick={showSnackbar}>Show Snackbar</button>
}

const App = () => (
  <SnackbarProvider>
    <ChildComponent />
  </SnackbarProvider>
)
```
