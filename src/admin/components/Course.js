import React, {useState, useContext, useEffect} from 'react'
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import axios from 'axios';
import ButtonModal from './ButtonModal';
import AlertforData from './AlertforData';

function Course() {
    const currentDate = new Date();
    const [hasData, setHasData] = useState(false)
    const currentYear = currentDate.getFullYear();
    const [dataFull, setDataFull] = useState(null)
    const [couts, setcouts] = useState([0,0,0])
    const [dataAws, setDataAws] = useState([])
    const [dataCeh, setDataCeh] = useState([])
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
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/62172f81-7cc8-454a-951c-ece76cdea654')
        .then(res => {
          console.log('gọi')
          const dataAws =[0,0,0,0,0,0,0,0,0,0,0,0]
          const dataCeh =[0,0,0,0,0,0,0,0,0,0,0,0]
          const dataTarget = [0,0,0,0,0]
          const databar = [[0,0,0], [0,0,0], [0,0,0]]//dữ liệu chart bar Khóa Học
          const dataRes = res.data // toàn bộ data
          const count = [0,0,0]
          try {
              dataRes.map(item => {
                  if(new Date(item.Time).getFullYear() === parseInt(currentYear)-2){
                      const tmp = item.Major
                      if(tmp > 10){
                          ++databar[0][parseInt(tmp)-11]
                          count[parseInt(tmp)-11]++
                          count[2]++
                      } 
                  }
                  if(new Date(item.Time).getFullYear() === parseInt(currentYear)-1){
                      const tmp = item.Major
                      if(tmp > 10){
                          ++databar[1][parseInt(tmp)-11]
                          count[parseInt(tmp)-11]++
                          count[2]++
                      }
                  }
                  if(new Date(item.Time).getFullYear() === parseInt(currentYear)){
                      const tmp = item.Major
                      if(tmp > 10){
                          ++databar[2][parseInt(tmp)-11]
                          count[parseInt(tmp)-11]++
                          count[2]++
                      }
                  }
              })
              setcouts(count)
              setDataBar(databar)
              const dataCurrentYear = dataRes.filter(item => new Date(item.Time).getFullYear() === year)//data năm gần nhất
              dataCurrentYear.map(item => {
                  if(item.Major === '11'){
                      const month = new Date(item.Time).getMonth()
                      dataAws[month]++
                      dataTarget[parseInt(item.Target)-1]++ 
                  }
                  else if(item.Major === '12'){
                      const month = new Date(item.Time).getMonth()
                      dataCeh[month]++
                      dataTarget[parseInt(item.Target)-1]++ 
                  }
              })
              setDataAws(dataAws)
              setDataCeh(dataCeh)
              setDataPie(dataTarget) 
              setHasData(true)
          } catch {
              console.log('something went wrong')
              setHasData(false)
          }
          setDataFull(res.data)
        })
        .catch(err => console.log('Không load được data Khoá học'), setHasData(false))


    
    }, [])

    //Line Chart
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'AWS',
                data: dataAws,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'CEH',
                data: dataCeh,
                borderColor: 'red',
                tension: 0.1
            },
        ],
    }

    //Bar Chart
    const dataBarChart = {
        labels: ['AWS', 'CEH'],
        datasets: [
            {
                label: currentYear-2,
                data: dataBar[0],
                backgroundColor: '#f37735',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: currentYear-1,
                data: dataBar[1],
                backgroundColor: '#00aedb',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: currentYear,
                data: dataBar[2],
                backgroundColor: '#d11141',
                borderColor: 'black',
                borderWidth: 1
            },
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
        const dataAws =[0,0,0,0,0,0,0,0,0,0,0,0]
        const dataCeh =[0,0,0,0,0,0,0,0,0,0,0,0]
        const dataTarget = [0,0,0,0,0]
        try {
            const dataCurrentYear = dataFull.filter(item => new Date(item.Time).getFullYear() === parseInt(newYear))//data năm gần nhất
                dataCurrentYear.map(item => {
                    if(item.Major === '11'){
                        const month = new Date(item.Time).getMonth()
                        dataAws[month]++
                        dataTarget[parseInt(item.Target)-1]++ 
                    }
                    else if(item.Major === '12'){
                        const month = new Date(item.Time).getMonth()
                        dataCeh[month]++
                        dataTarget[parseInt(item.Target)-1]++ 
                    }
                })
                setDataAws(dataAws)
                setDataCeh(dataCeh)
                setDataPie(dataTarget)   
        } catch {
            console.log('lỗi')
        }
           
    }   
    const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  return (
    <>
            <div className="container-fluid px-4 mt-114px">
                <div className="row g-3 my-3">
                    {hasData? '': <AlertforData/>}
                </div>
    <div className="row g-3 my-2">
        <div className="col-md-4">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[0]}</h3>
            <p className="fs-5">AWS Cloud Foundation</p>
            </div>
            <ButtonModal cl ='hidden-button' dt={dataFull} opti='Khóa học' cout={couts[0]} type={'11'}>
                <i className="fab fa-aws fs-1 primary-text border rounded-full secondary-bg p-3" />
            </ButtonModal>
        </div>
        </div>
        <div className="col-md-4">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[1]}</h3>
            <p className="fs-5">CEH (V12) Certified Ethical Hacker</p>
            </div>
            <ButtonModal cl ='hidden-button' dt={dataFull} cout={couts[1]} opti='Khóa học' type={'12'}>
                <i className="fas fa-user-shield fs-1 primary-text border rounded-full secondary-bg p-3" />
            </ButtonModal>
        </div>
        </div>
        <div className="col-md-4">
        <div className="p-3 bg-white h-100 shadow-sm d-flex justify-content-between align-items-center rounded">
            <div>
            <h3 className="fs-2">{couts[2]}</h3>
            <p className="fs-5">Tổng</p>
            </div>
            <ButtonModal cl ='hidden-button' dt={dataFull} opti='Khóa học' cout={couts[2]} type={'14'}>
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
                            <p className='fw-bold text-center' style={{paddingTop: '16px'}}>Biểu Đồ Biến Đổi Số Lượng Đăng Ký theo Khóa Học (Năm 
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
                        <p className='fw-bold text-center pt-3'>Đối tượng Đăng Ký theo Khóa Học Năm {year}</p>
                        <PieChart dataPie = {dataPieChart}/>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-xl-10">
                    <div className="bg-ttt">
                        <p className="fw-bold text-center pt-3">
                            Biểu Đồ Số Lượng Đăng Ký theo Năm và Khóa Học ({currentYear-2}-{currentYear})
                        </p>
                            <BarChart datachart={dataBarChart}/>
                    </div>
                </div>
            </div>
        </div>
    <></>
    </div>
    </>
  )
}

export default Course