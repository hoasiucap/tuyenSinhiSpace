import React, { useState, useEffect, useContext } from 'react'
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import ButtonModal from './ButtonModal';
import axios from 'axios';
import AlertforData from './AlertforData';

function Major() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [hasData, setHasData] = useState(false)
    useEffect(() =>{
        axios.get('https://sheet.best/api/sheets/62172f81-7cc8-454a-951c-ece76cdea654')
        .then(res => {
          console.log('gọi')
          setDataFull(res.data)
          const dataRes = res.data // toàn bộ data
          const dataANM =[0,0,0,0,0,0,0,0,0,0,0,0]
          const dataPM =[0,0,0,0,0,0,0,0,0,0,0,0]
          const dataDH =[0,0,0,0,0,0,0,0,0,0,0,0]
          const dataTarget = [0,0,0,0,0]
          const databar = [[0,0,0], [0,0,0], [0,0,0]]//dữ liệu chart bar ngành học
          const cout = [0,0,0,0]
          try {
              dataRes.map(item => {
                  if(new Date(item.Time).getFullYear() === parseInt(currentYear)-2){
                      const tmp = item.Major
                      if(tmp < 4){
                          ++databar[0][parseInt(tmp)-1]
                          cout[parseInt(tmp)-1]++
                          cout[3]++
                      } 
                  }
                  if(new Date(item.Time).getFullYear() === parseInt(currentYear)-1){
                      const tmp = item.Major
                      if(tmp < 4){
                          ++databar[1][parseInt(tmp)-1]
                          cout[parseInt(tmp)-1]++
                          cout[3]++
                      }
                  }
                  if(new Date(item.Time).getFullYear() === parseInt(currentYear)){
                      const tmp = item.Major
                      if(tmp < 4){
                          ++databar[2][parseInt(tmp)-1]
                          cout[parseInt(tmp)-1]++
                          cout[3]++
                      }
                  }
              })
              setcouts(cout)
              setDataBar(databar)
              const dataCurrentYear = dataRes.filter(item => new Date(item.Time).getFullYear() === year)//data năm gần nhất
              dataCurrentYear.map(item => {
                  if(item.Major === '1'){
                      const month = new Date(item.Time).getMonth()
                      dataANM[month]++
                      dataTarget[parseInt(item.Target)-1]++ 
                  }
                  else if(item.Major === '2'){
                      const month = new Date(item.Time).getMonth()
                      dataPM[month]++
                      dataTarget[parseInt(item.Target)-1]++ 
                  }
                  else if(item.Major === '3'){
                      const month = new Date(item.Time).getMonth()
                      dataDH[month]++
                      dataTarget[parseInt(item.Target)-1]++ 
                  }
              })
              setDataANM(dataANM)
              setDataPM(dataPM)
              setDataDH(dataDH)
              setDataPie(dataTarget) 
              setHasData(true)
          } catch {
              console.log('something went wrong')
              setHasData(false)
          }
        })
        .catch (err => {console.log('Không load được data ngành học'); setHasData(false)})
  

    
    }, [])
    const [dataFull, setDataFull] = useState(null)
    const [couts, setcouts] = useState([0,0,0,0])
    const [dataANM, setDataANM] = useState([])
    const [dataPM, setDataPM] = useState([])
    const [dataDH, setDataDH] = useState([])
    const [dataBar, setDataBar] = useState([0,0,0], [0,0,0], [0,0,0])
    const [dataPie, setDataPie] = useState([])
    const [year, setYear] = useState(currentYear);
    const [labels, setLabels] = useState([
        `1/${year}`,
        `2/${year}`,
        `3/${year}`,
        `4/${year}`,
        `5/${year}`,
        `6/${year}`,
        `7/${year}`,
        `8/${year}`,
        `9/${year}`,
        `10/${year}`,
        `11/${year}`,
        `12/${year}`,
    ])
    //Line Chart
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'An ninh mạng',
                data: dataANM,
                // data: [8,7,9, 0, 9, 2],
                borderColor: '#d11141',
                tension: 0.3
            },
            {
                label: 'Phần mềm',
                data: dataPM,
                // data: [1,2,3,7,5,3,7,8,9],
                borderColor: '#00aedb',
                tension: 0.3

            },
            {
                label: 'Đồ họa',
                data: dataDH,
                // data: [4,7,2,9,5,3,5,7,8],
                borderColor: ' #00b159',
                tension: 0.3
            }
        ],
    }
    const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }



    //Bar Chart
    const dataBarChart = {
        labels: ['ANM', 'PTPM', 'TKĐH'],
        datasets: [
            {
                label: currentYear-2,
                data: dataBar[0],
                backgroundColor: '#f6cd61',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: currentYear-1,
                data: dataBar[1],
                backgroundColor: '#0e9aa7',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: currentYear,
                data: dataBar[2],
                backgroundColor: '#fe9c8f',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    //Pie Chart
    const dataPieChart = {
        labels: ['Đang học 12', 'Tốt nghiệp THPT', 'Học xong 12', 'Sinh viên', 'Người đi làm'],
        datasets: [
            {
                label: 'Số lượng',
                data: dataPie,
                // data: [1,2,3,4,5],
                borderColor: 'black',
                backgroundColor: ['red', 'aqua', 'purple', 'pink', 'yellow']
            }
        ]
    }

    const handleChangeYear = (e) =>{
        const newYear = e.target.value
        setYear(newYear)
        setLabels ([
            `1/${newYear}`,
            `2/${newYear}`,
            `3/${newYear}`,
            `4/${newYear}`,
            `5/${newYear}`,
            `6/${newYear}`,
            `7/${newYear}`,
            `8/${newYear}`,
            `9/${newYear}`,
            `10/${newYear}`,
            `11/${newYear}`,
            `12/${newYear}`,
        ], [])
        const dataANM =[0,0,0,0,0,0,0,0,0,0,0,0]
        const dataPM =[0,0,0,0,0,0,0,0,0,0,0,0]
        const dataDH =[0,0,0,0,0,0,0,0,0,0,0,0]
        const dataTarget = [0,0,0,0,0]
        try {
            const dataCurrentYear = dataFull.filter(item => new Date(item.Time).getFullYear() === parseInt(newYear))//data năm gần nhất
                dataCurrentYear.map(item => {
                    if(item.Major === '1'){
                        const month = new Date(item.Time).getMonth()
                        dataANM[month]++
                    }
                    else if(item.Major === '2'){
                        const month = new Date(item.Time).getMonth()
                        dataPM[month]++
                    }
                    else if(item.Major === '3'){
                        const month = new Date(item.Time).getMonth()
                        dataDH[month]++
                    }
                    dataTarget[parseInt(item.Target)-1]++ 
                })
                setDataANM(dataANM)
                setDataPM(dataPM)
                setDataDH(dataDH)
                setDataPie(dataTarget)   
        } catch {
            
        }
           
    }
  return (
    <>
        <div className="container-fluid px-4 mt-114px">
            <div className="row g-3 my-2">

            {hasData? '': <AlertforData/>}
            </div>
    <div className="row g-3 my-2">
        <div className="col-md-3">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[0]}</h3>
            <p className="fs-5">An ninh mạng</p>
            </div>
            {/* <ButtonModal cl ='hidden-button' dt={dataFull} type={'1'}> */}
            <ButtonModal cl ='hidden-button' dt={dataFull} cout={couts[0]} opti='Ngành học' type={'1'}>
                <i className="fas fa-shield-alt fs-1 primary-text border rounded-full secondary-bg p-3" />
            </ButtonModal>

        </div>
        </div>
        <div className="col-md-3">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[1]}</h3>
            <p className="fs-5">Phát triển phần mềm</p>
            </div>
            <ButtonModal cl ='hidden-button' dt={dataFull} cout={couts[1]} opti='Ngành học' type={'2'}>
                <i className="fas fa-code fs-1 primary-text border rounded-full secondary-bg p-3" />
            </ButtonModal>
        </div>
        </div>
        <div className="col-md-3">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[2]}</h3>
            <p className="fs-5">Thiết kế đồ họa</p>
            </div>
            <ButtonModal cl ='hidden-button' dt={dataFull} cout={couts[2]} opti='Ngành học' type={'3'}>
                <i className="fas fa-palette fs-1 primary-text border rounded-full secondary-bg p-3" />
            </ButtonModal>
        </div>
        </div>
        <div className="col-md-3">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[3]}</h3>
            <p className="fs-5">Tổng</p>
            </div>
            <ButtonModal cl ='hidden-button' dt={dataFull} cout={couts[3]} opti='Ngành học' type={'4'}>
                <i className="fas fa-layer-group fs-1 primary-text border rounded-full secondary-bg p-3" />
            </ButtonModal>
        </div>
        </div>
    </div>
    </div>
        <div className='col mt-114px'>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-xl-8 mb-3">
                    <div className='bg-ttt'>
                        <div className="" style={{padding: '0px 8px 16px 8px'}}>
                            <p className='fw-bold text-center' style={{paddingTop: '16px'}}>Biểu Đồ Biến Đổi Số Lượng Đăng Ký theo Ngành Học (Năm 
                                <select value={year} onChange={handleChangeYear}>
                                    <option value={currentYear-2}>{currentYear-2}</option>
                                    <option value={currentYear-1}>{currentYear-1}</option>
                                    <option value={currentYear}>{currentYear}</option>
                                </select>)
                            </p>
                            <LineChart data={data} options={options}/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-4 mb-3" style={{}}>
                    <div className="bg-ttt" style={{padding: '0 32px'}}>
                        <p className='fw-bold text-center pt-3'>Đối tượng Đăng Ký theo Ngành Học Năm {year}</p>
                        <PieChart dataPie = {dataPieChart}/>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-xl-10">
                    <div className="bg-ttt">
                        <p className="fw-bold text-center pt-3">
                            Biểu Đồ Số Lượng Đăng Ký theo Năm và Ngành Học ({currentYear-2}-{currentYear})
                        </p>
                            <BarChart datachart={dataBarChart} />
                    </div>
                </div>
            </div>
        </div>

        <></>
        </div>
    </>

  )
}

export default Major