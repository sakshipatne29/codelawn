import { useState } from 'react';
import AppRecords from './AppRecords';
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

function AppTable() {

    const [appRecords, setAppRecords] = useState([]);

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    // console.log(popoverTriggerList)
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

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
                    <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
                        <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                        </div>
                    </div>
                </div>
            ) : (<>
                {/* <button type="button" tabIndex="0" className="btn btn-lg btn-danger" data-bs-placement="left" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> */}
                <AppRecords appRecords={appRecords} />
            </>
            )}
        </>
    );
}

export default AppTable;