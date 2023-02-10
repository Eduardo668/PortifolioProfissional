import React from "react";
import Header from "../../components/header/header";
import { Title } from "../../global/GlobalStyle";
import { Box, Container, InputText, Label, PageContainer } from "./style";

export default function AdminPage() {
  return (
    <>
      <PageContainer>
        <div className="div-admin-title">
          <Title theme={{ color: "white", font_size: "3em" }}>Admin</Title>
          <Title
            theme={{ color: "#00ADB5", margin_left: "10px", font_size: "3em" }}
          >
            page
          </Title>
        </div>
        <Container>
          <Box>
            <div className="div-form-title">
              <Title theme={{ color: "white", font_size: "1.5em" }}>Adicionar</Title>
              <Title
                theme={{
                  color: "#00ADB5",
                  margin_left: "10px",
                  font_size: "1.5em",
                }}
              >
                projeto
              </Title>
            </div>
            <div className="div-form" >
                <div className="input-div">
                    <Label>Nome do projeto</Label>
                    <InputText placeholder="Rede social ..." />
                </div>
                <div className="input-div">
                    <Label>Link do projeto</Label>
                    <InputText placeholder="Rede social ..." />
                </div>
                <div className="input-div">
                    <Label>Link do codigo fonte</Label>
                    <InputText placeholder="Rede social ..." />
                </div>   
               
            </div>
            
          </Box>
          <Box></Box>
          <Box></Box>
        </Container>
      </PageContainer>
    </>
  );
}
