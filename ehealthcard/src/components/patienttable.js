const PatientTable=(props)=>{
   
    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>weight</th>
                    <th>height</th>
                    <th>Temperature</th>
                    <th>Bloodpressure</th>
                    <th>Sugarbefore</th>
                    <th>sugarafter</th>
                    <th>operations</th>
                </tr>
            </thead>
            <tbody>
               {props.patients.length>0?(props.patients.map(patients=>{const{id,pid,date,height,weight,temperature,bloodpressure,sugarbefore,sugarafter,operations}=patients;
            return(<tr>
                <td>{pid}</td>
                <td>{date}</td>
                <td>{weight}</td>
                <td>{height}</td>
                <td>{temperature}</td>
                <td>{bloodpressure}</td>
                <td>{sugarbefore}</td>
                <td>{sugarafter}</td>
                <td>{operations}</td>
            </tr>)   
            })):
               <tr><td colSpan={4}>User data not found</td></tr>}
               
            </tbody>
        </table>
    )
}
export default PatientTable;