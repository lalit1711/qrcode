import axios from "axios";
class Service {
  setTheDataToApi() {
    fetch(
      "https://xo3dnghur7.execute-api.us-east-2.amazonaws.com/dev/registration_app_get_check_in_details?event_id=testkonfhubslsdeploymentb29912c5",
      {
        method: "POST",
        body: JSON.stringify({
          booking_id: "fedef96c"
        })
      }
    ).then(res => {
      console.log(res);
    });
  }
}

export default Service;
