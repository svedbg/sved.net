import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-bold gradient-text">404</h1>
        <p className="mb-6 text-xl text-content-muted">
          The page <code className="text-brand">{location.pathname}</code> was not found.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-content-inverse font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
