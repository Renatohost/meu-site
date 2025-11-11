const servicos = [
  { nome: "Barbeiro", tipo: "Beleza masculina", distancia: "1.2 km", nota: 4.9, descricao: "Corte, barba e cuidados masculinos.", imagem: "https://cdn-icons-png.flaticon.com/512/3187/3187880.png" },
  { nome: "Eletricista", tipo: "Serviços elétricos", distancia: "2.5 km", nota: 4.7, descricao: "Instalações e manutenções elétricas residenciais.", imagem: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png" },
  { nome: "Encanador", tipo: "Hidráulica", distancia: "3.1 km", nota: 4.8, descricao: "Conserto de vazamentos e trocas de encanamentos.", imagem: "https://cdn-icons-png.flaticon.com/512/706/706234.png" },
  { nome: "Pintor", tipo: "Reformas", distancia: "2.8 km", nota: 4.6, descricao: "Pintura residencial e comercial.", imagem: "https://cdn-icons-png.flaticon.com/512/2713/2713488.png" },
  { nome: "Jardineiro", tipo: "Serviços externos", distancia: "4.0 km", nota: 4.9, descricao: "Corte de grama, podas e manutenção de jardins.", imagem: "https://cdn-icons-png.flaticon.com/512/761/761838.png" },
  { nome: "Marceneiro", tipo: "Móveis sob medida", distancia: "2.2 km", nota: 4.7, descricao: "Criação e reforma de móveis personalizados.", imagem: "https://cdn-icons-png.flaticon.com/512/3068/3068677.png" },
  { nome: "Pedreiro", tipo: "Construção", distancia: "3.5 km", nota: 4.5, descricao: "Serviços de alvenaria e pequenas reformas.", imagem: "https://cdn-icons-png.flaticon.com/512/3421/3421811.png" },
  { nome: "Faxineira", tipo: "Limpeza", distancia: "1.9 km", nota: 4.8, descricao: "Limpeza residencial e empresarial.", imagem: "https://cdn-icons-png.flaticon.com/512/2814/2814939.png" },
  { nome: "Motorista particular", tipo: "Transporte", distancia: "5.0 km", nota: 4.9, descricao: "Transporte rápido e seguro pela cidade.", imagem: "https://cdn-icons-png.flaticon.com/512/595/595063.png" },
  { nome: "Professor particular", tipo: "Educação", distancia: "2.0 km", nota: 4.9, descricao: "Aulas particulares em diversas matérias.", imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { nome: "Técnico em informática", tipo: "Assistência técnica", distancia: "1.6 km", nota: 4.8, descricao: "Manutenção e formatação de computadores.", imagem: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png" },
  { nome: "Cuidador de idosos", tipo: "Saúde e bem-estar", distancia: "3.0 km", nota: 4.7, descricao: "Acompanhamento e cuidados com idosos.", imagem: "https://cdn-icons-png.flaticon.com/512/3820/3820106.png" },
  { nome: "Personal trainer", tipo: "Fitness", distancia: "2.3 km", nota: 4.9, descricao: "Treinos personalizados para você atingir seus objetivos.", imagem: "https://cdn-icons-png.flaticon.com/512/3063/3063190.png" },
  { nome: "Dog Walker", tipo: "Pets", distancia: "1.4 km", nota: 4.8, descricao: "Passeios e cuidados com seu cãozinho.", imagem: "https://cdn-icons-png.flaticon.com/512/616/616408.png" }
];

const container = document.getElementById("lista-servicos");
const campoBusca = document.getElementById("busca");
const btnBuscar = document.getElementById("btnBuscar");

function exibirServicos(lista) {
  container.innerHTML = "";
  lista.forEach(s => {
    const card = document.createElement("div");
    card.classList.add("servico-card");
    card.innerHTML = `
      <img src="${s.imagem}" alt="${s.nome}">
      <div class="servico-info">
        <h3>${s.nome}</h3>
        <p>${s.tipo} • ${s.distancia}</p>
        <p>${s.descricao}</p>
        <span class="avaliacao">⭐ ${s.nota}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

btnBuscar.addEventListener("click", () => {
  const termo = campoBusca.value.toLowerCase();
  const filtrados = servicos.filter(s => 
    s.nome.toLowerCase().includes(termo) ||
    s.tipo.toLowerCase().includes(termo)
  );
  exibirServicos(filtrados.length ? filtrados : servicos);
});

exibirServicos(servicos);
