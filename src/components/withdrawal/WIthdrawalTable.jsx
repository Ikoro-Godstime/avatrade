import React, { useState, useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import moment from "moment";
import WithdrawalCard from "./WithdrawalCard";

// import firebase function
import { collection, onSnapshot } from "firebase/firestore";
import { store } from "../../firebase";

// import context
import { UserContext } from "../../context/UserContext";

const WIthdrawalTable = () => {
  const { user } = useContext(UserContext);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    const fetchWithdraws = async () => {
      try {
        const collectionRef = collection(
          store,
          "users",
          `${user.email}`,
          "withdrawal"
        );
        onSnapshot(collectionRef, (docs) => {
          docs.forEach((d) => {
            setWithdrawals((prevState) => [...prevState, d.data()]);
          });
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWithdraws();
  }, [user.email]);


  return (
    <>
      {withdrawals.length > 0 ? (
        withdrawals.map((withdrawal, index) => (
          <WithdrawalCard
            amount={withdrawal.amount}
            status={
              !withdrawal.approved ? "is been processed" : "has been approved"
            }
            date={moment(withdrawal.date.at).format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}
            method={withdrawal.method}
            address={withdrawal.address}
            account={withdrawal.accountNumber}
            key={index}
          />
        ))
      ) : (
        <Typography variant="body1" component="div" sx={{ p: 2 }}>
          Currently No Withdrawals
        </Typography>
      )}
    </>
  );
};

export default WIthdrawalTable;
