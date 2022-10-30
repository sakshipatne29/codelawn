import ActionIcons from "./ActionIcons";

function AppRecords(props) {
    
  return (
    <>
      <div className="shadow bg-white rounded w-100 p-3">
        <div className="pb-3 text-end">
          <button type="button" className="btn btn-primary">
            Create App
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark bg-dark">
              <tr>
                <th scope="col" className="ps-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </th>
                <th scope="col">App Name</th>
                <th scope="col">URL</th>
                <th
                  scope="col"
                  className="text-end"
                  style={{ paddingRight: "96px" }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {props.appRecords.map((record) => (
                <tr key={record.app_name}>
                  <td className="ps-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </td>
                  <td>{record.app_name}</td>
                  <td>
                    {record.status === "running" ? (
                      <a href="http://www.google.com" target="_blank">
                        Open App
                      </a>
                    ) : (
                      <a>Open App</a>
                    )}
                  </td>
                  <td className="text-end">
                    <ActionIcons iconName="deploy" />

                    <span
                      className="pe-4"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Edit App"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </span>
                    {record.status === "stopped" ? (
                      <span
                        className="pe-3"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Start App"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          fill="green"
                          className="bi bi-play-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                      </span>
                    ) : (
                      <span
                        className="pe-3"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Stop App"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          fill="red"
                          className="bi bi-stop-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                        </svg>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AppRecords;
