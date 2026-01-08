import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

/**
 * Welcome screen shown at route "/".
 */
// PUBLIC_INTERFACE
export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <main className="shell" aria-label="Welcome screen">
      <section className="card">
        <header className="headerBlock">
          <h1 className="title">Welcome</h1>
          <p className="subtitle">
            This is a simple two-screen demo using the Ocean Professional theme.
            Click Next to continue.
          </p>
        </header>

        <div className="actions">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/next")}
            aria-label="Go to next screen"
          >
            Next
          </Button>
        </div>

        <p className="note">Route: “/”</p>
      </section>
    </main>
  );
}
