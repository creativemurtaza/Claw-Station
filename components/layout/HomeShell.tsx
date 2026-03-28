"use client";

import { useCallback, useState } from "react";
import { FooterMicroData } from "@/components/home/FooterMicroData";
import { LoginModal } from "@/components/layout/LoginModal";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

type HomeShellProps = {
  children: React.ReactNode;
};

export function HomeShell({ children }: HomeShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    setShowLoginModal(false);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0b0b]" data-name="App shell">
      <div
        className="pointer-events-none absolute right-[-128px] top-[-111.69px] size-[600px] max-md:right-0 max-md:top-0 max-md:size-[min(100vw,400px)]"
        data-name="Gradient"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 600 600\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(42.426 0 0 42.426 300 300)\\'><stop stop-color=\\'rgba(255,45,45,0.05)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,45,45,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-223.39px] left-[-128px] size-[800px] max-md:bottom-0 max-md:left-0 max-md:size-[min(100vw,500px)]"
        data-name="Gradient"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 800 800\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(56.569 0 0 56.569 400 400)\\'><stop stop-color=\\'rgba(255,45,45,0.05)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,45,45,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')",
        }}
      />

      <div className="relative z-10 min-h-screen w-full pl-0 pt-[56px] md:pl-[256px] md:pt-0">{children}</div>

      <div className="pointer-events-none absolute inset-0 z-[5] border-[8px] border-solid border-[rgba(14,14,14,0.5)] md:border-[20px]" data-name="Tactical Overlay" />

      {sidebarOpen ? (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-[35] bg-black/55 md:hidden"
          type="button"
          onClick={closeSidebar}
        />
      ) : null}

      <Topbar
        isAuthenticated={isAuthenticated}
        onLoginClick={() => setShowLoginModal(true)}
        onMenuClick={() => setSidebarOpen(true)}
      />
      <FooterMicroData />
      <Sidebar mobileOpen={sidebarOpen} onNavigate={closeSidebar} />

      {showLoginModal ? (
        <LoginModal
          email={loginEmail}
          password={loginPassword}
          onClose={() => setShowLoginModal(false)}
          onEmailChange={setLoginEmail}
          onLogin={handleLogin}
          onPasswordChange={setLoginPassword}
        />
      ) : null}
    </div>
  );
}
