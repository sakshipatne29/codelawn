import { useState } from 'react';
import AppRecords from './AppRecords';

function AppTable() {

    const [appRecords, setAppRecords] = useState([]);

    if (appRecords.length === 0)
        fetch("/dbOperations/list", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.status)
                // console.log(data.message)
                setAppRecords(data.message)
            })

    return (
        <>
            {(appRecords.length === 0) ? (
                <div className="">
                    <div className="d-flex align-items-center justify-content-center" style={{height: "80vh"}}>
                        <div className="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                        </div>
                    </div>
                </div>
            ) : (
                <AppRecords appRecords={appRecords} />
            )}
        </>
    );
}

export default AppTable;