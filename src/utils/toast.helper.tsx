import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiInfo,
  FiX,
} from 'react-icons/fi'
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5'

export type ToastType = 'error' | 'success' | 'warning' | 'info' | 'custom'

interface CustomToastProps {
  t: any
  type: ToastType
  title?: string
  message?: string
  children?: ReactNode
  duration: number
  action?: {
    label: string
    onClick: () => void
  }
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
}

export function CustomToast({
  t,
  type,
  title,
  message,
  children,
  duration,
  action,
  position = 'bottom-right',
}: CustomToastProps) {
  const [progress, setProgress] = useState<number>(100)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(Date.now())
  const elapsedRef = useRef<number>(0)

  useEffect(() => {
    const updateProgress = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)

      intervalRef.current = setInterval(() => {
        const now = Date.now()
        const elapsed = isPaused
          ? elapsedRef.current
          : elapsedRef.current + (now - startTimeRef.current)
        const newProgress = Math.max(0, 100 - (elapsed / duration) * 100)

        setProgress(newProgress)
        elapsedRef.current = elapsed
        startTimeRef.current = now

        if (newProgress <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          toast.dismiss(t.id)
        }
      }, 10)
    }

    updateProgress()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [duration, isPaused, t.id])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const defaultTitles = {
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    custom: 'Notification',
  }

  const config = {
    error: {
      borderClass: 'border-red-500/30',
      textClass: 'text-red-600 dark:text-red-300',
      iconClass: 'text-red-500 dark:text-red-400',
      progressClass: 'bg-red-500',
      bgClass: 'from-red-50 to-white dark:from-gray-800 dark:to-gray-900',
      Icon: IoCloseCircle,
    },
    success: {
      borderClass: 'border-green-500/30',
      textClass: 'text-green-600 dark:text-green-300',
      iconClass: 'text-green-500 dark:text-green-400',
      progressClass: 'bg-green-500',
      bgClass:
        'from-green-50 to-white dark:from-gray-800 dark:to-gray-900',
      Icon: IoCheckmarkCircle,
    },
    warning: {
      borderClass: 'border-amber-500/30',
      textClass: 'text-amber-600 dark:text-amber-300',
      iconClass: 'text-amber-500 dark:text-amber-400',
      progressClass: 'bg-amber-500',
      bgClass:
        'from-amber-50 to-white dark:from-gray-800 dark:to-gray-900',
      Icon: FiAlertTriangle,
    },
    info: {
      borderClass: 'border-blue-500/30',
      textClass: 'text-blue-600 dark:text-blue-300',
      iconClass: 'text-blue-500 dark:text-blue-400',
      progressClass: 'bg-blue-500',
      bgClass: 'from-blue-50 to-white dark:from-gray-800 dark:to-gray-900',
      Icon: FiInfo,
    },
    custom: {
      borderClass: 'border-gray-500/30',
      textClass: 'text-gray-600 dark:text-gray-300',
      iconClass: 'text-gray-500 dark:text-gray-400',
      progressClass: 'bg-gray-500',
      bgClass: 'from-gray-50 to-white dark:from-gray-800 dark:to-gray-900',
      Icon: FiAlertCircle,
    },
  }

  const {
    borderClass,
    textClass,
    iconClass,
    progressClass,
    bgClass,
    Icon,
  } = config[type]

  return (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          initial={{
            opacity: 0,
            [position.includes('right')
              ? 'x'
              : position.includes('left')
                ? '-x'
                : 'y']: 20,
          }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`relative p-4 pr-8 md:max-w-md w-full sm:w-96 bg-gradient-to-br ${bgClass} rounded-xl shadow-lg border dark:border-gray-700 backdrop-blur-sm`}
          style={{
            transformOrigin: position.includes('top') ? 'top' : 'bottom',
          }}
          role="alert"
          aria-live="assertive"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className={`absolute inset-0 rounded-xl border ${borderClass} pointer-events-none`}
            style={{ filter: 'blur(4px)' }}
          />

          <div className="flex items-start gap-3">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="shrink-0 mt-0.5">
              <Icon className={`w-6 h-6 ${iconClass}`} />
            </motion.div>

            <div className="flex-1">
              <motion.h3
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {title || defaultTitles[type]}
              </motion.h3>

              <motion.div
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-sm ${textClass} space-y-1`}>
                {children || message}
              </motion.div>

              {action && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`mt-2 px-3 py-1 text-xs font-medium rounded-md ${textClass} bg-${type}-100 dark:bg-${type}-900/30 hover:bg-${type}-200 dark:hover:bg-${type}-800/40 transition-colors`}
                  onClick={() => {
                    action.onClick()
                    toast.dismiss(t.id)
                  }}>
                  {action.label}
                </motion.button>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toast.dismiss(t.id)}
              className="absolute top-2 right-2 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Close notification">
              <FiX className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-xl overflow-hidden">
            <div
              className={`h-full ${progressClass} rounded-b-xl`}
              style={{
                width: `${progress}%`,
                transition: isPaused ? 'none' : 'width linear 10ms',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ToastOptions {
  type?: ToastType
  title?: string
  message?: string
  children?: React.ReactNode
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
}

export const showToast = ({
  type = 'custom',
  title,
  message,
  children,
  duration = 4000,
  action,
  position = 'top-center',
}: ToastOptions) => {
  return toast.custom(
    (t) => (
      <CustomToast
        t={t}
        type={type}
        title={title}
        message={message}
        duration={duration}
        action={action}
        position={position}>
        {children}
      </CustomToast>
    ),
    {
      duration,
      position: position.includes('top') ? 'top-center' : 'bottom-center',
    },
  )
}
