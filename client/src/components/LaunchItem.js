import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Launch from "./Launch";

const LaunchItem = ({ launch }) => {
  const { flight_number, mission_name, launch_date_local, launch_success } =
    launch;

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-12">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
          <div>
            <Link
              to={`/launch/${flight_number}`}
              element={<Launch />}
              className="btn btn-primary"
            >
              Launch Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
