import { ViewTransition, type ReactNode } from "react";

/**
 * Remounts on every navigation, so each page arrives with a short rise-and-fade
 * while the header stays put (see the view-transition rules in globals.css).
 * Browsers without the View Transitions API simply swap pages as before.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
