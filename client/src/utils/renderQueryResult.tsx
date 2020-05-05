import * as React from 'react';

type QueryResult<D> = {
  data: D | undefined;
  error?: Error | undefined;
  loading: boolean;
}

export function renderQueryResult<D>(
  onData: (data: D) => JSX.Element,
  onLoading?: () => JSX.Element,
  onError?: () => JSX.Element
) {
  return function(queryResult: QueryResult<D>) {
    const {data, loading, error} = queryResult;
    if (loading || !data) {
      return onLoading ? onLoading() : <p>Loading...</p>;
    }

    if (error) {
      return onError ? onError() : <p>Error!</p>;
    }

    return onData(data);
  }
}
