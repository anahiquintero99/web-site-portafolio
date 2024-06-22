import whatsapp from "../../assets/img/whatsapp.png";

export const WhatsAppButton = () => {
  const phoneNumber = "525530139314";
  const message = `¡Hola, Anahi! 👋

  Estoy muy interesado en tus servicios de desarrollo web. 🌐✨ ¿Podemos hablar más sobre eso? ¡Me encantaría conocer más detalles!`;

  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`}
    >
      <img src={whatsapp} alt="" />
    </a>
  );
};
