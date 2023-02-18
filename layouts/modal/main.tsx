import React from 'react'
import styled from 'styled-components'

export default function Main() {
  return (
    <Modal>
        <button>
            ข้อมูลส่วนตัว
        </button>
        <button>
            เปลี่ยนรหัส
        </button>
        <button>
            สถิติการเล่น
        </button>
        <button>
            ข้อมูลส่วนตัว
        </button>
        <button>
            ข้อมูลส่วนตัว
        </button>
        <button>
            ข้อมูลส่วนตัว
        </button>

    </Modal>
  )
}

const Modal = styled.div`
    position: fixed;
    top: 50px;
    right: 20vh;
    width: 320px;
    height: 450px;
    background-color: #fff;
    color: #000;
    z-index: 9999;
`