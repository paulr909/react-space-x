import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import Spinner from "./Spinner";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading)
    return (
      <div className="mt-1 text-center">
        <Spinner />
      </div>
    );
  if (error) return <strong>`Error! ${error.message}`</strong>;

  return data.launches.map((launch) => (
    <LaunchItem key={launch.flight_number} launch={launch} />
  ));
};

export default Launches;
