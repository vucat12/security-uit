import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Select } from 'antd';
const { Option } = Select;
var md5 = require('md5');
let block = require('../private-blockchain/index.js');

const Root = () => {
    const [isShow, setIsShow] = useState(false)
    const [currentAccount, setAccount] = useState("Jonny Dang")
    const [privateKey, setKey] = useState('')
  
    const handleChange = (value) => {
      setAccount(value)
    }

    const checkPrivateKey = () => {
        if(privateKey=='f1357831e19a7338285381d2a3eaf223') {
            block.blockChain.addBlock({
                from: 'Jonny Dang',
                to: 'Nguyễn Anh Khoa',
                amount: '10.000.000 DBZ'
            }, 'Nguyễn Anh Khoa','Jonny Dang')
        }
    }

    return (
        <div className="App">
      <div className="select-account">
        <Select value={currentAccount} style={{ width: 120 }} onChange={handleChange}>
          <Option value="Nguyễn Anh Khoa">Nguyễn Anh Khoa</Option>
          <Option value="Jonny Dang">Jonny Dang</Option>
        </Select>
      </div>
        
      <h1>Thanh toán giao dịch</h1>
      <h1 style={{fontSize: '20px'}}>{currentAccount}</h1>
      <h1>Private Key: {md5(currentAccount)}</h1>
      <div className="main-transfer">
        <div className="form-transfer">
          <h2>Thông tin giao dịch</h2>
          <div className="form-group">
            <label>Người nhận:</label>
            <p>{currentAccount=='Nguyễn Anh Khoa' ? 'Jonny Dang' : 'Nguyễn Anh Khoa'}</p>
          </div>
          <div className="form-group">
            <label>Số tiền giao dịch:</label>
            <p>10.000.000 DBZ</p>
          </div>
          <div className="form-group">
            <label>Nội dung giao dịch:</label>
            <p>Chuyển đồng Diamond Boyz Coin</p>
          </div>
          <button onClick={() => { setIsShow(!isShow); }}>Thanh toán</button>
        </div>
        <div className="card-transfer">
          {isShow ?
            <div className="card">
              <h2>Hóa đơn</h2>
              <p>Mã giao dịch: GT-20676</p>
              <p>Tên người nhận: {currentAccount=='Nguyễn Anh Khoa' ? 'Jonny Dang' : 'Nguyễn Anh Khoa'}</p>
              <p>Số tiền: 10.000.000 DBZ</p>
              <p>Nội dung: Chuyển đồng Diamond Boyz Coin</p>
              <p>Ngày: 30/12/2021</p>
              <p style={{ fontWeight: "bold" }}>Nhập private key của người nhận: </p>
              <Input placeholder="Private Key" value={privateKey} onChange={(e) => setKey(e.target.value)}/>
              <Button style={{marginTop: 10}} type="primary" onClick={() => checkPrivateKey()}>Hoàn tất</Button>
                    <br />
              <Button style={{marginTop: 10}} type="primary" onClick={() =>console.log(block)}>Kiểm tra Block</Button>
            </div>
            : null}
        </div>
      </div>
    </div>
    );
}

export default Root;
