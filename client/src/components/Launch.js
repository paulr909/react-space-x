import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import Spinner from "./Spinner";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = () => {
  let { flight_number } = useParams();
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (loading)
    return (
      <div className="mt-1 text-center">
        <Spinner />
      </div>
    );
  if (error) return <strong>`Error! ${error.message}`</strong>;

  return (
    <div>
      <h2 className="my-3">
        <span>Mission:</span> {data.launch.mission_name}
      </h2>
      <h3 className="mb-3">Launch Details</h3>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_number}</li>
        <li className="list-group-item">
          Launch Year: {data.launch.launch_year}
        </li>
        <li className="list-group-item">
          Launch Successful:{" "}
          <span
            className={classNames({
              "text-success": data.launch.launch_success,
              "text-danger": !data.launch.launch_success,
            })}
          >
            {data.launch.launch_success ? "Success" : "Failed"}
          </span>
        </li>
      </ul>

      <h3 className="my-3">Rocket Details</h3>
      <ul className="list-group">
        <li className="list-group-item">
          Rocket ID: {data.launch.rocket.rocket_id}
        </li>
        <li className="list-group-item">
          Rocket Name: {data.launch.rocket.rocket_name}
        </li>
        <li className="list-group-item">
          Rocket Type: {data.launch.rocket.rocket_type}
        </li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default Launch;
