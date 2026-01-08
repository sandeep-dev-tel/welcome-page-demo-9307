import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

/**
 * Second screen shown at route "/next".
 */
// PUBLIC_INTERFACE
export default function NextPage() {
  const navigate = useNavigate();

  return (
    <main className="shell" aria-label="Next screen">
      <section className="card">
        <header className="headerBlock">
          <h1 className="title">You're on the next screen!</h1>
          <p className="subtitle">
            Navigation is handled client-side with React Router.
          </p>
        </header>

        <div className="actions">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate("/")}
            aria-label="Go back to welcome screen"
          >
            Back
          </Button>
        </div>

        <p className="note">Route: “/next”</p>
      </section>
    </main>
  );
}
