import { Component, type ReactNode } from 'react'

type Props = { children: ReactNode }

type State = { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  override render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100svh',
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
            background: '#0a0f1a',
            color: '#f0f4ff',
          }}
        >
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Something went wrong</h1>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              fontSize: '0.875rem',
              color: '#e8c97a',
              background: '#000814',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            {this.state.error.message}
          </pre>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.85 }}>
            Open the browser console (F12) for the full stack trace. Reload the page to try again.
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
