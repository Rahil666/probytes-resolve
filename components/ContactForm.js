import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function ContactForm() {
  const router = useRouter();

  const utm_code = router.asPath;

  console.log("utm_code", utm_code);
  // Local state for holding form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [userLive, setLiveLocation] = useState();

  useEffect(() => {
    fetch("https://api.testreveal.com:3013/api/get-client-location")
      .then((response) => response.json())
      .then((data) => {
        console.log("UserLocation", data);
        setLiveLocation(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleNameChange = (e) => {
    // Allow only alphabets
    const regex = /^[a-zA-Z\s]*$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue) || inputValue === "") {
      setName(inputValue);
    }
  };

  // submitFormData
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    // alert("Working")
    // console.log('Sending')
    await fetch("https://admin.officecaller.com/api/leads/website_lead/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Probytes Website",
        first_name: name,
        email: email,
        phone: "NA",
        city: "Not Available, Not Available",
        state: "",
        country: "Not Available",
        address_line: "",
        latitude: "",
        longitude: "",
        contact_lead: "Lead from Probytes",
        app_category: "No Category",
        category_text: "Lead from Probytes",
        app_platform: "Lead from Probytes",
        cross_platfrom_status: "NA",
        which_cross_platform: "NA",
        grand_cost: "",
        // "enq_date": enq_date,
        favourite: "",
        enq_through: utm_code,
        enq_from: utm_code,
        enquiryfrom: utm_code,
        country_code: "Not Available",
        choosen_approach: "NA",
        choosen_devices: "NA",
        choosen_screen_count: 0,
        choosen_login_methods: [""],
        // "choosen_features": [utm_code],
        choosen_features: [
          userLive.country_name,
          userLive.region_name,
          userLive.city,
          userLive.country_code,
          userLive.time_zone.current_time,
          userLive.currency.name,
          userLive.isp,
          userLive.latitude,
          userLive.longitude,
        ],
        choosen_language: "NA",
        choosen_admin: "NA ",
        admin_efforts: 0,
        choosen_webapp: "NA",
        secondary_app: "NA",
        screen_efforts: 0,
        webservices: 0,
        webapp_efforts: 0,
        ios_efforts: 0,
        android_efforts: 0,
        crossplatform_efforts: 0,
        secondary_app_efforts: 0,
        features_efforts: 0,
        database_efforts: 0,
        grand_total_efforts: 0,
        approx_cost: "NA",
        timeline_month: "NA",
        user_comment: message,
        // "mail_date": enq_date,
        apikey: "7dac0fcac909b349",
      }),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        router.push("/thank-you");
        console.log("Response succeeded!");
      } else {
        console.log("Something went wrong...please check");
      }
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit3(e);
        }}
      >
        <div className="row  row-r ">
          <div className="col-sm-6   ">
            <div className="form-group mt-2 ">
              <input
                type="text"
                className="form-control"
                name="your_name"
                placeholder="Name"
                value={name}
                onChange={(e) => handleNameChange(e)}
                required
              />
            </div>
          </div>
          <div className="col-sm-6 mt-2">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="your_email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="form-group">
              <textarea
                className="form-control"
                rows="4"
                name="your_message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <br />
          <div className="col-12" style={{ position: "relative" }}>
            <button
              className="col-12  submitcolor mb-4"
              type="submit"
              value="SUBMIT"
              id="submit_btn"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
