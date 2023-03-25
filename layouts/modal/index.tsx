import React from 'react'
import type { ReactNode, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

interface IProps {
    open: boolean;
    close: Dispatch<SetStateAction<{ name: string, element: ReactNode }>>
    children?: ReactNode;
    isCenter?: boolean;
}

function ModalComponent({ children, open, close, isCenter } : IProps) {
  return (
    
    <Overlay open={open}>
        
        {/* Modal */}
        <Modal isCenter={isCenter} open={open}>

            {/* Modal.Header */}
            <Header>

                {/* CloseBtn Only */}
                {/* BackBtn Title and CloseBtn */}

            </Header>
            {/* End of Modal.Header */}
        
            {/* Modal.Body */}
                {children}
            {/* End of Modal.Body */}

            {/* Modal.Footer */}
                {/* Social Media */}
                {/* Logout */}
            {/* End of Modal.Footer */}

        </Modal>
        {/* End of Modal */}
    </Overlay>
  )
}

const Header = styled.div`
    
`

const Modal = styled.div<{ isCenter?: boolean, open: boolean }>`
    position: fixed;
    z-index: 150;
    
    border-radius: 10px;
    width: 320px;
    height: 500px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    background: #000;
    color: #000;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

    ${props => props.isCenter ?
        `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `
    :
        `
        top: 50px;
        right: 20vh;
        `
    }

    ${props => props.open ?
        `
            visibility: visible;
            opacity: 1;
            transition: visibility 0.2s, opacity 0.2s linear;
        `
        :
        `
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.2s, opacity 0.2s linear;
        `
    }
`

const Overlay = styled.div<{ open: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100vw;
    height: 100vh;

    background: rgba(0,0,0,0.5);

    ${props => props.open ?
        `
            visibility: visible;
            opacity: 1;
            transition: visibility 0.2s, opacity 0.2s linear;
        `
        :
        `
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.2s, opacity 0.2s linear;
        `
    }
`

export default ModalComponent