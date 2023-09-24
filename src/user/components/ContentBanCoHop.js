import React from 'react'
import hinhwhy from '../access/img/why.jpg'
import { NavLink } from 'react-router-dom'

function ContentBanCoHop() {
  return (
    <div className="container" id="about">
  <h3>Bạn có phù hợp học ngành công nghệ thông tin?</h3>
  <hr />
  <div className="row" style={{ marginTop: 50 }}>
    <div className="col-md-5 py-3 py-md-0">
      <div className="card">
        <img src={hinhwhy} alt="" />
      </div>
    </div>
    <div className="col-md-7 py-3 py-md-0">
      <p className='mt-12 fz-18 text-dark'>
        Công nghệ Thông tin (CNTT) đã thu hút sự quan tâm đặc biệt từ phụ huynh
        và học sinh trong những năm gần đây. Tuy nhiên, bạn đã bao giờ tự đặt
        câu hỏi liệu mình thực sự đam mê và muốn theo đuổi ngành này chưa?
      </p>
      <p className='fz-18 text-dark'>
        Người làm việc trong lĩnh vực CNTT thường dành hàng giờ để tương tác với
        máy tính mà vẫn giữ được sự hứng thú. Họ luôn cập nhật thông tin, không
        ngừng nâng cao kiến thức để theo kịp tốc độ phát triển của công nghệ.
      </p>
      <p className='fz-18 text-dark'>
        Ngoài ra, CNTT cũng đòi hỏi sự nhẫn nại, kiên nhẫn và sẵn sàng giải
        quyết những thách thức phức tạp. Đó chính là một phần không thể thiếu
        của công việc này."
      </p>
      <a className='btn btn-dangky text-white fz-18' href='#dangkys'>Đăng Ký Ngay</a>
    </div>
  </div>
</div>

  )
}

export default ContentBanCoHop