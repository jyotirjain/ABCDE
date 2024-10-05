import Cookies from "js-cookie";

export const getUser = (method, role) => {
  let endpoint;
  if (method == "signupGoogle") {
    endpoint = `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/investor/signup/google/success`;
  } else {
    endpoint = `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/investor/login/google/success`;
  }
  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      // ,
      // body: {role:role}
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }

        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        Cookies.set("user", JSON.stringify(resObject.user));
        resolve(resObject.user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getloginUser = (method, role) => {
  let endpoint;
  // if(method == "signupGoogle")
  // {
  //   endpoint = `${process.env.REACT_APP_TEST_URL}/investor/signup/google/success`
  // }
  // else{
  endpoint = `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/investor/login/google/success`;
  // }
  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      // ,
      // body: {role:role}
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }

        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        Cookies.set("user", JSON.stringify(resObject.user));
        resolve(resObject.user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
