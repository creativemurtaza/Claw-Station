"use client";

import { useCallback, useEffect } from "react";

type LoginModalProps = {
  onClose: () => void;
  onLogin: () => void;
  email: string;
  password: string;
  onEmailChange: (v: string) => void;
  onPasswordChange: (v: string) => void;
};

/**
 * Login panel from Figma node 132:2 — centered modal overlay (non-route).
 * @see https://www.figma.com/design/6fBoVyJUAD6GmZ3o6GqtKE/Claw-Station-M?node-id=132-2
 */
export function LoginModal({
  onClose,
  onLogin,
  email,
  password,
  onEmailChange,
  onPasswordChange,
}: LoginModalProps) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
    >
      <button
        aria-label="Close login"
        className="absolute inset-0 z-0 bg-black/75 backdrop-blur-[6px]"
        type="button"
        onClick={onClose}
      />

      <div
        className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 45, 45, 0.05) 2.5%, rgba(255, 45, 45, 0) 2.5%), linear-gradient(180deg, rgba(255, 45, 45, 0.05) 2.5%, rgba(255, 45, 45, 0) 2.5%)",
        }}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-[rgba(255,45,45,0.05)] blur-[60px]" />

        <div className="relative backdrop-blur-[2px]">
          <div className="relative border border-[rgba(255,45,45,0.2)] bg-[#1a1a1a] px-[33px] pb-[49px] pt-[33px]">
            <div className="pointer-events-none absolute inset-[-1px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />

            <div className="absolute left-[-4px] top-[-4px] size-[48px] border-l-2 border-t-2 border-[rgba(255,45,45,0.4)]" />
            <div className="absolute bottom-[-4px] right-[-4px] size-[48px] border-b-2 border-r-2 border-[rgba(255,45,45,0.4)]" />

            <div className="flex flex-col gap-10">
              <div className="w-full text-center">
                <p className="font-inter-display text-[26px] font-bold leading-[36px] tracking-[-1.5px] text-white">
                  CLAW STATION
                </p>
                <p className="font-space mt-1 text-[10px] font-bold uppercase leading-[15px] tracking-[2px] text-[#ffb4ab] [text-shadow:0px_0px_10px_rgba(255,180,171,0.4)]">
                  Tactical AI Operating System v1.0
                </p>
              </div>

              <form
                className="flex w-full flex-col gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  onLogin();
                }}
              >
                <div className="flex w-full flex-col items-end gap-1">
                  <div className="w-full max-w-[350px] self-start">
                    <p className="font-space text-[10px] font-medium uppercase leading-[15px] tracking-[1.6px] text-[rgba(232,188,183,0.7)]">
                      enter Email
                    </p>
                  </div>
                  <div className="relative w-full">
                    <span className="font-mono-figma pointer-events-none absolute left-[12px] top-1/2 -translate-y-1/2 text-[14px] leading-[20px] text-[#ffb4ab]">
                      {">"}
                    </span>
                    <input
                      autoComplete="email"
                      className="font-space w-full border-b border-[rgba(94,63,59,0.4)] bg-[#0e0e0e] py-[17px] pl-[32px] pr-4 text-[14px] tracking-[1.4px] text-[#e8bcb7] outline-none placeholder:text-[rgba(232,188,183,0.3)]"
                      placeholder="EMAIL"
                      type="email"
                      value={email}
                      onChange={(e) => onEmailChange(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col items-end gap-1">
                  <div className="w-full max-w-[350px] self-start">
                    <p className="font-space text-[10px] font-medium uppercase leading-[15px] tracking-[1.6px] text-[rgba(232,188,183,0.7)]">
                      Password
                    </p>
                  </div>
                  <div className="relative w-full">
                    <span className="font-mono-figma pointer-events-none absolute left-[12px] top-1/2 -translate-y-1/2 text-[14px] leading-[20px] text-[#ffb4ab]">
                      {">"}
                    </span>
                    <input
                      autoComplete="current-password"
                      className="font-space w-full border-b border-[rgba(94,63,59,0.4)] bg-[#0e0e0e] py-[17px] pl-[32px] pr-4 text-[14px] tracking-[1.4px] text-[#e8bcb7] outline-none placeholder:text-[rgba(232,188,183,0.3)]"
                      placeholder="••••••••"
                      type="password"
                      value={password}
                      onChange={(e) => onPasswordChange(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-6 pt-4">
                  <button
                    className="relative w-full bg-[#ff2d2d] py-4 transition-opacity hover:opacity-95"
                    type="submit"
                  >
                    <span className="pointer-events-none absolute inset-0 shadow-[0px_0px_40px_10px_rgba(255,45,45,0.15)]" />
                    <span className="font-space relative text-[12px] font-bold uppercase leading-[16px] tracking-[1.8px] text-[#5c0004]">
                      Sign In
                    </span>
                  </button>

                  <div className="flex flex-col items-center gap-4">
                    <button
                      className="font-space text-[10px] font-medium uppercase leading-[15px] tracking-[1.6px] text-[rgba(232,188,183,0.4)] transition-colors hover:text-[rgba(232,188,183,0.65)]"
                      type="button"
                    >
                      Make New Account
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="size-[6px] shrink-0 bg-[#ffb4ab]" />
                      <p className="font-space text-[8px] font-normal uppercase leading-[12px] tracking-[3.2px] text-[rgba(232,188,183,0.3)]">
                        Secure Uplink Established
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
