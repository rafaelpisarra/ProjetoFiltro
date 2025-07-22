import { User } from "../interfaces/user/user.interface"

export const UsersList: User[] = [
  {
    nome: "Ana Souza",
    email: "ana.souza@gmail.com",
    senha: "ana123!",
    idade: "28",
    endereco: {
      rua: "Av. Brasil",
      numero: 789,
      bairro: "Jardins",
      cidade: "Rio de Janeiro",
      estado: "RJ",
      pais: "Brasil"
    },
    telefone: "21998765432",
    ativo: true,
    funcao: "Usuário",
    dataCadastro: "2025-05-10",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimaAtividade: "2023-12-05T08:30:00Z"
    }
  },
  {
    nome: "Carlos Pereira",
    email: "carlos.pereira@yahoo.com",
    senha: "senhaSegura@2023",
    idade: "45",
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      bairro: "Bela Vista",
      cidade: "Curitiba",
      estado: "PR",
      pais: "Brasil"
    },
    telefone: "41991234567",
    ativo: false,
    funcao: "Moderador",
    dataCadastro: "2025-11-03",
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimaAtividade: "2023-08-20T14:45:00Z"
    }
  },
  {
    nome: "Juliana Lima",
    email: "juliana.lima@outlook.com",
    senha: "juliana@2024",
    idade: "33",
    endereco: {
      rua: "Travessa do Sol",
      numero: 35,
      bairro: "Centro",
      cidade: "Salvador",
      estado: "BA",
      pais: "Brasil"
    },
    telefone: "71996543210",
    ativo: true,
    funcao: "Administrador",
    dataCadastro: "2025-03-22",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: false,
      ultimaAtividade: "2025-07-10T09:15:00Z"
    }
  },
  {
    nome: "Eduardo Martins",
    email: "edu.martins@gmail.com",
    senha: "edmartins2023",
    idade: "39",
    endereco: {
      rua: "Rua Projetada",
      numero: 987,
      bairro: "Industrial",
      cidade: "Belo Horizonte",
      estado: "MG",
      pais: "Brasil"
    },
    telefone: "3198888777",
    ativo: true,
    funcao: "Analista",
    dataCadastro: "2025-08-14",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimaAtividade: "2024-11-29T18:00:00Z"
    }
  },
  {
    nome: "Mariana Castro",
    email: "mariana.castro@gmail.com",
    senha: "mariana@321",
    idade: "26",
    endereco: {
      rua: "Rua do Comércio",
      numero: 12,
      bairro: "São Francisco",
      cidade: "Florianópolis",
      estado: "SC",
      pais: "Brasil"
    },
    telefone: "48991112233",
    ativo: true,
    funcao: "Usuário",
    dataCadastro: "2023-07-01",
    status: {
      online: true,
      verificado: false,
      assinaturaAtiva: false,
      ultimaAtividade: "2025-07-13T20:20:00Z"
    }
  }
]
