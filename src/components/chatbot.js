import React, { useState, useRef, useEffect } from "react";
const axios = require("axios");
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import MicIcon from "@mui/icons-material/Mic";
import CampaignIcon from "@mui/icons-material/Campaign";
import MenuIcon from "@mui/icons-material/Menu";


const chatBotStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 9999,
};

const liStyle = {
  margin: "0 10px",
  cursor: "pointer",
  padding: "5px",
  transition: "border 0.3s ease-in-out",
  borderRadius: "5px",
  border: "1px solid transparent",
};

const modalStyle = {
  overflow: "auto",
  position: "absolute",
  bottom: "10px",
  right: "25px",
  padding: "8px",
  backgroundColor: "#343541",
  borderRadius: "8px",
  width: "90%",
  height: "60%",
  opacity: "0.9",
  maxWidth: "400px",
};

const scrollableDivWithScrollbar = {
  height: "90%",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#666 transparent",
  WebkitOverflowScrolling: "touch",
  WebkitTransform: "translateZ(0)",
  msTransform: "translateZ(0)",
};

const imgStyle = {
  width: "130px",
  height: "130px",
  zIndex: "9999",
  objectFit: "cover",
  cursor: "pointer",
};

const inputStyle = {
  display: "flex",
  height: "10%",
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "#222",
  borderRadius: "8px",
  border: "solid 1px black",
  padding: "6px",
  overflow: "hidden",
  margin: "6px",
  justifyContent: "space-evenly",
};

const options = [
  { id: 1, label: "Quem sou eu?" },
  { id: 2, label: "Metodologia de Desenvolvimento" },
  { id: 3, label: "Artigos e Tutoriais" },
  { id: 4, label: "Contato e Suporte" },
  { id: 5, label: "Documentação do Projeto" },
];

export default function ChatbotModal() {
  const handlePlay = () => {
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseOver = (item) => {
    setHoveredItem(item);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const [bootVisible, setBotVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const textAreaRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setBotVisible(false);
    setResposta(
      <>
        <h3>Olá! Como posso ajudar você hoje?</h3>
      </>
    );
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };
  const handleClose = () => {
    setOpen(false);
    setBotVisible(true);
    setResposta("");
  };
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const recognition = useRef(null);



  const startListening = () => {
    if (recognition.current) {
      recognition.current.start();
    }
  };

  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userPrompt = "O projeto busca criar uma plataforma que reúna as principais ferramentas de engenharia de software para apoiar os desenvolvedores em todas as etapas do ciclo de vida do desenvolvimento. Como posso ajudar você hoje?";

    if (!apiKey) {
      setResposta("Você não tem permissão");
      setLoading(false);
      return;
    }

    setResposta("");
    try {
      const resposta = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: userPrompt,
            },
            { role: "user",
              content: pergunta
            },
          ],
          temperature: 0.7,
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const respostaDoChat = resposta.data.choices[0].message.content;
      // console.log("Resposta do Chat:", respostaDoChat);
      setResposta(respostaDoChat);

      const audioResposta = await axios.post(
        "https://api.openai.com/v1/audio/speech",
        {
          model: "tts-1",
          input: respostaDoChat,
          voice: "alloy",
          format: "mp3",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          responseType: "arraybuffer",
        }
      );

      // console.log("Resposta da API de Áudio:", audioResposta);

      if (audioResposta.headers["content-type"] === "audio/mpeg") {
        const blob = new Blob([audioResposta.data], { type: "audio/mpeg" });
        const audioUrl = URL.createObjectURL(blob);
        setAudioUrl(audioUrl);
      } else {
        console.error(
          "A resposta da API de áudio não contém uma URL válida:",
          audioResposta.data
        );
      }
    } catch (error) {
      console.error("Erro ao fazer pedido:", error.message);
    }

    setPergunta("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const handleOnChange = (e) => {
    setMenuVisible(false);
    setPergunta(e.target.value);
    setRespostaOption("");
  };

  const [respostaOption, setRespostaOption] = useState("");
  const handleOptionClick = (option) => {
    switch (option) {
      case 1:
        setRespostaOption(
          <>
            <h3>
              Olá!<br></br> Eu sou o CodeHelper, o seu assistente virtual
              especializado em engenharia de software. Fui criado para ajudar
              desenvolvedores como você a encontrar as melhores ferramentas para
              cada etapa do seu projeto.
            </h3>
          </>
        );
        toggleMenuVisibility();
        break;
      case 2:
        setRespostaOption(
          <>
            • Metodologia de Desenvolvimento: Conheça nossa abordagem para o
            desenvolvimento de software e como entregamos produtos de qualidade.
          </>
        );
        toggleMenuVisibility();
        break;
      case 3:
        setRespostaOption(
          <>
            • Ferramentas Utilizadas: Descubra as tecnologias e ferramentas que
            empregamos para criar soluções inovadoras.
          </>
        );
        toggleMenuVisibility();
        break;
      case 4:
        const numeroWhatsapp = "71999214693";
        const mensagem = "Olá, gostaria de entrar em contato!";
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(
          mensagem
        )}`;
        window.open(linkWhatsapp, "_blank");
        toggleMenuVisibility();
        break;
      case 5:
        window.open(
          "https://github.com/cortoppassi/A---3-Felipe/raw/main/A3%20Felipe%20Segunda%20Entrega.docx",
          "_blank"
        );
        toggleMenuVisibility();
        break;
      default:
        console.log("Opção não reconhecida");
    }
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.current.continuous = true;
      recognition.current.lang = "pt-BR";

      recognition.current.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript;
        setPergunta(text);
      };

      recognition.current.onend = () => {};

      recognition.current.onerror = (event) => {
        console.error("Voice recognition error:", event.error);
      };
    } else {
      console.error("Speech recognition is not supported in this browser.");
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
    };
  }, []);

  return (
    <div style={chatBotStyle}>
      <img
        src="img/chatbot.png"
        alt="bot"
        width={70}
        height={70}
        style={{ ...imgStyle, display: bootVisible ? "block" : "none" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={modalStyle}>
        <div style={scrollableDivWithScrollbar}>
            <div>
              <MenuIcon
                onClick={toggleMenuVisibility}
                style={{ cursor: "pointer", fontSize: "20px" }}
              />
              {menuVisible && (
                <div
                  style={{
                    overflow: "hidden",
                    backgroundColor: "#222",
                    color: "#bababa",
                    borderRadius: "8px",
                    margin: "8px",
                    padding: "2px",
                    border: "solid 1px black",
                  }}
                >
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: "6px",
                      margin: "0",
                    }}
                  >
                    {options.map((option) => (
                      <li
                        key={option.id}
                        style={{
                          ...liStyle,
                          border:
                            hoveredItem === option.id
                              ? "1px solid #bababa"
                              : liStyle.border,
                        }}
                        onMouseOver={() => handleMouseOver(option.id)}
                        onMouseOut={handleMouseOut}
                        onClick={() => handleOptionClick(option.id)}
                      >
                        {option.id} - {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div
              style={{
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#343541",
              }}
            >
              {respostaOption && (
                <p
                  style={{
                    color: "#bababa",
                    display: pergunta ? "none" : "flex",
                  }}
                >
                  {resposta ? "" : respostaOption}
                </p>
              )}
              {resposta && (
                <div>
                  <h3
                    style={{
                      color: "#bababa",
                      backgroundColor: "#1a1a1a",
                      margin: "8px",
                      padding: "8px",
                      borderRadius: "8px",
                      borderRadius: "0 8px 8px 8px",
                      border: "solid 1px black",
                    }}
                  >
                    {/* <button onClick={handlePlay}>
                    <CampaignIcon></CampaignIcon>
                  </button> */}
                    {resposta}
                  </h3>
                </div>
              )}
            </div>

            <div
              style={{
                overflow: "hidden",
                backgroundColor: "#292929",
                color: "#bababa",
                margin: "8px",
                padding: "8px",
                borderRadius: "8px 0 8px 8px",
                border: "solid 1px #ccc",
                display: pergunta ? "block" : "none",
                wordWrap: "break-word",
              }}
            >
              <h3>{pergunta}</h3>
            </div>
          </div>
          
          <div style={inputStyle}>
            <form
              onSubmit={handleSubmit}
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <textarea
                rows="1"
                placeholder="Faça sua pergunta aqui..."
                value={pergunta}
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
                style={{
                  backgroundColor: "transparent",
                  flex: 2,
                  color: "#bababa",
                  border: "none",
                  resize: "none",
                  padding: "8px",
                  outline: "none",
                  overflow: "hidden",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.25rem",
                }}
                ref={textAreaRef}
              ></textarea>
              <Button
                type="submit"
                disabled={loading}
                style={{
                  color: "white",
                  padding: "6px",
                  minWidth: "32px",
                  height: "32px",
                }}
              >
                {loading ? <CircularProgress /> : <PlayArrowIcon />}
              </Button>
              <Button
                type="button"
                style={{
                  color: "white",
                  padding: "6px",
                  minWidth: "32px",
                  height: "32px",
                }}
                onMouseDown={startListening}
                onMouseUp={stopListening}
              >
                {<MicIcon />}
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
