import ActionIcons from "./ActionIcons";
import CreateAppModal from './CreateAppModal'

function AppRecords(props) {

  return (
    <>
      <div className="shadow bg-white rounded w-100 p-3">
        <h5 className="ms-3 mt-3">Apps</h5>
        <div className="pb-3 text-end">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Create App
          </button>
          <CreateAppModal />
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
                      <a> Open App</a>
                    )}
                  </td>
                  <td className="text-end">
                    <ActionIcons iconName="deploy" />
                    <ActionIcons iconName="edit" />

                    {record.status === "stopped" ? (
                      <ActionIcons iconName="start" />
                    ) : (
                      <ActionIcons iconName="stop" />
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
