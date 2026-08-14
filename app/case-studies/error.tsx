'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong</h2>
      {error.digest ? <p>{error.digest}</p> : null}
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
