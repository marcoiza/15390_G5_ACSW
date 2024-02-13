'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface PortalExampleProps {
  children: React.ReactNode
  textTitle: string
  textSubtitle?: string
  imgPath: string
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

export default function ModalTemplateImgBtn(props: PortalExampleProps) {
  const onClose = () => props.setShowModal(false)

  return (
    <>
      <button onClick={() => props.setShowModal(true)}>
        <Image
          className="p-1"
          src={props.imgPath}
          alt="Agregar"
          width={24}
          height={24}
        />
      </button>
      {props.showModal &&
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
