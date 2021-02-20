import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MSzaFbhBcubmyLKGIcV2d_V8l52n5VdID7t7ZtGdfP4l8BkbIdMFaBV32OpwyDtAck8Ohc6vKPTEpl0ItQYO1t31lOCZjo1UaAz-lOI-CQVQuKyLb8_rvPiMSb7gXHYx",
  }
});
