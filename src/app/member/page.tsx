"use client"
import { Avatar } from "@nextui-org/react";

export default function GetMember() {
  const userData = {
    id: 2,
    name: "Evan Montgomery",
    prioritynumber: 2,
    interesttopay: 0,
    interesttoreceive: 1,
    status: "unpaid",
    avatar: "https://media.istockphoto.com/id/471247592/photo/portrait-of-arab-businessman.jpg?s=612x612&w=0&k=20&c=g4Ass1bmp7FFwE60w8sCgP2ws8eQeBfoCzD8EP4YoZY=",
    email: "evan.montgomery@example.com",
    paymentperiod: "07/17/2024"
  };

  const user = userData;

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="page-container">
      <h1 className="header">Member</h1>
      <div className="profile-container">
        <div className="profile-card">
          <Avatar src={user.avatar} name={user.name} className="large-avatar" />
          <div className="user-details">
            <p>Email: {user.email}</p>
            <p>Priority Number: {user.prioritynumber}</p>
            <p>Interest to Pay: {user.interesttopay}%</p>
            <p>Interest to Receive: {user.interesttoreceive}%</p>
            <p>Status: {user.status}</p>
            <p>Payment Period: {user.paymentperiod}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }

        .header {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .profile-container {
          border: 2px solid #ccc;
          padding: 20px;
          width: 80%;
          max-width: 600px;
        }

        .profile-card {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .large-avatar {
          width: 100px;
          height: 100px;
        }

        .user-details {
          flex-grow: 1;
        }

        .user-details p {
          margin: 8px 0;
        }
      `}</style>
    </div>
  );
}
