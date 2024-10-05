import "./drop.css";
import { cashfreeSandbox, cashfreeProd } from "cashfree-pg-sdk-javascript";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";

import paymentApi from "../../Apis/payment";
import { toast } from "react-toastify";
function CashfreeDrop() {
  const navigate = useNavigate();
  const location = useLocation();
  const paymentData = location?.state?.data;
  if (!paymentData) {
    navigate("/");
  }
  const [orderToken] = useState(paymentData.payment_session_id);
  const [style] = useState({
  	backgroundColor:"#ffffff",
		color:"#f3b617",
		fontSize:"16px",
		fontFamily:"Lato",
		errorColor:"#e14d2a",
		theme:"light",
  });
  const [isProd, setIsProd] = useState(true);
  const [components] = useState([
    "order-details",
    "card",
    "upi",
    "app",
    "netbanking",
  ]);

  const checkandupdate = async () => {
   const payment_verify =  await paymentApi.onlinePaymentVerify({ order_id: paymentData.order_id });
   return payment_verify;
  };

  const cbs = async (data) => {
    if (data.order && data.order.status === "PAID") {
      // alert("paid")
      const checkupdate = await  checkandupdate();
      if(checkupdate.code === 200){
      navigate("/portfolio");}
      else {
        navigate("/contactus");
        toast.error("Payment wasn't confirmed kindly contact support");
      }
    } else {
      navigate("/contactus");
      toast.error("Payment wasn't confirmed kindly contact support");
    }
  };

  const cbf = (data) => {
    // alert(data.order.errorText || 'AAAA');
    navigate("/contactus");
    toast.error("Payment wasn't confirmed kindly contact support", {
      autoClose: 10000,
    });
  };
  const dropinConfig = {
    components: [
      "card",
      "upi",
      "app",
      "netbanking",
      "paylater",
      "creditcardemi",
      "cardlessemi",
      "order-details",
    ],
    onSuccess: function (data) {},
    onFailure: function (data) {},
    style: {
      backgroundColor: "#fce0f6",
      color: "#df1b41",
      fontSize: "14px",
      fontFamily: "Lato",
      errorColor: "#6c4ab6",
      theme: "light",
    },
  };
  const renderDropin = () => {
    if (orderToken === "") {
      // alert('Order Token is empty');
      return;
    }
    if (!components.length) {
      // alert('No drop in specified');
      return;
    }
    let parent = document.getElementById("drop_in_container");
    parent.innerHTML = "";
    let cashfree;
    if (isProd) {
      cashfree = new cashfreeProd.Cashfree(orderToken);
    } else {
      cashfree = new cashfreeSandbox.Cashfree(orderToken);
    }

    cashfree.drop(parent, {
      onSuccess: cbs,
      onFailure: cbf,
      components,
      style,
    });
  };

  useEffect(() => {
    renderDropin();
  }, []);

  return (
    <div className="Drop">
      <div
        className="dropin-parent"
        id="drop_in_container"
        style={{ height: "600px" }}
      ></div>
    </div>
  );
}

export default CashfreeDrop;
