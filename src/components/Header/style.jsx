import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(7, 17, 31, 0.7);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
`;

export const HeaderInner = styled.div`
  width: min(1180px, calc(100% - 32px));
  min-height: 74px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
`;

export const BrandBadge = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 0 24px rgba(56, 189, 248, 0.55);
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const NavItem = styled.span`
  color: var(--muted);
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 999px;
  transition: 0.25s ease;

  &:hover {
    color: var(--text);
    background: rgba(148, 163, 184, 0.08);
  }
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  color: var(--text);
  border: 1px solid rgba(56, 189, 248, 0.24);
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.18), rgba(34, 197, 94, 0.12));
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(56, 189, 248, 0.5);
  }

  @media (max-width: 920px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  color: var(--text);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;

  > svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 920px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;
