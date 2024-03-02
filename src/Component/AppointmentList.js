import React from "react";

function AppointmentList({appointmentList}) {
console.log(appointmentList)

  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-xl font-bold mb-4">Today's Appointment List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2  text-lg">PATIENTS</th>
            <th className="p-2  text-lg">mobile_number</th>
            <th className="p-2  text-lg">DATE</th>
            <th className="p-2  text-lg">TIME</th>
            <th className="p-2  text-lg">DOCTOR</th>
            <th className="p-2  text-lg">INJURY</th>
            <th className="p-2  text-lg">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {appointmentList?.map((appointment) => (
            <tr key={appointment.name}>
              <td className="p-2 border border-gray-200  text-xs">{appointment.patient_name}</td>
              <td className="p-2 border border-gray-200  text-xs">{appointment.mobile_number}</td>
              <td className="p-2 border border-gray-200  text-xs">{appointment.appointment_date}</td>
              <td className="p-2 border border-gray-200  text-xs">{appointment.appointment_time}</td>
              <td className="p-2 border border-gray-200  text-xs">{appointment.doctor}</td>
              <td className="p-2 border border-gray-200  text-xs">{appointment.injury}</td>
              <td className="p-2 border border-gray-200  text-xs "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical text-end" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
