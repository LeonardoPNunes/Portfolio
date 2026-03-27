import styled from "styled-components";

export const SectionAboutMe = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 52px 0 28px;
`;

export const SectionTag = styled.span`
  display: inline-flex;
  margin-bottom: 22px;
  padding: 10px 14px;
  border-radius: 999px;
  color: #bae6fd;
  background: rgba(14, 165, 233, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.12);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 360px);
  gap: 28px;
  align-items: start;

  h2 {
    margin: 0 0 16px;
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2rem, 4vw, 3.3rem);
    line-height: 1.08;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const IntroText = styled.p`
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.9;
`;

export const StackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: start;
  padding: 24px;
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.68);
  border: 1px solid rgba(148, 163, 184, 0.12);
`;

export const StackChip = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.12);
  color: #e0f2fe;
`;

export const JourneyGrid = styled.div`
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const JourneyCard = styled.article`
  padding: 22px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(12, 24, 48, 0.8), rgba(8, 16, 28, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.12);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.25);
  }

  > strong {
    display: block;
    margin-bottom: 12px;
    font-size: 1rem;
  }

  > p {
    margin: 0;
    color: var(--muted);
    line-height: 1.75;
  }
`;
