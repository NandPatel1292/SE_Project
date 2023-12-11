import React, { useEffect, useState } from "react";
import BillpayLogo from "../../components/BillpayLogo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { subscribePlanAsyncThunk } from "../../features/user/userSlice";
import Card from "../../components/Card";
import axios from "axios";

const SelectPlan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.user);

  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (selectedPlan) {
      handelPayment();
      dispatch(subscribePlanAsyncThunk(selectedPlan));
    }
  }, [selectedPlan, dispatch]);

  const handelPayment = async () => {
    const body =
      selectedPlan === "trial"
        ? { items: [{ id: 1, quantity: 1 }] }
        : { items: [{ id: 2, quantity: 1 }] };

    axios
      .post("/api/user/create-checkout-session", body)
      .then((res) => {
        console.log(res.data);
        window.location = res.data.url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  const handlePlanSelection = (plan) => {
    if (plan === "7 Days Of Free Trial") {
      setSelectedPlan("trial");
    } else {
      setSelectedPlan("premium");
    }
  };

  return (
    <>
      <BillpayLogo>
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="w-full text-white mb-5 text-5xl font-bold font-['Inter'] tracking-tight">
              Select Plan
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div className="flex flex-row justify-between gap-4">
                <div className="basis-1/2">
                  <Card
                    title={"7 Days Of Free Trial"}
                    offer={"$30/month"}
                    btnText={"Start Free Trial"}
                    handleCardClick={handlePlanSelection}
                    isSelected={selectedPlan === "trial"}
                  />
                </div>
                <div className="basis-1/2">
                  <Card
                    title={"Get 10% OFF"}
                    offer={"$324/year"}
                    btnText={"Subscribe"}
                    handleCardClick={handlePlanSelection}
                    isSelected={selectedPlan === "premium"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BillpayLogo>
    </>
  );
};

export default SelectPlan;
