import React from 'react'
import react, { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export default function Subscribe() {

    const router  = useRouter();
   
    const utm_code = router.asPath;

    console.log("utm_code" , utm_code)
    // Local state for holding form data
  
    const [email, setEmail] = useState('');
    const [userLive , setLiveLocation] = useState();
    const [userMsg , userMsgResult] = useState()


    useEffect(() => {
        fetch('https://api.testreveal.com:3013/api/get-client-location')
          .then(response => response.json())
          .then(data => {
            console.log("UserLocation" , data)
            setLiveLocation(data)
          })
          .catch(error => console.log(error))
      }, []);


   // submitFormData
   const handleSubmit3 = async (e) => {
    e.preventDefault()
    // alert("Working")
    // console.log('Sending')
    await fetch('https://admin.officecaller.com/api/leads/website_lead/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": "Probytes Email Subscribe",
            "first_name": 'NA',
            "email": email,
            "phone": 'NA',
            "city": "Not Available, Not Available",
            "state": "NA",
            "country": "Not Available",
            "address_line": 'NA',
            "latitude": "", "longitude": "",
            "contact_lead": "Lead from Probytes",
            "app_category": "No Category",
            "category_text": "Lead from Probytes",
            "app_platform": "Lead from Probytes",
            "cross_platfrom_status": "NA",
            "which_cross_platform": "NA",
            "grand_cost": "",
            // "enq_date": enq_date,
            "favourite": "",
            "enq_through": utm_code,
            "enq_from": utm_code,
            "enquiryfrom": utm_code,
            "country_code": "Not Available",
            "choosen_approach": "NA",
            "choosen_devices": "NA",
            "choosen_screen_count": 0,
            "choosen_login_methods": [""],
            // "choosen_features": [utm_code],
            "choosen_features": [userLive.country_name , userLive.region_name , userLive.city , userLive.country_code , userLive.time_zone.current_time , userLive.currency.name , userLive.isp , userLive.latitude , userLive.longitude ],
            "choosen_language": "NA",
            "choosen_admin": "NA ",
            "admin_efforts": 0,
            "choosen_webapp": "NA",
            "secondary_app": "NA",
            "screen_efforts": 0,
            "webservices": 0,
            "webapp_efforts": 0,
            "ios_efforts": 0,
            "android_efforts": 0,
            "crossplatform_efforts": 0,
            "secondary_app_efforts": 0,
            "features_efforts": 0,
            "database_efforts": 0,
            "grand_total_efforts": 0,
            "approx_cost": "NA",
            "timeline_month": "NA",
            "user_comment": '',
            // "mail_date": enq_date,
            "apikey": "7dac0fcac909b349"
        })
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) 
        {
           // router.push('/thank-you')
            userMsgResult("Mail Response succeeded!")
            // console.log('Response succeeded!');
        } else {
            console.log('Something went wrong...please check')
        }
    })
}


  return (
    <>
    
    <form onSubmit={(e) => { handleSubmit3(e) }}>
            <div className="form-group" style={{ display: "flex", position: "relative", width: "100%",}}>
                        <input
                          type="email"
                          placeholder="Mail"
                          id="Email_subscribe"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                       
                        <button className='subscribe_submit' type="submit">Send</button>
                      </div>
                      
                    </form>
                    <p className='user-msg'>{userMsg} </p>
    </>
  )
}
