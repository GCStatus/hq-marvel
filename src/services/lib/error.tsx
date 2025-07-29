import {
  isRejectedWithValue,
  Middleware,
  SerializedError,
} from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

import { showToast } from '@/utils'

const getError = (
  error: FetchBaseQueryError | SerializedError,
  defaultMessage = 'Something unexpected happened.',
) => {
  if ('status' in error && 'data' in error) {
    const { message, errors } = error.data as {
      message?: string
      errors?: { [key: string]: string[] }
    }

    if (errors) {
      const list = Object.values(errors)
        .flat()
        .map((err) => <li key={err}>{err}</li>)
      return <ul>{list}</ul>
    } else if (message) return message
    else return defaultMessage
  } else return defaultMessage
}

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const errorMessage = getError(
        action.payload as FetchBaseQueryError | SerializedError,
      )

      showToast({
        type: 'error',
        duration: 6000,
        children: (
          <div className="text-red-600 dark:text-red-300 space-y-1">
            <p
              style={{
                fontWeight: 'medium',
                color: 'text.primary',
              }}>
              {errorMessage}
            </p>
          </div>
        ),
      })
    }

    return next(action)
  }
