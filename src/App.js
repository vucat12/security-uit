import React, { useEffect, useState } from 'react';
import "./styles.scss"
var md5 = require('md5');

function App() {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className="App">
      <h1>Thanh toán giao dịch</h1>
      <div className="main-transfer">
        <div className="form-transfer">
          <h2>Thông tin giao dịch</h2>
          <div className="form-group">
            <label>Người nhận:</label>
            <p>Nguyễn Văn A</p>
          </div>
          <div className="form-group">
            <label>Số tiền giao dịch:</label>
            <p>15.000.000 VNĐ</p>
          </div>
          <div className="form-group">
            <label>Nội dung giao dịch:</label>
            <p>Chuyển tiền thanh toán tiền máy tính</p>
          </div>
          <button onClick={() => { setIsShow(true); }}>Thanh toán</button>
        </div>
        <div className="card-transfer">
          {isShow ?
            <div className="card">
              <h2>Hóa đơn</h2>
              <p>Mã giao dịch: GT-20676</p>
              <p>Tên người nhận: Nguyễn Văn A</p>
              <p>Số tiền: 15.000.000 VNĐ</p>
              <p>Nội dung: Chuyển tiền thanh toán máy tính</p>
              <p>Ngày: 20/11/2021</p>
              <p style={{ fontWeight: "bold" }}>Mã giao dịch mã hóa: {md5("GT-20676")}</p>
            </div>
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
