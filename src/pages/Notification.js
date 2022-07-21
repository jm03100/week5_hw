import React from "react";
import Card from "../components/Card";
import {Grid} from "../elements";

const Notification = (porps) => {
  let noti = [
    { user_name: "sungwook", post_id: "jsw0913", image_url: ""},
  ]
  return (
    <React.Fragment>
      <Grid margin="60px"/>
      <Grid padding="15px">
        {noti.map((n) => {
          return (
            <Card key={n.post_id} {...n}/>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default Notification;