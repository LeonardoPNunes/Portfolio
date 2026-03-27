import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  ActionButton,
  ButtonModal,
  Card,
  CardAlign,
  CardCategory,
  Cards,
  ContainerButtons,
  Description,
  ImageProject,
  ProjectHeader,
  SectionProjects,
  SectionTag,
  StackTag,
  StackTags,
} from "./style";
import { data } from "../../mocks";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import * as globalActions from "../../store/modules/global/actions";

const Projects = () => {
  const { open } = useSelector((state) => state.global);
  const [gifUrl, setGifUrl] = useState("");

  function ModalOpen(gif) {
    setGifUrl(gif);
    globalActions.setOpen();
  }

  return (
    <SectionProjects id="projects">
      <SectionTag>Projetos</SectionTag>
      <ProjectHeader>
        <h2>Alguns projetos que fazem parte da minha trajetória.</h2>
      </ProjectHeader>

      <Cards>
        {data.map((card) => (
          <Card key={card.name}>
            <ButtonModal onClick={() => ModalOpen(card.img)}>
              <ImageProject src={card.img} alt={card.altimg} />
            </ButtonModal>

            <CardAlign>
              <CardCategory>{card.category}</CardCategory>
              <h3>{card.name}</h3>
              <Description>{card.description}</Description>

              <StackTags>
                {card.stack.map((item) => (
                  <StackTag key={item}>{item}</StackTag>
                ))}
              </StackTags>

              <ContainerButtons>
                <ActionButton
                  href={card.linkGit}
                  target="_blank"
                  rel="noreferrer"
                  title="Repositório no GitHub"
                >
                  <FaGithub />
                  Código
                </ActionButton>

                {card.linkProject ? (
                  <ActionButton
                    href={card.linkProject}
                    target="_blank"
                    rel="noreferrer"
                    title="Visualizar projeto"
                  >
                    <FaExternalLinkAlt />
                    Preview
                  </ActionButton>
                ) : (
                  <ActionButton as="span" data-disabled="true">
                    Preview indisponível
                  </ActionButton>
                )}
              </ContainerButtons>
            </CardAlign>
          </Card>
        ))}
      </Cards>

      {open && <Modal gif={gifUrl} />}
    </SectionProjects>
  );
};

export default Projects;
