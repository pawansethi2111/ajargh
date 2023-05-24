import React, { useState, useEffect } from 'react';
import axios from "axios";

function Bookingscrren({ match }) {

  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  useEffect(async () => {
    try {
      setloading(true);
      const data = (
        await axios.post("/api/rooms/getroombyid", {
          roomid: match.params.roomid,
        })
      ).data;

      setroom(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      seterror(true);
    }
  }, []);

  return (
    <div className='m-5'>
      {loading ? (
        <h1><Loader/></h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" />
            </div>

            <div style={{ textAlign: "right" }}>
              <h1>Booking Details</h1>
              <hr />

              <b>
                <p>Name :</p>
                <p>From Date</p>
                <p>To Date :</p>
                <p>Max Count:{room.maxcount}</p>
              </b>

              <div style={{ textAlign: "right" }}>
                <b>
                  <h1>Amount</h1>

                  <hr />
                  <p>total Days:</p>
                  <p>Rent per day: {room.rentperday}</p>
                  <p>Total amount</p>
                </b>
              </div>

              <div style={{ float: "right" }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingscrren;
