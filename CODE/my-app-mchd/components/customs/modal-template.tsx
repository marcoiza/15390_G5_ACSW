'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalExampleProps {
  readonly children: React.ReactNode
  readonly textTitle: string
  readonly textSubtitle?: string
  readonly textButton: string
  readonly btnLayout?: string
}

export default function ModalTemplate(props: PortalExampleProps) {
  const [showModal, setShowModal] = useState(false)
  const onClose = () => setShowModal(false)

  return (
    <>
      <button
        className={props.btnLayout ?? 'btn-success'}
        onClick={() => setShowModal(true)}
      >
        {props.textButton}
      </button>
      {showModal &&
        createPortal(
          <div className="modal-backdrop">
            <dialog className="modal">
              <div className="modal-header">
                <h2 className="text-white font-bold text-2xl mr-6">
                  {props.textTitle}
                </h2>
                {props.textSubtitle ?? (
                  <h3 className="text-white font-bold text-xl">
                    {props.textSubtitle}
                  </h3>
                )}
              </div>
              <div className="modal-body">{props.children}</div>
              <button className="close-button" onClick={onClose} />
            </dialog>
          </div>,
          document.body
        )}
    </>
  )
}
