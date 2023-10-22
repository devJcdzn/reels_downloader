import './Content.scss';

const Content = () => {
  return (
    <div className="info-container">
      <div className="info-content">

        <h2 className="info-title">
          Como funciona um downloader automático?
        </h2>
        <p className="description">
          Em palavras leigas, na hora de desenvolvermos um downloader, assim como em qualquer
          outro site, exigimos de um front-end(parte relacionada a experiência dos usuários),
          e também de um back-end(relação com o servidor, parte lógica e mais funcional do site).
          <br />
          <br />
          O front, ou seja, a parte com que você está interagindo neste momento. É a parte em que
          passoas como eu entram em ação. desenvolvendo designs e escolhendo cores para que agradem
          o usuário, enquanto para a parte lógica, uso de um recurso conhecido como API, que me
          entrega tudo de um servidor terceirizado, sem que eu precise de trabalhar no back-end.
          <br />
          <br />
          Interessante né? E como eu ganho com isso? Tá vendo esse anúncios na sua telinha?
          <br />
          Eles são minha fonte de renda, e uma ótima fonte. Quer aprender a criar sites assim e gerar
          uma renda extra com eles? Clica no link api e confere esse curso feito pra pessoas como nós.
        </p>
      </div>
    </div>
  )
}

export default Content