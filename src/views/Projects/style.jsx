import styled from "styled-components";

export const SectionProjects = styled.section`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 52px 0 28px;
`;

export const SectionTag = styled.span`
  display: inline-flex;
  margin-bottom: 22px;
  padding: 10px 14px;
  border-radius: 999px;
  color: #bbf7d0;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.14);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.82rem;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  margin-bottom: 24px;

  > h2 {
    margin: 0;
    max-width: 720px;
    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.08;
  }

  > p {
    margin: 0;
    max-width: 360px;
    color: var(--muted);
    line-height: 1.75;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(12, 24, 48, 0.78), rgba(8, 16, 28, 0.95));
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(56, 189, 248, 0.22);
  }
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.45s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;
  text-decoration: none;
  color: var(--text);
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.12);
  transition: 0.25s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.14);
    border-color: rgba(56, 189, 248, 0.24);
  }

  &[data-disabled="true"] {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const ButtonModal = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
`;

export const CardAlign = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 14px;
  padding: 22px;
  flex: 1;

  > h3 {
    margin: 0;
    font-size: 1.35rem;
  }
`;

export const CardCategory = styled.span`
  display: inline-flex;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7dd3fc;
`;

export const Description = styled.p`
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
`;

export const StackTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StackTag = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.12);
  color: #dbeafe;
  font-size: 0.88rem;
`;
