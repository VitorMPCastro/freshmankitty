/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

const App = () => {
    const redirectToGoogleForm = () => {
        window.open("https://forms.google.com/your-google-form-link", "_blank");
    };

    return (
        <Container>
            {/* Header Section */}
            <Header>
                <h1>🐾 Bem-vindo ao Programa de Inclusão dos Gatinhos! 🐾</h1>
                <p>Faça parte de uma comunidade acolhedora, divertida e cheia de amor! 😺</p>
            </Header>

            {/* Main Call-to-Action */}
            <Main>
                <KittyImage
                    src="https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg"
                    alt="Gatinho fofo"
                />
                <CTA>
                    <h2>🐱 Inscreva-se agora! 🐱</h2>
                    <p>
                        Clique no botão abaixo para preencher o formulário de inscrição e
                        junte-se ao nosso programa de inclusão.
                    </p>
                    <Button onClick={redirectToGoogleForm}>Inscreva-se aqui!</Button>
                </CTA>
            </Main>

            {/* Footer Section */}
            <Footer>
                <p>Feito com ❤️ e muitas patinhas 🐾 pela comunidade dos gatinhos.</p>
            </Footer>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #ffe4e1;
  color: #4d4d4d;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Header = styled.header`
  padding: 20px;
  background-color: #ffb6c1;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #4d4d4d;
  }

  p {
    font-size: 1.2rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const KittyImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const CTA = styled.div`
  max-width: 500px;
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: #ff6f61;
  }

  p {
    font-size: 1rem;
    margin: 10px 0;
    color: #4d4d4d;
  }
`;

const Button = styled.button`
  background-color: #ff6f61;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff8566;
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  font-size: 0.9rem;
  margin-top: 20px;
  color: #4d4d4d;

  p {
    margin: 0;
  }
`;

export default App;
