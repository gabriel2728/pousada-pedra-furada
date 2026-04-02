let tarefas = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(tarefas);
  }

  if (req.method === "POST") {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return res.status(400).json({ erro: "Dados inválidos" });
    }

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      status: "Atribuída",
    };

    tarefas.push(novaTarefa);

    return res.status(201).json(novaTarefa);
  }

  return res.status(405).json({ erro: "Método não permitido" });
}