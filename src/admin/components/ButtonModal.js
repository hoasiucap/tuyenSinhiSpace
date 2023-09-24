import React, {useState, useEffect} from 'react'

function ButtonModal(props) {
    const{cl, dt, type, cout, opti} =props
    let indexrow = 1
    const[data, setData] = useState(dt)
    const indexBut = `#exampleModal${type}`
    const indexModal = `exampleModal${type}`
    const handleClick = () => {
      console.log('đã click')
      if(dt){
        let dtCopy = [...dt]
        if(type === '4'){
          let dataReverse = dtCopy.reverse()
          const newData = dataReverse.filter(item => item.Major === '1' || item.Major === '2' || item.Major === '3')  
          setData(newData)
        }
        else if(type === '14'){
          let dataReverse = dtCopy.reverse()
          const newData = dataReverse.filter(item => item.Major === '11' || item.Major === '12')  
          setData(newData)
        }
        else{
          const newData = dtCopy.reverse().filter(item => item.Major===type)  
          console.log('OK')
          setData(newData) 
        }
      }
      else{
        console.log('NOOOOOOOOOOOOOOOOO')
      }

      try {
      } catch {
        console.log('lỗi rồi2')
      }
    }
    // useEffect(() =>{
    //   if(dt){
    //     // const newData = dt.filter(item => item.Major===type)  
    //     console.log('OK CCCCCC')
    //     // setData(newData)  
    //   }
    //   try {
    //     const newData = dt.filter(item => item.Major===type)   
    //     // setData(newData)  
    //   } catch {
    //     console.log('lỗi rồi1')
    //   }
    // }, [])
  return (
    <>
      <button
    type="button" onClick={handleClick}
    className= {cl}
    data-bs-toggle="modal"
    data-bs-target={indexBut}
  >
    {props.children}
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id= {indexModal}
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
        <table className="table bg-white rounded shadow-sm table-hover">
            <thead>
            <tr>
                <th scope="col">
                #
                </th>
                <th scope="col" width={400}>Tên</th>
                <th scope="col" width={300}>Số điện thoại</th>
                <th scope="col" width={300}>Email</th>
                <th scope="col"width={300}>{opti}</th>
                <th scope="col"width={300}>Đối tượng</th>
                <th scope="col"width={300}>Thời gian</th>
            </tr>
            </thead>
            <tbody>
              {data && data.map(items => 
                (<tr>
                <th scope="row">{parseInt(indexrow) <= cout ? indexrow : ''}</th>
                <td>{items.Name}</td>
                <td>{items.Phone}</td>
                <td>{items.Email}</td>
                <td>
                  {items.Major === '1' ? 'An ninh mạng': ''}
                  {items.Major === '2' ? 'Phát triển phần mềm': ''}
                  {items.Major === '3' ? 'Thiết kế đồ họa': ''}
                  {items.Major === '11' ? 'AWS': ''}
                  {items.Major === '12' ? 'CEH (V12)': ''}
                </td>
                <td>
                  {items.Target === '1' ? 'Đang học 12': ''}
                  {items.Target === '2' ? 'Tốt nghiệp THPT': ''}
                  {items.Target === '3' ? 'Học xong 12': ''}
                  {items.Target === '4' ? 'Sinh viên': ''}
                  {items.Target === '5' ? 'Người đi làm': ''}
                </td>
                <td>{items.Time}</td>
                <td style={{display: 'none'}}>
                  {parseInt(indexrow) <= cout && indexrow++}
                </td>
                </tr>)
              )}

            </tbody>
        </table>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* <Modal data={data} numberM={index}/> */}
    </>
  )
}

export default ButtonModal