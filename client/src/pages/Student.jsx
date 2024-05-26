import React from 'react'

const Student = () => {
  return (
    <div className='student'>
      <div className='container_student'>
        <div className='student__header'>
        </div>
        <div className='student__content'>
          <div id="divLeft">
            {/* <table> 
              <tr>
                <td onClick={}>Tìm kiếm thông tin</td>
              </tr>
              <tr>
                <td onClick={}>Chỉnh hồ sơ</td>
              </tr>
            </table> */}
            <button>Chỉnh sửa thông tin</button>
            <button>Đổi mật khẩu</button>
          </div>
          <div id="divRight">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student