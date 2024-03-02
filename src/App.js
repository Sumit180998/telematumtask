
import { useContext } from 'react';
import './App.css';
import UserConsumer from './UserContextApi/UserConsumer'
import AppointmentList from './Component/AppointmentList';



function App() {
  const{ Patientdata,setPatientdata}=UserConsumer()

  console.log(Patientdata)

  return (
 

        <div className="text-3xl font-bold ">
      <AppointmentList appointmentList={Patientdata} />
        </div>
    
  );
}

export default App;
