/** iPhone-style frame. Screens are designed at 390×844 and scaled with CSS zoom via --s. */
export default function Phone({
  children,
  className = "",
  dark = false,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  label?: string;
}) {
  return (
    <div className={`phone ${className}`} role="img" aria-label={label}>
      <div className={`phone-screen ${dark ? "moment scr-dark" : ""}`}>
        <div className="phone-island" aria-hidden />
        <StatusBar />
        <div className="phone-content" aria-hidden>
          {children}
        </div>
        <div className="phone-home" aria-hidden />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="phone-status" aria-hidden>
      <span>9:41</span>
      <span className="phone-status-icons">
        <svg width="17" height="11" viewBox="0 0 17 11" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="1" fill="currentColor" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" fill="currentColor" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" fill="currentColor" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" fill="currentColor" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" aria-hidden>
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".4" />
          <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor" />
          <rect x="22.5" y="4" width="1.8" height="4" rx="1" fill="currentColor" opacity=".4" />
        </svg>
      </span>
    </div>
  );
}
