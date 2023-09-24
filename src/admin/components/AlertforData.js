import React from 'react'

function AlertforData() {
  return (
//     <div className="alert alert-danger" role="alert">
//   A simple danger alert—check it out!
// </div>
<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Lỗi truyền dữ liệu:</strong> Vui lòng kiểm tra đường dẫn kết nối đến API
  <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  />
</div>
  )
}

export default AlertforData