import { useEffect, useState } from "react"
import axios from "axios";

const Curency = () => {
  
    const [amount,setamount]=useState(1);
    const [fromcur,setfroumcur]=useState("USD");
    const [tocur,settocur]=useState("INR");
    const [covertedamount,setcounvertedamount]=useState(null);
    const [exchange,setexchange]=useState(null);


    useEffect(()=>{

        const getexchangerate=async ()=>{
             
           try{

              let url=`https://v6.exchangerate-api.com/v6/aca659624e6667f9e837c1c0/latest/${fromcur}` 
              
              const res=await axios.get(url);
              setexchange(res.data.conversion_rates[tocur])

           }
           catch(e){
              console.error("Error Fetching data",e);
           }

        }
        getexchangerate()
    },[fromcur,tocur])


    useEffect(()=>{
        if(exchange!==null){
            setcounvertedamount((amount*exchange).toFixed(2))
        }
    },[amount,exchange])

    const chnageamount=(e)=>{
        const valu =parseFloat(e.target.value)
        setamount(valu);
    }

    const fromechangecur=(e)=>{
        setfroumcur(e.target.value)
    }

    const tochangecur=(e)=>{
        settocur(e.target.value)
    }

    return (
        <div className=' main p-5 d-flex justify-content-center align-items-center vh-100' style={{backgroundColor:"#ffd17b"}}>

            <div className=' p-4 rounded rounded-3 ' style={{ width: "400px",backgroundColor:"white" }} >

                <div className=' d-flex justify-content-center'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2228/2228814.png" alt="" width={"100px"} />
                </div>

                <div className=''>
                    <h6 className=' text-center text-primary'>CURRENCY CONVERTED</h6>
                </div>

                <div className=''>
                    <label htmlFor=""  className=' text-muted m-1'>Amount :</label>
                    <input type="number" onChange={chnageamount}   className=' form-control'  value={amount || ""}/>
                </div>

                <div className='mt-3'>
                    <label htmlFor="" className=' text-muted m-1'>Form Currency :</label>
                    <select name="currency" onChange={fromechangecur}  className=' form-select' value={fromcur}>
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                        <option value="JPY">Japanese Yen</option>
                        <option value="CNY">Chinese Yuan</option>
                        <option value="INR">Indian Rupee</option>
                        <option value="AUD">Australian Dollar</option>
                        <option value="CAD">Canadian Dollar</option>
                        <option value="CHF">Swiss Franc</option>
                        <option value="SEK">Swedish Krona</option>
                        <option value="NOK">Norwegian Krone</option>
                        <option value="DKK">Danish Krone</option>
                        <option value="HKD">Hong Kong Dollar</option>
                        <option value="SGD">Singapore Dollar</option>
                        <option value="KRW">South Korean Won</option>
                        <option value="ZAR">South African Rand</option>
                        <option value="BRL">Brazilian Real</option>
                        <option value="RUB">Russian Ruble</option>
                        <option value="TRY">Turkish Lira</option>
                        <option value="MXN">Mexican Peso</option>
                        <option value="ILS">Israeli New Shekel</option>
                        <option value="TWD">New Taiwan Dollar</option>
                        <option value="THB">Thai Baht</option>
                        <option value="IDR">Indonesian Rupiah</option>
                        <option value="MYR">Malaysian Ringgit</option>
                        <option value="PHP">Philippine Peso</option>
                        <option value="VND">Vietnamese Dong</option>
                    </select>


                </div>

                <div className='mt-4'>  
                    <label htmlFor="" className=' text-muted m-1'>TO Currency :</label>
                    <select name="currency" onChange={tochangecur} className=' form-select' value={tocur}>
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                        <option value="JPY">Japanese Yen</option>
                        <option value="CNY">Chinese Yuan</option>
                        <option value="INR">Indian Rupee</option>
                        <option value="AUD">Australian Dollar</option>
                        <option value="CAD">Canadian Dollar</option>
                        <option value="CHF">Swiss Franc</option>
                        <option value="SEK">Swedish Krona</option>
                        <option value="NOK">Norwegian Krone</option>
                        <option value="DKK">Danish Krone</option>
                        <option value="HKD">Hong Kong Dollar</option>
                        <option value="SGD">Singapore Dollar</option>
                        <option value="KRW">South Korean Won</option>
                        <option value="ZAR">South African Rand</option>
                        <option value="BRL">Brazilian Real</option>
                        <option value="RUB">Russian Ruble</option>
                        <option value="TRY">Turkish Lira</option>
                        <option value="MXN">Mexican Peso</option>
                        <option value="ILS">Israeli New Shekel</option>
                        <option value="TWD">New Taiwan Dollar</option>
                        <option value="THB">Thai Baht</option>
                        <option value="IDR">Indonesian Rupiah</option>
                        <option value="MYR">Malaysian Ringgit</option>
                        <option value="PHP">Philippine Peso</option>
                        <option value="VND">Vietnamese Dong</option>
                    </select>


                </div>
           
                <div className=' border border  border-primary  p-2 mt-4 mb-3  align-items-center d-flex  justify-content-center  text-primary fw-bold'>
                    {/* <h6 className='  align-items-center d-flex  justify-content-center  text-primary fw-bold'>1 INR IS Equal to 1.78 JPY </h6> */}
                    {amount} {fromcur} IS  Equal to {covertedamount} {tocur}
                </div>

                <div>
                     <p className=" text-center" style={{fontSize: '8px'}}>Designed by <a href="https://github.com/sekarsha?tab=repositories">@Sekar</a></p>
                </div>  
              
            </div>

        </div>
    )
}

export default Curency