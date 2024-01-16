'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalExampleProps {
  children: React.ReactNode
  textButton: string
}

export default function ModalTemplate(props: PortalExampleProps) {
  const [showModal, setShowModal] = useState(false)
  const onClose = () => setShowModal(false)

  return (
    <>
      <button
        className="bg-white py-1 px-4 rounded border border-black"
        onClick={() => setShowModal(true)}
      >
        {props.textButton}
      </button>
      {showModal &&
        createPortal(
          <div className="modal-backdrop">
            <dialog className="modal">
              {props.children}
              <button className="close-button" onClick={onClose} />
            </dialog>
          </div>,
          document.body
        )}
    </>
  )
}
