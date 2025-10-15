import { useRef, useState, useId, type ElementType } from 'react'
import { arrow, FloatingPortal, useFloating, shift, offset, type Placement } from '@floating-ui/react-dom-interactions'
import { motion, AnimatePresence } from 'motion/react'

interface Props {
  children: React.ReactNode
  renderPopper: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
  placement?: Placement
}

export default function Popover({
  children,
  className,
  renderPopper,
  as: Element = 'div',
  initialOpen,
  placement = 'bottom-end'
}: Props) {
  const [open, setOpen] = useState(initialOpen || false)
  const arrowRef = useRef<HTMLElement>(null)
  const { x, y, reference, floating, strategy, middlewareData } = useFloating({
    middleware: [offset(6), shift(), arrow({ element: arrowRef })],
    placement: placement
  })
  const id = useId()
  const showPoppover = () => {
    setOpen(true)
  }
  const hidePoppover = () => {
    setOpen(false)
  }
  return (
    <Element className={className} ref={reference} onMouseEnter={showPoppover} onMouseLeave={hidePoppover}>
      {children}
      <FloatingPortal id={id}>
        {open && (
          <AnimatePresence>
            <motion.div
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <div className='bg-white relative shadown-md rounded-sm border border-gray-200'>
                <span
                  ref={arrowRef}
                  className='border-x-transparent border-t-transparent border-b-white border-[11px] absolute -translate-y-full translate-y-[-95%] z-10'
                  style={{
                    left: middlewareData.arrow?.x,
                    top: middlewareData.arrow?.y
                  }}
                />
                {renderPopper}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </FloatingPortal>
    </Element>
  )
}
