import React            from "react";
import {Spinner, Alert} from "react-bootstrap";

interface IPageLayoutProps extends React.PropsWithChildren {
  isFetching: boolean;
  isError: boolean;
  data: any;
  error: Error;
}

export const PageLayout: React.FC<IPageLayoutProps> = (props) => {
  const { isFetching, isError, data, error, children } = props;

  if (isFetching) {
    return (
      <div className={"d-flex justify-content-center align-items-center vh-100"}>
        <Spinner animation={"border"} />
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div className={"d-flex justify-content-center align-items-center vh-100"}>
        <Alert variant="danger">
          <p>
            {error?.message.toUpperCase()}
          </p>
        </Alert>
      </div>
    )
  }

  return (
    <React.Fragment>
      {children }
    </React.Fragment>
  );
}
