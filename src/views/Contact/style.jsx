import styled from "styled-components";

export const SectionContact = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 52px 0 72px;
`;

export const SectionTag = styled.span`
  display: inline-flex;
  margin-bottom: 22px;
  padding: 10px 14px;
  border-radius: 999px;
  color: #f0abfc;
  background: rgba(217, 70, 239, 0.08);
  border: 1px solid rgba(217, 70, 239, 0.14);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 28px;

  h2 {
    margin: 0 0 12px;
    max-width: 740px;
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.08;
  }

  p {
    margin: 0;
    max-width: 560px;
    color: var(--muted);
    line-height: 1.75;
  }

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-radius: 16px;
  color: var(--text);
  text-decoration: none;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.14);
  white-space: nowrap;
`;

export const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  object-fit: cover;
  box-shadow: var(--shadow);
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px;
  margin-bottom: 24px;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(12, 24, 48, 0.76), rgba(8, 16, 28, 0.95));
  border: 1px solid rgba(148, 163, 184, 0.12);

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const CTABox = styled.div`
  > strong {
    display: block;
    margin-bottom: 12px;
    font-size: 1.25rem;
  }

  > p {
    margin: 0;
    color: var(--muted);
    line-height: 1.8;
    max-width: 650px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  border-radius: 24px;
  color: var(--text);
  text-decoration: none;
  background: rgba(15, 23, 42, 0.74);
  border: 1px solid rgba(148, 163, 184, 0.12);
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.22);
  }

  > h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  > span {
    color: var(--muted);
    line-height: 1.7;
  }
`;
