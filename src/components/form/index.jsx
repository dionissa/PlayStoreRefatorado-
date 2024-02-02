function Form() {
  return (
    <section id="subscriptions">
    <form action="#" method="post">
      <h2 class="sectionTitle">Assine nossa Newsletter</h2>
      <p>Receba as últimas notícias e atualizações diretamente na sua caixa de entrada.</p>
    
      <label>Nome:
        <input type="text" id="nome" name="nome" required></input>
      </label>
    
      <label>E-mail:
        <input type="email" id="email" name="email" required></input>
      </label>
    
      <label for="concordo-email" class="estilizado">
        <input type="checkbox" id="concordo-email" name="concordo-email" value="sim" required></input>
        <span>Sim, desejo receber e-mails com as últimas notícias e atualizações.</span>
      </label>
    
      <button type="submit">Assinar</button>
    </form>
  </section>
  )
}

export default Form