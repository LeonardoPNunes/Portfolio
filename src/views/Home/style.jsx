import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 132px 0 72px;
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 20%, rgba(56, 189, 248, 0.18), transparent 28%),
    radial-gradient(circle at 84% 18%, rgba(34, 197, 94, 0.14), transparent 22%);
  pointer-events: none;
`;

export const HeroGrid = styled.div`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 420px);
  gap: 36px;
  align-items: center;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeUp} 0.8s ease both;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(56, 189, 248, 0.2);
  background: rgba(8, 20, 37, 0.75);
  color: #cbd5e1;
  font-size: 0.92rem;
  margin-bottom: 22px;
`;

export const Title = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(2.9rem, 7vw, 5rem);
  line-height: 0.96;

  > span {
    max-width: 760px;
    font-family: "Manrope", sans-serif;
    font-size: clamp(1.1rem, 2vw, 1.45rem);
    line-height: 1.6;
    color: var(--muted);
    font-weight: 500;
  }
`;

export const HeroContent = styled.p`
  max-width: 660px;
  margin: 24px 0 0;
  color: #d8e2f0;
  line-height: 1.8;
  font-size: 1.03rem;
`;

export const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 0;
`;

export const HighlightChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(15, 23, 42, 0.68);
  color: #dbeafe;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
`;

export const Button = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 22px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: var(--text);
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 44px rgba(14, 165, 233, 0.28);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 50px rgba(14, 165, 233, 0.34);
  }
`;

export const SecondaryButton = styled(Button)`
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-shadow: none;
  text-decoration: none;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--text);
    transform: translateY(-1px);
  }
`;

export const HeroCard = styled.div`
  position: relative;
  padding: 28px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(12, 24, 48, 0.95), rgba(9, 17, 31, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: var(--shadow);
  animation: ${fadeUp} 0.8s ease 0.12s both;
`;

export const FloatingBadge = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  justify-content: center;
  width: max-content;
  max-width: calc(100% - 48px);
  padding: 10px 14px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(56, 189, 248, 0.92));
  color: #04111d;
  font-size: 0.84rem;
  font-weight: 800;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.76rem;
    padding: 9px 12px;
  }
`;

export const ProfileImage = styled.img`
  width: min(100%, 340px);
  height: 360px;
  margin: 28px auto 20px;
  border-radius: 28px;
  object-fit: cover;
  animation: ${float} 5s ease-in-out infinite;
`;

export const InfoCard = styled.div`
  padding: 18px;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.12);
`;

export const Metric = styled.strong`
  display: block;
  font-size: 1.18rem;
  margin-bottom: 8px;
`;

export const MetricLabel = styled.p`
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
`;

export const AccentCard = styled.div`
  margin-top: 16px;
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(34, 197, 94, 0.08));
  border: 1px solid rgba(56, 189, 248, 0.14);

  > p {
    margin: 0;
    line-height: 1.7;
    color: #dbeafe;
  }
`;

export const SupportingText = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 0.88rem;
  color: #93c5fd;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
